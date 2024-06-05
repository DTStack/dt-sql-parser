import path from 'path';
import argsParser from 'yargs-parser';
import fs from 'fs';
import SqlBenchmark, { languageNameMap, languages } from './sqlBenchmark';
import type { Language } from './sqlBenchmark';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Table } from 'console-table-printer';

const argv = argsParser(process.argv.slice(2));
const isChooseAll = argv.lang === 'all';

type TestFile = {
    /** Benchmark Name */
    name: string;
    /** Test sql name */
    sqlFileName: string;
    /** Test run times */
    loopTimes?: number;
    /** Test method name of parser */
    testTypes: string[];
    /** Exclude languages */
    excludes?: Language[];
    /** Include languages */
    includes?: Language[];
};

const testFiles: TestFile[] = [
    {
        name: 'Query Collection (100 Rows)',
        sqlFileName: 'select.sql',
        loopTimes: 3,
        testTypes: ['validate', 'getAllTokens'],
        excludes: ['plsql', 'postgresql'],
    },
    {
        name: 'Select All Entities',
        sqlFileName: 'select.sql',
        loopTimes: 1,
        testTypes: ['getAllEntities'],
        includes: ['hive'],
    },
    {
        name: 'Create Table (100 Rows)',
        sqlFileName: 'create.sql',
        loopTimes: 3,
        testTypes: ['validate', 'getAllTokens'],
        excludes: ['plsql', 'postgresql'],
    },
];

let benchmarkResults: SqlBenchmark[] = [];

const readSql = (fileName: string, lang: string) => {
    const sqlPath = path.join(__dirname, `./data/${lang}/${fileName}`);
    if (!fs.existsSync(sqlPath)) return '';
    return fs.readFileSync(sqlPath, 'utf-8');
};

const readParams = (lang: string) => {
    const paramsPath = path.join(__dirname, `./data/${lang}/params.json`);
    if (!fs.existsSync(paramsPath)) return null;
    return fs.readFileSync(paramsPath, 'utf-8');
};

const getParams = (originalParams: any, sqlFileName: string, methodType: string): any[] => {
    if (!originalParams) return ['$sql'];
    const fileName = sqlFileName.substring(0, sqlFileName.lastIndexOf('.sql') + 1);
    return originalParams[fileName]?.[methodType] || ['$sql'];
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

            rows.push({
                name: name,
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
    const sqlBenchmark = new SqlBenchmark(lang);
    const originalParams = readParams(lang);

    testFiles.forEach((testInfo) => {
        const { name, sqlFileName, testTypes, loopTimes, excludes, includes } = testInfo;
        if (excludes?.includes(lang) || (includes?.length && !includes.includes(lang))) return;
        const sql = readSql(sqlFileName, lang);
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
