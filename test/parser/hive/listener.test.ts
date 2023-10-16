import { ParseTreeListener } from 'antlr4ts/tree';
import { ProgramContext } from '../../../src/lib/hive/HiveSqlParser';
import { HiveSqlParserListener } from '../../../src/lib/hive/HiveSqlParserListener';
import HiveSQL from '../../../src/parser/hive';

describe('HiveSQL Listener Tests', () => {
    const parser = new HiveSQL();
    test('Listener enterSelectList', async () => {
        const expectTableName = 'username';
        const sql = `select ${expectTableName} from tablename where inc_day='20190601' limit 1000;`;
        const parseTree = parser.parse(sql);

        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterSelectItem(ctx) {
                result = ctx.text;
            }
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree as ProgramContext);
        expect(result).toBe(expectTableName.toUpperCase());
    });
    test('Listener enterCreateTable', async () => {
        const sql = `drop table table_name;`;
        const parseTree = parser.parse(sql);
        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterDropTableStatement(ctx) {
                result = ctx.text;
            }
        }
        const listenTableName = new MyListener();

        await parser.listen(listenTableName as ParseTreeListener, parseTree as ProgramContext);
        expect(result).toBe('DROPTABLETABLE_NAME');
    });
});
