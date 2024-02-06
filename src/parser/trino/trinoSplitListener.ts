import { SingleStatementContext } from '../../lib/trinosql/TrinoSqlParser';
import { TrinoSqlListener } from '../../lib/trinosql/TrinoSqlListener';

export default class TrinoSqlSplitListener implements TrinoSqlListener {
    private _statementsContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };

    get statementsContext() {
        return this._statementsContext;
    }
}
