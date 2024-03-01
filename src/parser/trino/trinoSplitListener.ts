import { SingleStatementContext } from '../../lib/trinosql/TrinoSqlParser';
import { TrinoSqlListener } from '../../lib/trinosql/TrinoSqlListener';
import SplitListener from '../common/splitListener';

export default class TrinoSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements TrinoSqlListener
{
    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };
}
