import FlinkSQL from "../../../../src/parser/flinksql";
import { readSQL } from "../../../helper";

const parser = new FlinkSQL();

const features = {
    base: readSQL(__dirname, "select.sql"),
    distinct: readSQL(__dirname, "selectDistinct.sql"),
};

describe("FlinkSQL Query Statement Tests", () => {
    describe("Base Select", () => {
        features.base.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
    
    describe("Select DISTINCT", () => {
        features.distinct.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        })
    })
});
