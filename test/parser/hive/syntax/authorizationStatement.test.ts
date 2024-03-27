import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    manageRoles: readSQL(__dirname, 'authorization.sql'),
};

describe('HiveSQL Related To Authorization Tests', () => {
    features.manageRoles.forEach((manageRole) => {
        it(manageRole, () => {
            expect(hive.validate(manageRole).length).toBe(0);
        });
    });
});
