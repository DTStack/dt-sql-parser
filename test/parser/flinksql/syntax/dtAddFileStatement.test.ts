import FlinkSQL from "../../../../src/parser/flinksql";
import { readSQL } from "../../../helper";

const features = {
    dtAddFiles: readSQL(__dirname, 'dtAddFile.sql')
};

describe('FlinkSQL DT Add File Syntax Tests', () => {
    const parser = new FlinkSQL();

    features.dtAddFiles.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
