import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    table: readSQL(__dirname, 'alterTable.sql'),
};

describe('TrinoSQL Alter Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // Alter statements
    features.table.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });


});

