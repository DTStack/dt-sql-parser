import FlinkSQL from '../../../../src/parser/flinksql';
import fs from 'fs';
import path from 'path';

const parser = new FlinkSQL();

const readSQL = (fileName: string, isSegment = true) => {
    const sqlFiles = fs.readFileSync(path.join(__dirname, 'fixtures', fileName), 'utf-8')
    if (!isSegment) return [sqlFiles];
    return sqlFiles.split(';')
        .filter(Boolean)
        .map((i) => i.trim());
}

const features = {
    InsertFromSelectQueries: readSQL('insertFromSelectQueries.sql'),
    InsertValuesIntoTable: readSQL('insertValuesIntoTable.sql'),
    InsertMultipleTable: readSQL('insertMultipleTable.sql', false)
};

describe('FlinkSQL Insert Syntax Tests', () => {
    features.InsertFromSelectQueries.forEach((insertFromSelectQueries) => {
        it(insertFromSelectQueries, () => {
            expect(parser.validate(insertFromSelectQueries).length).toBe(0);
        });
    });
    features.InsertValuesIntoTable.forEach((insertValuesIntoTable) => {
        it(insertValuesIntoTable, () => {
            expect(parser.validate(insertValuesIntoTable).length).toBe(0);
        });
    });
    features.InsertMultipleTable.forEach((insertMultipleTable) => {
        it(insertMultipleTable, () => {
            expect(parser.validate(insertMultipleTable).length).toBe(0);
        });
    });
});
