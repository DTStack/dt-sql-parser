import { SingleStatementContext } from '../../lib/flink/FlinkSqlParser';
import { FlinkSqlParserListener } from '../../lib/flink/FlinkSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class FlinkSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements FlinkSqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
