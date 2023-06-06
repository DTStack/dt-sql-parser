import fs from 'fs';
import path from 'path';
import { CaretPosition } from '../../../../src/parser/common/basic-parser-types';
import FlinkSQL from '../../../../src/parser/flinksql'

const tokenSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'tokenSuggestion.sql'), 'utf-8');

describe('Flink SQL Syntax Suggestion', () => {
    const parser = new FlinkSQL();

    test('Insert table ', () => {
        const pos: CaretPosition = {
            lineNumber: 1,
            column: 8
        }
        const suggestion = parser.getSuggestionAtCaretPosition(tokenSql, pos)?.keywords;
   
        expect(suggestion)
            .toEqual([ 'CATALOG', 'FUNCTION', 'TEMPORARY', 'VIEW', 'DATABASE', 'TABLE' ])
    })

})