import MySQLParser from '../../../src/core/mysql';

describe('MySQL Parser tests', () => {
    const mysql = new MySQLParser();

    test('Select * FROM Statement', () => {
        const sql = 'SELECT * FROM tb;';
        const result = mysql.parserTreeToString(sql);
        expect(result).toEqual(`
        (statement (sqlStatements (
            sqlStatement (
                dmlStatement (
                    selectStatement (
                        querySpecification SELECT (selectElements *) (
                            fromClause FROM (
                                tableSources (tableSource (
                                    tableSourceItem (tableName (
                                        fullId (uid (
                                            simpleId TB
                                            )
                                        ))))))))))) (emptyStatement ;)) <EOF>
                            )`);
    });
});
