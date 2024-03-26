import { SingleStatementContext } from '../../lib/trino/TrinoSqlParser';
import { TrinoSqlListener } from '../../lib/trino/TrinoSqlListener';
import SplitListener from '../common/splitListener';

export default class TrinoSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements TrinoSqlListener
{
    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };
}
