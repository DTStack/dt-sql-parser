import { SingleStatementContext } from '../../lib/generic/GenericSqlParser';
import { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import { SplitListener } from '../common/splitListener';

export class GenericSplitListener
    extends SplitListener<SingleStatementContext>
    implements GenericSqlListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
