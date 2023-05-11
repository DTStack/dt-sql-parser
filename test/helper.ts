import fs from 'fs';
import path from 'path';

export const readSQL = (dirname: string, fileName: string, isSegment = true) => {
    const sqlFiles = fs.readFileSync(path.join(dirname, 'fixtures', fileName), 'utf-8')
    if (!isSegment) return [sqlFiles];
    return sqlFiles.split(';')
        .filter(Boolean)
        .map((i) => i.trim());
}