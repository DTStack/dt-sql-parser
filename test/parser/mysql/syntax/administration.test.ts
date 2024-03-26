import { MySQL } from 'src/parser/mysql';
import { readSQL } from 'test/helper';

const mysql = new MySQL();

const features = {
    alterUser: readSQL(__dirname, 'alterUser.sql'),
    createRole: readSQL(__dirname, 'createRole.sql'),
    createUser: readSQL(__dirname, 'createUser.sql'),
    dropRole: readSQL(__dirname, 'dropRole.sql'),
    dropUser: readSQL(__dirname, 'dropUser.sql'),
    grant: readSQL(__dirname, 'grant.sql'),
    renameUser: readSQL(__dirname, 'renameUser.sql'),
    revoke: readSQL(__dirname, 'revoke.sql'),
    setDefaultRole: readSQL(__dirname, 'setDefaultRole.sql'),
    setPassword: readSQL(__dirname, 'setPassword.sql'),
    setRole: readSQL(__dirname, 'setRole.sql'),
    alterResourceGroup: readSQL(__dirname, 'alterResourceGroup.sql'),
    createResourceGroup: readSQL(__dirname, 'createResourceGroup.sql'),
    dropResourceGroup: readSQL(__dirname, 'dropResourceGroup.sql'),
    setResourceGroup: readSQL(__dirname, 'setResourceGroup.sql'),
    analyzeTable: readSQL(__dirname, 'analyzeTable.sql'),
    checkTable: readSQL(__dirname, 'checkTable.sql'),
    checkSumTable: readSQL(__dirname, 'checkSumTable.sql'),
    optimizeTable: readSQL(__dirname, 'optimizeTable.sql'),
    repairTable: readSQL(__dirname, 'repairTable.sql'),
    installComponent: readSQL(__dirname, 'installComponent.sql'),
    installPlugin: readSQL(__dirname, 'installPlugin.sql'),
    uninstallComponent: readSQL(__dirname, 'uninstallComponent.sql'),
    uninstallPlugin: readSQL(__dirname, 'uninstallPlugin.sql'),
    clone: readSQL(__dirname, 'clone.sql'),
    set: readSQL(__dirname, 'set.sql'),
    setCharacterSet: readSQL(__dirname, 'setCharacterSet.sql'),
    setNames: readSQL(__dirname, 'setNames.sql'),
    show: readSQL(__dirname, 'show.sql'),
    otherAdministrative: readSQL(__dirname, 'otherAdministrative.sql'),
};

describe('MySQL Database Administration Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                const result = mysql.validate(sql);
                if (result.length) {
                    console.error(result, `\nPlease check sql: ${sql}`);
                }
                expect(result.length).toBe(0);
            });
        });
    });
});
