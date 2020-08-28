const path = require('path');
const exec = require('child_process').exec;

const grammars = path.resolve(__dirname, '../src/grammar');

const languages = [
    'generic',
    'mysql',
    // 'oracle',
    // 'flink',
    // 'hive',
    // 'impala',
    // 'libra',
    // 'spark',
    // 'tidb'
];

languages.forEach(language => {

    exec(`npx antlr4-tool -l ts -o ${grammars}/${language}/parser ${grammars}/${language}/*.g4`, (error) => {
        console.log('error:', error)
    })

    // const compiledResults = antlr4Tool.compile({
    //     language: 'ts', // Only support for JavaScript & TypeScript
    //     grammarFiles:  [`${grammars}/${language}/*.g4`],
    //     outputDirectory: `${grammars}/${language}/parser`
    // });
    
})

