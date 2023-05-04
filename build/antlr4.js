const path = require('path');
const exec = require('child_process').exec;
const argv = require('yargs-parser')(process.argv.slice(2))

const antlr4 = path.resolve(__dirname, './antlr-4.12.0-complete.jar');
const grammars = path.resolve(__dirname, '../src/grammar');
const output = path.resolve(__dirname, '../src/lib');

const entry = [
    'generic',
    'hive',
    'pgsql',
    'plsql',
    'spark',
    'flinksql',
];

function compile(language) {
    const cmd = `
        java -jar ${antlr4}
        -Dlanguage=TypeScript 
        -visitor
        -listener
        -o ${output}/${language}
        ${grammars}/${language}/*.g4 
    `.replace(/\n/g, '');
    console.info('Executing:', cmd);
    exec(cmd, (err) => {
        if (err) {
            console.error('Antlr4 build error: ' + language, err);
        } else {
            console.log(`Build ${language} success.`);
        }
    });
}

if (argv.all) { // build all: yarn antlr4 --all
    entry.forEach((language) => {
        compile(language);
    });
} else if (argv.lang) {// build single: yarn antlr4 --lang=generic
    const supportedLanguage = entry.find((language) => language === argv.lang);
    if (supportedLanguage) {
        compile(argv.lang);
    } else {
        console.error('Unsupported language: ' + argv.lang);
    }
} else {
    console.error('Please to specify the language, just like: yarn antlr4 --lang flinksql');
}

