import MySQL from 'src/parser/mysql';
import { readSQL } from 'test/helper';

const parser = new MySQL();

const features = {
    call: readSQL(__dirname, 'call.sql'),
    delete: readSQL(__dirname, 'delete.sql'),
    do: readSQL(__dirname, 'do.sql'),
    handler: readSQL(__dirname, 'handler.sql'),
    importTable: readSQL(__dirname, 'importTable.sql'),
    insert: readSQL(__dirname, 'insert.sql'),
    insertSelect: readSQL(__dirname, 'insertSelect.sql'),
    interSect: readSQL(__dirname, 'interSect.sql'),
    loadData: readSQL(__dirname, 'loadData.sql'),
    loadXml: readSQL(__dirname, 'loadXml.sql'),
    parenthesizedQuery: readSQL(__dirname, 'parenthesizedQuery.sql'),
    replace: readSQL(__dirname, 'replace.sql'),
    select: readSQL(__dirname, 'select.sql'),
    selectJoin: readSQL(__dirname, 'selectJoin.sql'),
    setOperations: readSQL(__dirname, 'setOperations.sql'),
    subQueries: readSQL(__dirname, 'subQueries.sql'),
    table: readSQL(__dirname, 'table.sql'),
    update: readSQL(__dirname, 'update.sql'),
    union: readSQL(__dirname, 'union.sql'),
    values: readSQL(__dirname, 'values.sql'),
    with: readSQL(__dirname, 'with.sql'),
};

describe('MySQL DML Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                const result = parser.validate(sql);
                if (result.length) {
                    console.error(result, `\nPlease check sql: ${sql}`);
                }
                expect(result.length).toBe(0);
            });
        });
    });
});
