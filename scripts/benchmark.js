const path = require('path');
const spawn = require('child_process').spawn;
const fs = require('fs');
const argv = require('yargs-parser')(process.argv.slice(2));
const inquirer = require('inquirer');
const chalk = require('chalk');

const outputPath = path.resolve(__dirname, '../src/grammar');

const languageEntries = fs.readdirSync(outputPath);

const cmd = 'tsx';

function runBenchmark(language) {
    const lang = language === 'All Languages' ? 'all' : language;

    const tsx = spawn(cmd, ['benchmark/run.ts', '--lang=' + lang, '--no-warnings'], {
        cwd: process.cwd(),
        stdio: ['inherit', process.stdout, 'pipe'],
    });
    console.info(chalk.green('Executing:'), chalk.gray(tsx.spawnargs.join(' ')));
}

function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'language',
                message: 'Which language you want to run benchmark (or all languages)',
                choices: ['All Languages', ...languageEntries],
                loop: true,
            },
        ])
        .then((result) => {
            runBenchmark(result.language);
        });
}

function main() {
    if (argv.lang) {
        const supportedLanguage = languageEntries.some((language) => language === argv.lang);
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
