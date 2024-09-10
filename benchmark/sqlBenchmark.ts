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

// 过滤掉异常数据，m为判断为异常值的标准差倍数
const removeOutliers = (data, m = 1) => {
    if (data.length <= 2) return data;
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const standardDeviation = Math.sqrt(
        data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / data.length
    );

    return data.filter((x) => Math.abs(x - mean) <= m * standardDeviation);
};

const tableColumns = [
    {
        name: 'name',
        title: 'Benchmark Name',
    },
    {
        name: 'type',
        title: 'Method Name',
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
];

const releaseColumns = tableColumns.filter(
    (column) => !['lastCostTime', 'costTimes', 'loopTimes'].includes(column.name)
);

const hotRunColumns = tableColumns.filter(
    (column) => !['avgTime', 'lastCostTime'].includes(column.name)
);

/**
 * Key is sql directory name, value is module export name.
 */
export const languageNameMap = {
    hive: 'HiveSQL',
    mysql: 'MySQL',
    flink: 'FlinkSQL',
    spark: 'SparkSQL',
    postgresql: 'PostgreSQL',
    trino: 'TrinoSQL',
    impala: 'ImpalaSQL',
};

export type Language = keyof typeof languageNameMap;

export const languages = Object.keys(languageNameMap) as Language[];

class SqlBenchmark {
    constructor(language: string, isHot: boolean, isRelease: boolean) {
        this.language = language;
        this.isHot = isHot;
        this.isRelease = isRelease;

        this._lastResultsCache = this.getLastResults();
    }

    public results: BenchmarkResult[] = [];

    public readonly language: string;

    public readonly isHot: boolean;

    public readonly isRelease: boolean;

    private _DEFAULT_LOOP_TIMES = 5;

    private _RELEASE_LOOP_TIMES = 15;

    /**
     * If current average time difference from last time grater than DIFF_RATIO, we will highlight that record.
     */
    private _HIGHLIGHT_DIFF_RATIO = 0.15;

    private _lastResultsCache: BenchmarkResult[] | null = null;

    /**
     * Returns SqlParser instance of specific language.
     */
    getSqlParser(): BasicSQL {
        if (!this.isHot) {
            this.clearATNCache();
        }
        const Parser = require(path.resolve(`src/parser/${this.language}/index.ts`))[
            languageNameMap[this.language]
        ];
        return new Parser();
    }

    /**
     * Due to the presence of ATN cache in antlr4, we will clear the module cache to ensure that each parser is brand new and with no cache.
     */
    clearATNCache() {
        const caches = Object.keys(require.cache);
        const sourcePath = path.join(__dirname, '../src');
        caches
            .filter((cache) => cache.includes(sourcePath))
            .forEach((moduleName) => {
                const module = require.cache[moduleName]!;
                // Fix Memory Leak
                if (module.parent) {
                    module.parent.children = [];
                }
                delete require.cache[moduleName];
            });
    }

    getColumns = () => {
        return this.isRelease ? releaseColumns : this.isHot ? hotRunColumns : tableColumns;
    };

    /**
     * @param type Which parser method you want to run
     * @param name Benchmark name
     * @param params Parser method parameters
     * @param sqlRows Rows count of sql
     * @param loopTimes Loop times, default run 5 times
     */
    run(
        type: string,
        name: string,
        params: any[],
        sqlRows: number,
        loops: number = this._DEFAULT_LOOP_TIMES
    ) {
        let avgTime = 0;
        let loopTimes = this.isRelease ? this._RELEASE_LOOP_TIMES : loops;
        const costTimes: number[] = [];
        const lastResult =
            this._lastResultsCache?.find((item) => item.type === type && item.name === name) ?? {};

        if (this.isHot) {
            this.clearATNCache();
        }

        if (this.isHot && loopTimes < 2) {
            throw new Error('Hot start should run at least 2 times');
        }

        for (let i = 0; i < loopTimes; i++) {
            const parser = this.getSqlParser();
            if (!parser[type] || typeof parser[type] !== 'function') return;

            const startTime = performance.now();
            parser[type](...params);
            const costTime = performance.now() - startTime;

            costTimes.push(Math.round(costTime));
        }

        const filteredData = removeOutliers(this.isHot ? costTimes.slice(1) : costTimes);
        avgTime = Math.round(
            filteredData.reduce((prev, curr) => prev + curr, 0) / filteredData.length
        );

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
        const reportPath = path.join(
            __dirname,
            './reports',
            this.isHot ? 'hot_start' : 'cold_start',
            `${this.language}.benchmark.md`
        );
        if (this.isRelease || !fs.existsSync(reportPath)) return null;

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
            const [color, icon] =
                isSignificantDiff && !this.isHot
                    ? currentCostTime > lastCostTime
                        ? ['red', '↑']
                        : ['green', '↓']
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
        const baseDir = path.join(
            __dirname,
            this.isRelease ? '../benchmark_reports' : './reports',
            this.isHot ? 'hot_start' : 'cold_start'
        );

        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir, { recursive: true });
        }

        const writePath = path.join(baseDir, `./${this.language}.benchmark.md`);
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
        writter.writeText(parsedEnvInfo.System.Memory?.split('/')[1]?.trim());
        writter.writeLine();

        writter.writeHeader('Version', 3);
        writter.writeText(`\`nodejs\`: ${process.version}`);
        writter.writeText(`\`dt-sql-parser\`: v${currentVersion}`);
        writter.writeText(`\`antlr4-c3\`: v${parsedEnvInfo.npmPackages['antlr4-c3']?.installed}`);
        writter.writeText(`\`antlr4ng\`: v${parsedEnvInfo.npmPackages['antlr4ng']?.installed}`);
        writter.writeLine();

        writter.writeHeader('Running Mode', 3);
        writter.writeText(this.isHot ? 'Hot Start' : 'Cold Start');
        writter.writeLine();

        writter.writeHeader('Report', 3);

        const columns = this.getColumns();
        writter.writeTable(columns, this.results);
        writter.writeLine();

        // Save original data via hidden input
        !this.isRelease && writter.writeHiddenInput(this.results);

        writter.save();

        return writePath;
    }
}

export default SqlBenchmark;
