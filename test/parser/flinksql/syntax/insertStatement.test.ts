import FlinkSQL from '../../../../src/parser/flinksql';
import fs from 'fs';
import path from 'path';

const parser = new FlinkSQL();

const readSQL = (fileName: string) =>
    fs
        .readFileSync(path.join(__dirname, 'fixtures', fileName), 'utf-8')
        .split(';')
        .filter(Boolean)
        .map((i) => i.trim());

const features = {
    InsertFromSelectQueries: readSQL('insertFromSelectQueries.sql'),
    InsertValuesIntoTable: readSQL('insertValuesIntoTable.sql'),
    MultipleTable: readSQL('insertMultipleTable.sql')
};

describe('FlinkSQL Insert Syntax Tests', () => {
    describe('INSERT SINGLE TABLE', () => {
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
    });
    describe('INSERT MULTIPLE TABLE', () => {
        features.MultipleTable.forEach((multipleTable) => {
            it(multipleTable, () => {
                expect(parser.validate(multipleTable).length).toBe(0);
            });
        });
    });
});