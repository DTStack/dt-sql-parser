import { SingleStatementContext } from '../../lib/impala/ImpalaSqlParser';
import { ImpalaSqlParserListener } from '../../lib/impala/ImpalaSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class ImpalaSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements ImpalaSqlParserListener
{
    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };
}
