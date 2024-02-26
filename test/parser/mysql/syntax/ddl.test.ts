import MySQL from 'src/parser/mysql';
import { readSQL } from 'test/helper';

const parser = new MySQL();

const features = {
    alterDatabase: readSQL(__dirname, 'alterDatabase.sql'),
    alterEvent: readSQL(__dirname, 'alterEvent.sql'),
    alterFunction: readSQL(__dirname, 'alterFunction.sql'),
    alterInstance: readSQL(__dirname, 'alterInstance.sql'),
    alterLogFileGroup: readSQL(__dirname, 'alterLogFileGroup.sql'),
    alterProcedure: readSQL(__dirname, 'alterProcedure.sql'),
    alterServer: readSQL(__dirname, 'alterServer.sql'),
    alterTable: readSQL(__dirname, 'alterTable.sql'),
    alterTableAndGeneratedColumns: readSQL(__dirname, 'alterTableAndGeneratedColumns.sql'),
    alterTablePartition: readSQL(__dirname, 'alterTablePartition.sql'),
    alterTableSpace: readSQL(__dirname, 'alterTableSpace.sql'),
    alterView: readSQL(__dirname, 'alterView.sql'),
    createDatabase: readSQL(__dirname, 'createDatabase.sql'),
    createEvent: readSQL(__dirname, 'createEvent.sql'),
    createFunction: readSQL(__dirname, 'createFunction.sql'),
    createIndex: readSQL(__dirname, 'createIndex.sql'),
    createLogFileGroup: readSQL(__dirname, 'createLogFileGroup.sql'),
    createProcedure: readSQL(__dirname, 'createProcedure.sql'),
    createServer: readSQL(__dirname, 'createServer.sql'),
    createTable: readSQL(__dirname, 'createTable.sql'),
    createTableSpace: readSQL(__dirname, 'createTableSpace.sql'),
    createTrigger: readSQL(__dirname, 'createTrigger.sql'),
    createView: readSQL(__dirname, 'createView.sql'),
    dropDatabase: readSQL(__dirname, 'dropDatabase.sql'),
    dropEvent: readSQL(__dirname, 'dropEvent.sql'),
    dropFunction: readSQL(__dirname, 'dropFunction.sql'),
    dropIndex: readSQL(__dirname, 'dropIndex.sql'),
    dropLogFileGroup: readSQL(__dirname, 'dropLogFileGroup.sql'),
    dropProcedure: readSQL(__dirname, 'dropProcedure.sql'),
    dropServer: readSQL(__dirname, 'dropServer.sql'),
    dropSpatialReferenceSystem: readSQL(__dirname, 'dropSpatialReferenceSystem.sql'),
    dropTable: readSQL(__dirname, 'dropTable.sql'),
    dropTableSpace: readSQL(__dirname, 'dropTableSpace.sql'),
    dropTrigger: readSQL(__dirname, 'dropTrigger.sql'),
    dropView: readSQL(__dirname, 'dropView.sql'),
    renameTable: readSQL(__dirname, 'renameTable.sql'),
    truncateTable: readSQL(__dirname, 'truncateTable.sql'),
};

describe('MySQL DDL Syntax Tests', () => {
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
