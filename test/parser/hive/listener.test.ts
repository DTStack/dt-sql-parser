import { ProgramContext } from '../../../src/lib/hive/HiveSqlParser';
import { HiveSqlParserListener } from '../../../src/lib/hive/HiveSqlParserListener';
import HiveSQL from '../../../src/parser/hive';


describe('HiveSQL Listener Tests', () => {
    const parser = new HiveSQL();
    test('Listener enterSelectList', async () => {
        const expectTableName = 'userName';
        const sql = `select ${expectTableName} from user1 where inc_day='20190601' limit 1000;`;
        const parserTree = parser.parse(sql);

        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterSelectItem(ctx) {
                result = ctx.text;
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree as ProgramContext);
        expect(result).toBe(expectTableName.toUpperCase());
    });
    test('Listener enterCreateTable', async () => {
        const sql = `drop table table_name;`;
        const parserTree = parser.parse(sql);
        let result = '';
        class MyListener implements HiveSqlParserListener {
            enterDropTableStatement(ctx) {
                result = ctx.text;
            }
        }
        const listenTableName: any = new MyListener();

        await parser.listen(listenTableName, parserTree as ProgramContext);
        expect(result).toBe('DROPTABLETABLE_NAME');
    });
});
