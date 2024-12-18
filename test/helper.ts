import fs from 'fs';
import path from 'path';

export const readSQL = (dirname: string, fileName: string) => {
    const content = fs.readFileSync(path.join(dirname, 'fixtures', fileName), 'utf-8');
    const result: string[] = [];
    let tmp = '';

    for (let index = 0; index < content.length; index++) {
        const char = content[index];
        tmp += char;

        const isMulti =
            tmp.includes('EXECUTE STATEMENT SET') ||
            tmp.includes('BEGIN STATEMENT SET;') ||
            tmp.includes('BEGIN');

        if (!isMulti) {
            // 非批量的先简单按照分号切割
            if (tmp.endsWith(';')) {
                result.push(tmp.trim());
                tmp = '';
            }
        } else {
            if (tmp.endsWith('END;')) {
                result.push(tmp.trim());
                tmp = '';
            }
        }
    }

    return result;
};

/**
 * Read a sql string with special range
 * @param range line and column start from 1
 */
export const readSQLByRange = (
    sqlSource: {
        dirname?: string;
        fileName?: string;
        sql?: string;
    },
    range: { startLine: number; endLine: number; startColumn?: number; endColumn?: number }
) => {
    const { dirname, fileName, sql } = sqlSource;
    const { startLine, endLine, startColumn, endColumn } = range;

    if (endLine < startLine) throw new RangeError('endLine must greater or equal than startLine!');
    if (!sql && (!dirname || !fileName))
        throw new Error('A sql input or file info params is required!');

    const content =
        sql !== undefined
            ? sql
            : fs.readFileSync(path.join(dirname, 'fixtures', fileName), 'utf-8');
    let index = 0;
    let middleText = '';
    let startLineText = '';
    let endLineText = '';
    let currLine = 1;

    while (index < content.length && currLine <= endLine) {
        const char = content[index];
        if (char === '\n') {
            currLine++;
        }

        if (currLine === startLine) {
            // The line break at the beginning needs to be discarded.
            if (!(char === '\n' && startLineText === '')) {
                startLineText += char;
            }
        } else if (
            currLine > startLine &&
            (currLine < endLine || (currLine === endLine && char === '\n'))
        ) {
            middleText += char;
        } else if (currLine === endLine && startLine !== endLine) {
            endLineText += char;
        }

        index++;
    }

    startLineText = startLineText.slice(
        startColumn !== undefined ? startColumn - 1 : 0,
        endLine === startLine && endColumn !== undefined ? endColumn - 1 : undefined
    );
    endLineText = endLineText.slice(0, endColumn !== undefined ? endColumn - 1 : undefined);

    return startLineText + middleText + endLineText;
};

export function commentOtherLine(sqlContent: string, line: number) {
    const slices = sqlContent.split('\n').map((item, index) => {
        if (index !== line - 1) {
            return '-- ' + item;
        } else {
            return item;
        }
    });

    return slices.join('\n');
}
