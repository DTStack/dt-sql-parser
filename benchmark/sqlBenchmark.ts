import path from 'path';
import { MarkdownWritter } from './markdownWritter';
import envinfo from 'envinfo';
import { Table } from 'console-table-printer';
import { BasicSQL } from '../src/parser/common/basicSQL';
import fs from 'fs';

export type BenchmarkResult = {
    name: string;
    avgTime: number;
    costTimes: number[];
    loopTimes: number;
    type: string;
    rows: number;
    lastCostTime?: number;
};

const tableColumns = [
    {
        name: 'name',
        title: 'Benchmark Name',
    },
    {
        name: 'rows',
        title: 'SQL Rows',
    },
    {
        name: 'avgTime',
        title: 'Average Time(ms)',
    },
    {
        name: 'lastCostTime',
        title: 'Last Cost Time(ms)',
    },
    {
        name: 'costTimes',
        title: 'All Times(ms)',
    },
    {
        name: 'loopTimes',
        title: 'Loops',
    },
    {
        name: 'type',
        title: 'Type',
    },
];

/**
 * Key is sql directory name, value is module export name.
 */
export const languageNameMap = {
    hive: 'HiveSQL',
    mysql: 'MySQL',
    plsql: 'PLSQL',
    flink: 'FlinkSQL',
    spark: 'SparkSQL',
    postgresql: 'PostgreSQL',
    trino: 'TrinoSQL',
    impala: 'ImpalaSQL',
};

export type Language = keyof typeof languageNameMap;

export const languages = Object.keys(languageNameMap) as Language[];

class SqlBenchmark {
    constructor(language: string) {
        this.language = language;
        this._lastResultsCache = this.getLastResults();
    }

    public results: BenchmarkResult[] = [];

    public readonly language: string;

    private _DEFAULT_LOOP_TIMES = 3;

    /**
     * If current average time difference from last time grater than DIFF_RATIO, we will highlight that record.
     */
    private _HIGHLIGHT_DIFF_RATIO = 0.1;

    private _lastResultsCache: BenchmarkResult[] | null = null;

    /**
     * Returns SqlParser instance of specific language.
     *
     * Due to the presence of ATN cache in antlr4, we will clear the module cache to ensure that each parser is brand new and with no cache.
     */
    getSqlParser(): BasicSQL {
        const caches = Object.keys(require.cache);
        const cacheModules = [
            path.join(__dirname, `../src/parser/common/`),
            path.join(__dirname, `../src/parser/${this.language}/`),
            path.join(__dirname, `../src/lib/${this.language}/`),
            path.normalize(require.resolve('antlr4ng')),
        ];
        caches
            .filter((moduleName) =>
                cacheModules.some((cacheModuleName) => moduleName.includes(cacheModuleName))
            )
            .forEach((moduleName) => delete require.cache[moduleName]);
        const Parser = require(path.join(__dirname, `../src/parser/${this.language}/index.ts`))[
            languageNameMap[this.language]
        ];
        return new Parser();
    }

    /**
     * @param type Which parser method you want to run
     * @param name Benchmark name
     * @param params Parser method parameters
     * @param params Rows count of sql
     * @param loopTimes Loop times, default run 3 times
     */
    run(
        type: string,
        name: string,
        params: any[],
        sqlRows: number,
        loopTimes: number = this._DEFAULT_LOOP_TIMES
    ) {
        const costTimes: number[] = [];
        const lastResult =
            this._lastResultsCache?.find((item) => item.type === type && item.name === name) ?? {};
        for (let i = 0; i < loopTimes; i++) {
            const parser = this.getSqlParser();
            if (!parser[type] || typeof parser[type] !== 'function') return;
            const startTime = performance.now();
            parser[type](...params);
            const costTime = performance.now() - startTime;

            costTimes.push(Math.round(costTime));
        }

        const avgTime = Math.round(costTimes.reduce((prev, curr) => prev + curr, 0) / loopTimes);
        const result = {
            name,
            avgTime,
            lastCostTime: lastResult['avgTime'],
            costTimes,
            loopTimes,
            rows: sqlRows,
            type,
        };

        this.results.push(result);
    }

    getLastResults() {
        const reportPath = path.join(__dirname, `./reports/${this.language}.benchmark.md`);
        if (!fs.existsSync(reportPath)) return null;
        const report = fs.readFileSync(reportPath, { encoding: 'utf-8' });
        const pattern = /<input .*? value=['"](.+?)['"]\s*\/>/;
        const match = pattern.exec(report);
        if (match) {
            const lastResultsStr = match[1];
            try {
                const lastResults = JSON.parse(lastResultsStr);
                return lastResults;
            } catch (error) {
                console.log('Parse value of last results failed: ', lastResultsStr);
                return null;
            }
        }
        return null;
    }

    printResults() {
        const table = new Table({
            title: languageNameMap[this.language] ?? this.language,
            columns: tableColumns,
        });
        this.results.forEach((record) => {
            const { lastCostTime, avgTime: currentCostTime } = record;
            const isSignificantDiff =
                lastCostTime !== undefined &&
                Math.abs(lastCostTime - currentCostTime) / currentCostTime >
                    this._HIGHLIGHT_DIFF_RATIO;
            const [color, icon] = isSignificantDiff
                ? currentCostTime > lastCostTime
                    ? ['red', '↓']
                    : ['green', '↑']
                : ['#FFF', ' '];

            table.addRow(
                {
                    ...record,
                    lastCostTime: record.lastCostTime ?? '-',
                    avgTime: record.avgTime + icon,
                },
                {
                    color,
                }
            );
        });
        table.printTable();
    }

    async saveResults() {
        const envInfo = await envinfo.run(
            {
                System: ['OS', 'CPU', 'Memory'],
                npmPackages: ['antlr4ng', 'antlr4-c3'],
            },
            { json: true }
        );
        const currentVersion = require('../package.json').version;
        const parsedEnvInfo = JSON.parse(envInfo);
        const writePath = path.join(__dirname, `./reports/${this.language}.benchmark.md`);
        const writter = new MarkdownWritter(writePath);
        writter.writeHeader('Benchmark', 2);
        writter.writeLine();

        writter.writeHeader('Language', 3);
        writter.writeText(languageNameMap[this.language] ?? this.language);
        writter.writeLine();

        writter.writeHeader('Report Time', 3);
        writter.writeText(new Date().toLocaleString());
        writter.writeLine();

        writter.writeHeader('Device', 3);
        writter.writeText(parsedEnvInfo.System.OS);
        writter.writeText(parsedEnvInfo.System.CPU);
        writter.writeText(parsedEnvInfo.System.Memory);
        writter.writeLine();

        writter.writeHeader('Version', 3);
        writter.writeText(`dt-sql-parser: ${currentVersion}`);
        writter.writeText(`antlr4-c3: ${parsedEnvInfo.npmPackages['antlr4-c3']?.installed}`);
        writter.writeText(`antlr4ng: ${parsedEnvInfo.npmPackages['antlr4ng']?.installed}`);
        writter.writeLine();

        writter.writeHeader('Report', 3);
        writter.writeTable(tableColumns, this.results);
        writter.writeLine();

        // Save original data via hidden input
        writter.writeHiddenInput(this.results);

        writter.save();

        return writePath;
    }
}

export default SqlBenchmark;
