import { SingleStatementContext } from '../../lib/sql/SQLParser';

import { SQLParserListener } from '../../lib/sql/SQLParserListener';
import { SplitListener } from '../common/splitListener';

export class SQLSplitListener
    extends SplitListener<SingleStatementContext>
    implements SQLParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
