import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    explain: readSQL(__dirname, 'explain.sql'),
};

describe('TrinoSQL Explain Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // explain statements
    features.explain.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});

