import path from 'path';
import argsParser from 'yargs-parser';
import fs from 'fs';
import SqlBenchmark, { languageNameMap, languages } from './sqlBenchmark';
import type { Language } from './sqlBenchmark';
import inquirer from 'inquirer';
import chalk from 'chalk';
import config from './benchmark.config';
import { Table } from 'console-table-printer';

const argv = argsParser(process.argv.slice(2));
const isChooseAll = argv.lang === 'all';
const isHot = argv.hot !== undefined;
const isRelease = argv.release !== undefined;
const testFiles = config.testFiles;

let benchmarkResults: SqlBenchmark[] = [];

const readSql = (fileName: string) => {
    const sqlPath = path.join(__dirname, `./data/${fileName}`);
    if (!fs.existsSync(sqlPath)) return '';
    return fs.readFileSync(sqlPath, 'utf-8');
};

const readParams = () => {
    const paramsPath = path.join(__dirname, `./data/params.json`);
    if (!fs.existsSync(paramsPath)) return null;
    return fs.readFileSync(paramsPath, 'utf-8');
};

const getParams = (originalParams: any, sqlFileName: string, methodType: string): any[] => {
    if (!originalParams) return ['$sql'];
    try {
        const params = JSON.parse(originalParams);
        const fileName = sqlFileName.substring(0, sqlFileName.lastIndexOf('.sql'));
        return params[fileName]?.[methodType] || ['$sql'];
    } catch (error) {
        return ['$sql'];
    }
};

const askForSaveResult = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'save',
                message: 'Do you want to save this benchmark report? (y/N) default is false',
                filter: (val) => {
                    if (!val) return false;
                    if (['y', 'yes'].includes(val.toLowerCase())) return true;
                    if (['n', 'no'].includes(val.toLowerCase())) return false;
                },
            },
        ])
        .then((answer) => {
            if (answer.save) {
                if (isChooseAll) {
                    Promise.all(
                        benchmarkResults.map((sqlBenchmark) => sqlBenchmark.saveResults())
                    ).then(() => {
                        console.log(chalk.green(`All Reports saved successfully.`));
                    });
                } else {
                    const [sqlBenchmark] = benchmarkResults;
                    sqlBenchmark?.saveResults().then((path) => {
                        console.log(chalk.green(`Report saved successfully. See ${path}`));
                    });
                }
            }
        });
};

/**
 * If choose all language, generate and print summary benchmark report.
 *
 * You can compare the performance differences between different sql languages.
 */
const printSummaryReport = () => {
    const rows: any = [];
    const costTimeMap = new Map<string, number>();

    benchmarkResults.forEach((sqlBenchmark) => {
        sqlBenchmark.results.forEach(({ name, type, avgTime }) => {
            costTimeMap.set([sqlBenchmark.language, name, type].join('_'), avgTime);
        });
    });

    testFiles.forEach(({ testTypes, name }) => {
        testTypes.forEach((testType) => {
            const langsCostTime: Record<string, string | number> = {};
            languages.forEach((lang) => {
                const costTime = costTimeMap.get([lang, name, testType].join('_'));
                langsCostTime[lang] = costTime ?? '-';
            });

            if (rows.some((row) => row.name === name && row.testType === testType)) return;

            rows.push({
                name,
                testType,
                ...langsCostTime,
            });
        });
    });

    const table = new Table({
        title: 'Summary Benchmark',
        columns: [
            { name: 'name', title: 'Benchmark Name' },
            { name: 'testType', title: 'Type' },
            ...languages.map((lang) => ({ name: lang, title: languageNameMap[lang] })),
        ],
    });
    table.addRows(rows);
    table.printTable();
};

const benchmark = (lang: Language) => {
    const sqlBenchmark = new SqlBenchmark(lang, isHot, isRelease);
    const originalParams = readParams();

    testFiles.forEach((testInfo) => {
        const { name, sqlFileName, testTypes, loopTimes, excludes, includes } = testInfo;
        if (excludes?.includes(lang) || (includes?.length && !includes.includes(lang))) return;
        const sql = readSql(sqlFileName);
        const sqlRows = sql.split('\n').length;
        testTypes.forEach((type) => {
            const params = getParams(originalParams, sqlFileName, type);
            const sqlParamIndex = params.findIndex((param) => param === '$sql');
            // replace with real sql text
            if (sqlParamIndex !== -1) params.splice(sqlParamIndex, 1, sql);
            sqlBenchmark.run(type, name, params, sqlRows, loopTimes);
        });
    });
    sqlBenchmark.printResults();
    benchmarkResults.push(sqlBenchmark);
};

function run() {
    if (isChooseAll) {
        for (const lang of languages) {
            benchmark(lang);
        }
        printSummaryReport();
    } else {
        benchmark(argv.lang);
    }
    askForSaveResult();
}

process.on('uncaughtException', (err) => console.log(err));

run();
