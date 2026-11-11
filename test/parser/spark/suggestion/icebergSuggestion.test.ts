import { SparkSQL } from 'src/parser/spark';
import { EntityContextType } from 'src/parser/common/types';

const spark = new SparkSQL();

function getSuggestion(template: string) {
    const caretIndex = template.indexOf('<caret>');
    const sql = template.replace('<caret>', '');

    return spark.getSuggestionAtCaretPosition(sql, {
        lineNumber: 1,
        column: caretIndex + 1,
    });
}

describe('Spark Iceberg suggestions', () => {
    test('suggests a table after an Iceberg metadata table prefix', () => {
        const suggestion = getSuggestion('SELECT * FROM prod.db.table.<caret>');

        expect(
            suggestion?.syntax.some(
                (syntax) => syntax.syntaxContextType === EntityContextType.TABLE
            )
        ).toBe(true);
    });

    test('at a fresh FROM, suggests a table and the dynamic IDENTIFIER keyword', () => {
        const suggestion = getSuggestion('SELECT * FROM <caret>');

        expect(
            suggestion?.syntax.some(
                (syntax) => syntax.syntaxContextType === EntityContextType.TABLE
            )
        ).toBe(true);
        expect(suggestion?.keywords).toContain('IDENTIFIER');
    });

    test('while completing a qualified name, suggests a table without the dynamic IDENTIFIER keyword', () => {
        const suggestion = getSuggestion('SELECT * FROM prod.db.table.<caret>');

        expect(
            suggestion?.syntax.some(
                (syntax) => syntax.syntaxContextType === EntityContextType.TABLE
            )
        ).toBe(true);
        expect(suggestion?.keywords.includes('IDENTIFIER')).toBe(false);
    });

    test('suggests a new column for nested ADD COLUMN', () => {
        const suggestion = getSuggestion('ALTER TABLE prod.db.sample ADD COLUMN <caret>');

        expect(
            suggestion?.syntax.some(
                (syntax) => syntax.syntaxContextType === EntityContextType.COLUMN_CREATE
            )
        ).toBe(true);
    });

    test('suggests a function for a CALL procedure name', () => {
        const suggestion = getSuggestion('CALL <caret>()');

        expect(
            suggestion?.syntax.some(
                (syntax) => syntax.syntaxContextType === EntityContextType.FUNCTION
            )
        ).toBe(true);
    });
});
