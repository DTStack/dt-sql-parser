import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    delete: readSQL(__dirname, 'delete.sql'),
};

describe('TrinoSQL Delete Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // delete statements
    features.delete.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});

