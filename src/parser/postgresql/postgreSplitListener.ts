import { SingleStmtContext } from '../../lib/postgresql/PostgreSqlParser';
import { PostgreSqlParserListener } from '../../lib/postgresql/PostgreSqlParserListener';
import SplitListener from '../common/splitListener';

export default class PostgreSqlSplitListener
    extends SplitListener<SingleStmtContext>
    implements PostgreSqlParserListener
{
    exitSingleStmt = (ctx: SingleStmtContext) => {
        this._statementsContext.push(ctx);
    };
}
