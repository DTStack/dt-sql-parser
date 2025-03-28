import fs from 'fs';
import path from 'path';
import { MySQL } from 'src/parser/mysql';
import { CaretPosition } from 'src/parser/common/types';
import { commentOtherLine } from 'test/helper';

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('MySQL Token Suggestion', () => {
    const mysql = new MySQL();

    test('After ALTER', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 7,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'RESOURCE',
            'USER',
            'VIEW',
            'SQL',
            'DEFINER',
            'ALGORITHM',
            'TABLESPACE',
            'UNDO',
            'TABLE',
            'SERVER',
            'PROCEDURE',
            'LOGFILE',
            'INSTANCE',
            'FUNCTION',
            'EVENT',
            'DATABASE',
            'SCHEMA',
            'RESOURCE GROUP',
            'SQL SECURITY',
            'LOGFILE GROUP',
            'INSTANCE ROTATE INNODB MASTER KEY',
        ]);
    });

    test('After CREATE', () => {
        const pos: CaretPosition = {
            lineNumber: 3,
            column: 8,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'RESOURCE',
            'USER',
            'ROLE',
            'VIEW',
            'SQL',
            'DEFINER',
            'ALGORITHM',
            'OR',
            'TRIGGER',
            'IF',
            'TABLESPACE',
            'UNDO',
            'TABLE',
            'TEMPORARY',
            'SERVER',
            'FUNCTION',
            'AGGREGATE',
            'PROCEDURE',
            'LOGFILE',
            'INDEX',
            'FULLTEXT',
            'SPATIAL',
            'UNIQUE',
            'OFFLINE',
            'ONLINE',
            'EVENT',
            'DATABASE',
            'SCHEMA',
            'RESOURCE GROUP',
            'SQL SECURITY',
            'OR REPLACE',
            'IF NOT EXISTS',
            'LOGFILE GROUP',
        ]);
    });

    test('After DELETE', () => {
        const pos: CaretPosition = {
            lineNumber: 5,
            column: 8,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['FROM', 'IGNORE', 'QUICK', 'LOW_PRIORITY']);
    });

    test('After DESCRIBE', () => {
        const pos: CaretPosition = {
            lineNumber: 7,
            column: 10,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'ANALYZE',
            'SELECT',
            'DELETE',
            'INSERT',
            'REPLACE',
            'UPDATE',
            'FOR',
            'FORMAT',
            'PARTITIONS',
            'EXTENDED',
            'FOR CONNECTION',
        ]);
    });

    test('After DROP', () => {
        const pos: CaretPosition = {
            lineNumber: 9,
            column: 6,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'RESOURCE',
            'USER',
            'PREPARE',
            'ROLE',
            'VIEW',
            'TRIGGER',
            'TABLESPACE',
            'UNDO',
            'TABLE',
            'TEMPORARY',
            'SPATIAL',
            'SERVER',
            'FUNCTION',
            'PROCEDURE',
            'LOGFILE',
            'INDEX',
            'EVENT',
            'DATABASE',
            'SCHEMA',
            'RESOURCE GROUP',
            'SPATIAL REFERENCE SYSTEM',
            'LOGFILE GROUP',
        ]);
    });

    test('After INSERT', () => {
        const pos: CaretPosition = {
            lineNumber: 11,
            column: 8,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'INTO',
            'IGNORE',
            'DELAYED',
            'HIGH_PRIORITY',
            'LOW_PRIORITY',
        ]);
    });

    test('After LOAD', () => {
        const pos: CaretPosition = {
            lineNumber: 13,
            column: 6,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray(['INDEX', 'XML', 'DATA', 'INDEX INTO CACHE']);
    });

    test('After SHOW', () => {
        const pos: CaretPosition = {
            lineNumber: 15,
            column: 6,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toMatchUnorderedArray([
            'REPLICAS',
            'REPLICA',
            'SLAVE',
            'PROFILE',
            'OPEN',
            'INDEX',
            'KEYS',
            'INDEXES',
            'EXTENDED',
            'GRANTS',
            'FUNCTION',
            'PROCEDURE',
            'EVENTS',
            'TABLE',
            'FULL',
            'TABLES',
            'TRIGGERS',
            'COUNT',
            'ERRORS',
            'WARNINGS',
            'STORAGE',
            'ENGINES',
            'MASTER',
            'PLUGINS',
            'PRIVILEGES',
            'PROCESSLIST',
            'PROFILES',
            'AUTHORS',
            'CONTRIBUTORS',
            'ENGINE',
            'CREATE',
            'COLUMNS',
            'FIELDS',
            'CHARACTER',
            'CHARSET',
            'COLLATION',
            'DATABASES',
            'SCHEMAS',
            'GLOBAL',
            'SESSION',
            'STATUS',
            'VARIABLES',
            'BINLOG',
            'RELAYLOG',
            'BINARY',
            'OPEN TABLES',
            'TABLE STATUS',
            'CHARACTER SET',
        ]);
    });

    test('After CREATE TABLE, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 14,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;

        expect(suggestion).toContain('IF');
        expect(suggestion).toContain('IF NOT EXISTS');
    });

    test('After CREATE TABLE IF, show combined keywords', () => {
        const pos: CaretPosition = {
            lineNumber: 17,
            column: 17,
        };
        const suggestion = mysql.getSuggestionAtCaretPosition(
            commentOtherLine(tokenSql, pos.lineNumber),
            pos
        )?.keywords;
        expect(suggestion).toContain('NOT');
        expect(suggestion).toContain('NOT EXISTS');
    });
});
