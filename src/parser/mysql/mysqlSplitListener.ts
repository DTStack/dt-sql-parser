import { SingleStatementContext } from '../../lib/mysql/MySqlParser';
import { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';
import { SplitListener } from '../common/splitListener';

export class MysqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements MySqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
