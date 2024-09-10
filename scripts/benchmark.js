const path = require('path');
const spawn = require('child_process').spawn;
const fs = require('fs');
const argv = require('yargs-parser')(process.argv.slice(2));
const inquirer = require('inquirer');
const chalk = require('chalk');
const semver = require('semver');

const outputPath = path.resolve(__dirname, '../src/lib');
const languages = fs.readdirSync(outputPath).filter((item) => {
    return fs.statSync(path.join(outputPath, item)).isDirectory();
});

const isRelease = !!argv.release;
const cmd = 'tsx';

const MIN_VERSION = '16.0.0';
const RELEASE_VERSION = '21.0.0';
const RECOMMENDED_VERSION = '18.0.0';

function runBenchmark(language, mode) {
    const lang = language === 'All Languages' ? 'all' : language;
    const isHotStart = mode === 'hot';
    const tsx = spawn(
        cmd,
        [
            '--no-warnings',
            'benchmark/run.ts',
            '--lang=' + lang,
            isHotStart ? '--hot' : '',
            isRelease ? '--release' : '',
        ],
        {
            cwd: process.cwd(),
            stdio: ['inherit', process.stdout, 'inherit'],
        }
    );
    console.info(chalk.green('Executing:'), chalk.gray(tsx.spawnargs.join(' ')));
}

function checkVersion() {
    const currentVersion = process.versions.node;
    if (semver.lt(currentVersion, MIN_VERSION)) {
        console.error(
            chalk.bold.red(
                `Current Node.js version (v${currentVersion}) is lower than required version (v${semver.major(MIN_VERSION)}.x)`
            )
        );
        return false;
    } else {
        if (isRelease && semver.lt(currentVersion, RELEASE_VERSION)) {
            console.error(
                chalk.bold.red(
                    `Node.js version v${semver.major(RELEASE_VERSION)}.x+ is required for release benchmark!`
                )
            );
            return false;
        }
        return true;
    }
}

function prompt() {
    const isNodeVersionOk = semver.gte(process.versions.node, RECOMMENDED_VERSION);
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'language',
                message: 'Which language you want to run benchmark (or all languages)',
                choices: ['All Languages', ...languages],
                loop: true,
            },
            {
                type: 'list',
                name: 'mode',
                message: 'Which mode you want to run',
                choices: [
                    {
                        name:
                            'Cold start' +
                            (isNodeVersionOk
                                ? ''
                                : ` (Only supported on Node.js v${semver.major(RECOMMENDED_VERSION)}.x+)`),
                        value: 'cold',
                        disabled: !isNodeVersionOk,
                    },
                    {
                        name: 'Hot start',
                        value: 'hot',
                    },
                ],
            },
        ])
        .then((result) => {
            runBenchmark(result.language, result.mode);
        });
}

function main() {
    if (!checkVersion()) return;
    if (argv.lang) {
        const supportedLanguage = languages.some((language) => language === argv.lang);
        if (supportedLanguage || argv.lang === 'All Languages') {
            runBenchmark(argv.lang);
        } else {
            console.error(
                chalk.bold.red('\n[Invalid language]:'),
                chalk.white.underline(`${argv.lang}\n`)
            );
            prompt();
        }
    } else {
        prompt();
    }
}

main();
