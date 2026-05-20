import fs from 'fs';
import path from 'path';
import { GenericSQL } from 'src/parser/generic';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';

const syntaxSql = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'multipleStatement.sql'),
    'utf-8'
);

describe('GenericSQL Multiple Statements Syntax Suggestion', () => {
    const parser = new GenericSQL();

    test('Create table', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 14,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE_CREATE
        );

        expect(suggestion).not.toBeUndefined();
    });

    test('Insert into table', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 13,
        };
        const syntaxes = parser.getSuggestionAtCaretPosition(syntaxSql, pos)?.syntax;
        const suggestion = syntaxes?.find(
            (syn) => syn.syntaxContextType === EntityContextType.TABLE
        );

        expect(suggestion).not.toBeUndefined();
        expect(suggestion?.wordRanges.map((token) => token.text)).toEqual([]);
    });
});
