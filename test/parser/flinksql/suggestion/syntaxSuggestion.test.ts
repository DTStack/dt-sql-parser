import fs from 'fs';
import path from 'path';
import { CaretPosition, SyntaxContextType } from '../../../../src/parser/common/basic-parser-types';
import FlinkSQL from '../../../../src/parser/flinksql'

const syntaxSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'), 'utf-8');
const multipleSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'multipleSql.sql'), 'utf-8');

describe('Flink SQL Syntax Suggestion', () => {
    const parser = new FlinkSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    })

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 22
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.TABLE)
        
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat', '.', 'db', '.', 'tb' ])
    })

    test('Select table', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 21
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.TABLE)
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat', '.', 'db' ])
    })

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 20
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.TABLE_CREATE)
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat', '.', 'db' ])
    })

    test('Show tables from', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 21
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.TABLE)
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat' ])
    })

    test('Alter database', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 20
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.DATABASE)
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat', '.' ])
    })

    test('Use database', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 20
        }
        const suggestion = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax?.[0];
        
        expect(suggestion?.syntaxContextType === SyntaxContextType.DATABASE)
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat', '.' ]);
    })

    test("Multiple SQL use database", () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 10,
        }
        const suggestion = parser.getSuggestionAtCaretPosition(multipleSql, pos)?.syntax?.[0];
        console.log(suggestion);
        expect(suggestion?.syntaxContextType === SyntaxContextType.DATABASE);
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'cat1', '.' ]);
    })

})