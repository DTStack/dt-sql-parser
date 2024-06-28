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
            tmp.includes('EXECUTE STATEMENT SET') || tmp.includes('BEGIN STATEMENT SET;');

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
