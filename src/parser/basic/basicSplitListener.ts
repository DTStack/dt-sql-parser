import { SingleStatementContext } from '../../lib/basic/BasicSqlParser';

import { BasicSqlParserListener } from '../../lib/basic/BasicSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class BasicSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements BasicSqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
