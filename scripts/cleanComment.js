const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const chalk = require('chalk');

const basePath = path.resolve(__dirname, '../src/lib');

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const firstLineIdx =
            content.indexOf('\r\n') === -1 ? content.indexOf('\n') : content.indexOf('\r\n');
        if (firstLineIdx === -1) return;

        let firstLineContent = content.slice(0, firstLineIdx);
        const restContent = content.slice(firstLineIdx);

        const slices = firstLineContent.split('/src/grammar/');
        if (slices.length !== 2) return;
        firstLineContent = `// Generated from dt-sql-parser/src/grammar/` + slices[1];

        const tsNoCheckComment = '\n\n// @ts-nocheck';

        fs.writeFileSync(filePath, firstLineContent + tsNoCheckComment + restContent, 'utf-8');
    } catch (error) {
        console.error(error);
    }
}

function main(language) {
    const base = basePath + (language ? `/${language}` : '');
    console.info(chalk.green(`\nCleaning comment in:`, chalk.gray(`${base}/**/*.ts`)));
    const filePaths = globSync(`${base}/**/*.ts`, { absolute: true, nodir: true });
    filePaths.forEach(processFile);
}

module.exports = {
    cleanComment: main,
};
