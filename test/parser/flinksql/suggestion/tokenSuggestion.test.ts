import fs from 'fs';
import path from 'path';
import { CaretPosition } from '../../../../src/parser/common/basic-parser-types';
import FlinkSQL from '../../../../src/parser/flinksql';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Flink SQL Token Suggestion', () => {
    const parser = new FlinkSQL();

    test('Use Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 5,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual(['MODULES', 'CATALOG']);
    });

    test('Create Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'CATALOG',
            'FUNCTION',
            'TEMPORARY',
            'VIEW',
            'DATABASE',
            'TABLE',
        ]);
    });

    test('Show Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 6,
        };
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;

        expect(suggestion).toEqual([
            'MODULES',
            'FULL',
            'FUNCTIONS',
            'USER',
            'CREATE',
            'COLUMNS',
            'TABLES',
            'CURRENT',
            'CATALOGS',
            'DATABASES',
            'JARS',
            'VIEWS',
        ]);
    });
});
