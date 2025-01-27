import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';
import { CaretPosition, EntityContextType } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Flink SQL Token Suggestion', () => {
    const flink = new FlinkSQL();

    test('Use Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 5,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArrary(['MODULES', 'CATALOG']);
    });

    test('Create Statement ', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArrary([
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
        const suggestion = flink.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArrary([
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
            'VIEWS',
            'JARS',
        ]);
    });

    test('Create Statement table properties', () => {
        const tokenSql = `CREATE TABLE tmp_table (col INT) WITH ('connector'='kafka');`;
        const scenarios = [
            {
                caretPosition: {
                    lineNumber: 1,
                    column: 45,
                },
                entityContextType: EntityContextType.TABLE_PROPERTY_KEY,
            },
            {
                caretPosition: {
                    lineNumber: 1,
                    column: 55,
                },
                entityContextType: EntityContextType.TABLE_PROPERTY_VALUE,
            },
        ];

        scenarios.forEach((scenario) => {
            const suggestion = flink.getSuggestionAtCaretPosition(
                tokenSql,
                scenario.caretPosition
            )?.syntax;

            expect(suggestion[0].syntaxContextType).toBe(scenario.entityContextType);
        });
    });
});
