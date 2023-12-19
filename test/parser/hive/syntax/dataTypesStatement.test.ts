import { HiveSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const parser = new HiveSQL();

const features = {
    dataTypes: readSQL(__dirname, 'dataTypes.sql'),
};

describe('HiveSQL Check Data Types Tests', () => {
    features.dataTypes.forEach((dataType) => {
        it(dataType, () => {
            expect(parser.validate(dataType).length).toBe(0);
        });
    });
});
