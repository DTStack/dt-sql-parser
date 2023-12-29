import fs from 'fs';
import path from 'path';
import { MySqlCollectListener, ParseTreeListener, MySQL } from '../../../filters';

const commonSql = fs.readFileSync(path.join(__dirname, 'fixtures', 'common.sql'), 'utf-8');

describe('MySQL collect listener tests', () => {
    const parser = new MySQL();
    const parseTree = parser.parse(commonSql);

    test('Common case', () => {
        const collectListener = new MySqlCollectListener(commonSql);
        expect(parser.validate(commonSql).length).toBe(0);
        parser.listen(collectListener as ParseTreeListener, parseTree);
        console.dir(collectListener.results, { depth: 4 });
        expect(collectListener.results.length).toBe(3);
    });
});
