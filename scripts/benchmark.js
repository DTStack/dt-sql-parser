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

function runBenchmark(language, mode) {
    const lang = language === 'All Languages' ? 'all' : language;
    const isHotRuns = mode === 'Hot runs';
    const tsx = spawn(
        cmd,
        [
            'benchmark/run.ts',
            '--lang=' + lang,
            isHotRuns ? '--hot' : '',
            isRelease ? '--release' : '',
            '--no-warnings',
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
    const minVersion = '16.14.0';
    const recommendedVersion = '21.6.1';
    if (semver.lt(currentVersion, minVersion)) {
        console.error(
            chalk.bold.red(
                `Current Node.js version (v${currentVersion}) is lower than required version (v${minVersion})`
            )
        );
        return false;
    } else {
        if (semver.lt(currentVersion, recommendedVersion))
            console.warn(
                chalk.bold.bgCyan(
                    `Node.js version v${recommendedVersion} is recommended, otherwise there may be a memory leak!`
                )
            );
        return true;
    }
}

function prompt() {
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
                choices: [{ name: 'Cold runs' }, { name: 'Hot runs', disabled: !!isRelease }],
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
