import { MySQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new MySQL();

const features = {
    commit: readSQL(__dirname, 'commit.sql'),
    savePoint: readSQL(__dirname, 'savePoint.sql'),
    lockTable: readSQL(__dirname, 'lockTable.sql'),
    setTransaction: readSQL(__dirname, 'setTransaction.sql'),
    xaTransactions: readSQL(__dirname, 'xaTransactions.sql'),
    replication: readSQL(__dirname, 'replication.sql'),
    prepared: readSQL(__dirname, 'prepared.sql'),
    changeMasterTo: readSQL(__dirname, 'changeMasterTo.sql'),
    changeReplicationFilter: readSQL(__dirname, 'changeReplicationFilter.sql'),
    changeReplicationSource: readSQL(__dirname, 'changeReplicationSource.sql'),
    resetSlaveOrReplica: readSQL(__dirname, 'resetSlaveOrReplica.sql'),
    startSlaveOrReplica: readSQL(__dirname, 'startSlaveOrReplica.sql'),
    stopSlaveOrReplica: readSQL(__dirname, 'stopSlaveOrReplica.sql'),
    groupReplication: readSQL(__dirname, 'groupReplication.sql'),
    utility: readSQL(__dirname, 'utility.sql'),
};

describe('MySQL Transactional and Locking, Replication, Prepared Compound and Utility Syntax Tests', () => {
    Object.keys(features).forEach((key) => {
        features[key].forEach((sql) => {
            it(sql, () => {
                const result = parser.validate(sql);
                if (result.length) {
                    console.log(result, `\nPlease check sql: ${sql}`);
                }
                expect(result.length).toBe(0);
            });
        });
    });
});
