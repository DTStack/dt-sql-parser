import path from 'path';
import argsParser from 'yargs-parser';
import fs from 'fs';
import SqlBenchmark, { languageNameMap } from './sqlBenchmark';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Table } from 'console-table-printer';

const languages: string[] = fs.readdirSync(path.resolve(__dirname, '../src/grammar'));
const argv = argsParser(process.argv.slice(2));
const isChooseAll = argv.lang === 'all';

type TestFile = {
    /** Benchmark Name */
    name: string;
    /** Test sql path */
    path: string;
    /** Test run times */
    loopTimes?: number;
    /** Test method name of parser */
    testTypes: string[];
    /** Exclude languages */
    excludes?: string[];
    /** Include languages */
    includes?: string[];
};

const testFiles: TestFile[] = [
    {
        name: 'Query Collection (100 Rows)',
        path: 'select.sql',
        loopTimes: 3,
        testTypes: ['validate', 'getAllTokens'],
        excludes: ['pgsql', 'mysql'],
    },
    {
        name: 'Create Table (100 Rows)',
        path: 'create.sql',
        loopTimes: 3,
        testTypes: ['validate'],
        excludes: ['pgsql', 'mysql'],
    },
];

let benchmarkResults: SqlBenchmark[] = [];

const readSql = (fileName: string, lang: string) => {
    const sqlPath = path.join(__dirname, `./data/${lang}/${fileName}`);
    if (!fs.existsSync(sqlPath)) return '';
    return fs.readFileSync(sqlPath, 'utf-8');
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

const benchmark = (lang: string) => {
    const sqlBenchmark = new SqlBenchmark(lang);
    testFiles.forEach((testInfo) => {
        const { name, path, testTypes, loopTimes, excludes, includes } = testInfo;
        if (excludes?.includes(lang) || (includes?.length && !includes.includes(lang))) return;
        const sql = readSql(path, lang);
        testTypes.forEach((type) => sqlBenchmark.run(type, name, sql, loopTimes));
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
