import { SingleStatementContext } from '../../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../../lib/flinksql/FlinkSqlParserListener';
import SplitListener from '../common/splitListener';

export class FlinkSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements FlinkSqlParserListener
{
    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };
}
