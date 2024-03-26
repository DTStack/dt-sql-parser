import { StatementContext } from '../../lib/hive/HiveSqlParser';
import { HiveSqlParserListener } from '../../lib/hive/HiveSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class HiveSqlSplitListener
    extends SplitListener<StatementContext>
    implements HiveSqlParserListener
{
    exitStatement = (ctx: StatementContext) => {
        this._statementsContext.push(ctx);
    };
}
