const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');
const argv = require('yargs-parser')(process.argv.slice(2));
const inquirer = require('inquirer');
const chalk = require('chalk');

const grammarsPath = path.resolve(__dirname, '../src/grammar');
const outputPath = path.resolve(__dirname, '../src/lib');

const languageEntries = fs.readdirSync(grammarsPath).filter((item) => item !== 'impala'); // impala is not support yet.

const baseCmd = 'antlr4ts -visitor -listener -Xexact-output-dir -o';

function compile(language) {
    const cmd = `${baseCmd} ${outputPath}/${language} ${grammarsPath}/${language}/*.g4`;

    if (fs.existsSync(`${outputPath}/${language}`)) {
        console.info(chalk.green(`\nRemoving:`, chalk.gray(`${outputPath}/${language}/*`)));
        fs.rmSync(`${outputPath}/${language}`, { recursive: true });
    }

    console.info(chalk.green('Executing:'), chalk.gray(cmd));
    exec(cmd, (err) => {
        if (err) {
            console.error(
                chalk.redBright(`\n[Antlr4 compile error]:`),
                chalk.cyan(language),
                chalk.gray(err)
            );
        } else {
            console.log(chalk.greenBright(`\nCompile ${language} succeeded!`));
        }
    });
}

function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'language',
                message: 'Which language you want compile (or all languages)',
                choices: ['All Languages', ...languageEntries],
                loop: true,
            },
        ])
        .then((result) => {
            const language = result.language;
            if (language === 'All Languages') {
                languageEntries.forEach((language) => {
                    compile(language);
                });
            } else {
                compile(result.language);
            }
        });
}

function main() {
    if (argv.all) {
        // compile all: yarn antlr4 --all
        languageEntries.forEach((language) => {
            compile(language);
        });
    } else if (argv.lang) {
        // compile single: yarn antlr4 --lang=mysql
        const supportedLanguage = languageEntries.some((language) => language === argv.lang);
        if (supportedLanguage) {
            compile(argv.lang);
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
