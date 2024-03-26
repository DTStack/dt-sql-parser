import { SingleStmtContext } from '../../lib/pgsql/PostgreSQLParser';
import { PostgreSQLParserListener } from '../../lib/pgsql/PostgreSQLParserListener';
import SplitListener from '../common/splitListener';

export default class PostgreSqlSplitListener
    extends SplitListener<SingleStmtContext>
    implements PostgreSQLParserListener
{
    exitSingleStmt = (ctx: SingleStmtContext) => {
        this._statementsContext.push(ctx);
    };
}
