import fs from 'fs';
import path from 'path';
import { CaretPosition, SyntaxContextType } from '../../../../src/parser/common/basic-parser-types';
import HiveSQL from '../../../../src/parser/hive'

const syntaxSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'syntaxSuggestion.sql'), 'utf-8');

describe('Hive SQL Syntax Suggestion', () => {
    const parser = new HiveSQL();

    test('Validate Syntax SQL', () => {
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
        expect(parser.validate(syntaxSql).length).not.toBe(0);
    });

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 18
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.TABLE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.', 'tb' ])
    });

    test('Select table ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 18
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.TABLE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.' ])
    });

    test('Create table ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 17
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.TABLE_CREATE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.' ])
    });

    test('DROP table ', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 26
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.TABLE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.', 'a' ])
    });

    test('Create view ', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 28
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.VIEW_CREATE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.', 'v' ])
    });

    test('Drop view ', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 15
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.VIEW);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db', '.', 'v' ])
    });

    test('Create function ', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 20
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.FUNCTION_CREATE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'fn1' ])
    });

    test('Use function', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 27
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.FUNCTION);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'calculate_age' ])
    });

    test('Create database', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 19
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.DATABASE_CREATE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'db' ])
    });

    test('Drop database', () => {
        const pos: CaretPosition = {
            lineNumber: 19,
            column: 26
        }
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(syn => syn.syntaxContextType === SyntaxContextType.DATABASE);

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map(token => token.text))
            .toEqual([ 'sch' ])
    });

})