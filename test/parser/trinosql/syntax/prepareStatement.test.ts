import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    prepare: readSQL(__dirname, 'prepare.sql'),
};

describe('TrinoSQL Prepare Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // prepare statements
    features.prepare.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});

