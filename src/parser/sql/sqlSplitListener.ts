import { SingleStatementContext } from '../../lib/sql/SqlParser';

import { SqlParserListener } from '../../lib/sql/SqlParserListener';
import { SplitListener } from '../common/splitListener';

export class SqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements SqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
