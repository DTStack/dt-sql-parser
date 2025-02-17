const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');
const argv = require('yargs-parser')(process.argv.slice(2));
const inquirer = require('inquirer');
const chalk = require('chalk');
const crypto = require('crypto');
const { cleanComment } = require('./cleanComment');

const grammarsPath = path.resolve(__dirname, '../src/grammar');
const outputPath = path.resolve(__dirname, '../src/lib');

const languageEntries = fs.readdirSync(grammarsPath).filter((language) => {
    return fs.statSync(path.join(grammarsPath, language)).isDirectory();
});

const baseCmd = 'antlr4ng -Dlanguage=TypeScript -visitor -listener -Xexact-output-dir -o';

function getFileHash(filePath) {
    if (!fs.existsSync(filePath)) return null;

    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    return hashSum.digest('hex');
}

function compile(language) {
    return new Promise((resolve, reject) => {
        const outputDir = `${outputPath}/${language}`;
        const grammarFiles = fs
            .readdirSync(`${grammarsPath}/${language}`)
            .filter((file) => file.endsWith('.g4'));
        const previousHashes = grammarFiles.map((file) => ({
            file,
            hash: getFileHash(path.join(outputDir, file.replace('.g4', '.ts'))),
        }));

        if (language !== 'plsql' && fs.existsSync(`${outputPath}/${language}`)) {
            console.info(chalk.green(`\nRemoving:`, chalk.gray(`${outputPath}/${language}/*`)));
            fs.rmSync(`${outputPath}/${language}`, { recursive: true });
        }

        const cmd = `${baseCmd} ${outputDir} ${grammarsPath}/${language}/*.g4`;
        console.info(chalk.green('Executing:'), chalk.gray(cmd));
        exec(cmd, (err) => {
            if (err) {
                console.error(
                    chalk.redBright(`\n[Antlr4 compile error]:`),
                    chalk.cyan(language),
                    chalk.gray(err)
                );
            } else {
                cleanComment(language);
                console.info(chalk.greenBright(`Compile ${language} succeeded!`));

                const changedFiles = grammarFiles.filter((file) => {
                    const newHash = getFileHash(path.join(outputDir, file.replace('.g4', '.ts')));
                    const prevHash = previousHashes.find((h) => h.file === file)?.hash;
                    return newHash !== prevHash;
                });

                if (changedFiles.length > 0 && argv.check) {
                    return reject(`${language} not run antlr4`);
                }
                resolve();
            }
        });
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

async function antlr4AllSql() {
    const errors = [];

    const tasks = languageEntries.map((language) =>
        compile(language).catch((err) => errors.push(err))
    );

    await Promise.all(tasks);

    if (errors.length > 0 && argv.check) {
        errors.forEach((error) => console.error(chalk.red(`- ${error}`)));
        process.exit(1); // 非零退出表示错误
    }
}

function main() {
    if (argv.all) {
        antlr4AllSql();
    } else if (argv.lang && typeof argv.lang === 'string') {
        // compile single: yarn antlr4 --lang=mysql
        const supportedLanguage = languageEntries.find((language) =>
            language.startsWith(argv.lang)
        );

        if (argv.lang === 'all') {
            antlr4AllSql();
        } else if (supportedLanguage) {
            compile(supportedLanguage);
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
