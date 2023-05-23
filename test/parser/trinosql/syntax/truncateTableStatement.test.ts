import TrinoSQL from "../../../../src/parser/trinosql";
import { readSQL } from "../../../helper";

const features = {
    truncateTable: readSQL(__dirname, 'truncate_table.sql'),
};

describe('TrinoSQL truncate table Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // truncate table statements
    features.truncateTable.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});

