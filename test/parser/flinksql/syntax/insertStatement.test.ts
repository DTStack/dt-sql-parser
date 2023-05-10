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
    singleTable: readSQL('insertSingleTable.sql'),
    MultipleTable: readSQL('insertMultipleTable.sql')
};

describe('FlinkSQL Insert Syntax Tests', () => {
    describe('INSERT SINGLE TABLE', () => {
        features.singleTable.forEach((singleTable) => {
            it(singleTable, () => {
                expect(parser.validate(singleTable).length).toBe(0);
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