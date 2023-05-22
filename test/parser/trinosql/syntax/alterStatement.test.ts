import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    table: readSQL(__dirname, 'alterTable.sql'),
    view: readSQL(__dirname, 'alterView.sql'),
    schema: readSQL(__dirname, 'alterSchema.sql'),
};

describe('TrinoSQL Alter Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
    features.view.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });  
    features.schema.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });  

});

