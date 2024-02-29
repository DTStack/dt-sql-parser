import { SingleStmtContext } from '../../lib/pgsql/PostgreSQLParser';
import { PostgreSQLParserListener } from '../../lib/pgsql/PostgreSQLParserListener';

export default class PostgreSqlSplitListener implements PostgreSQLParserListener {
    visitTerminal() {}
    visitErrorNode() {}
    enterEveryRule() {}
    exitEveryRule() {}
    private _statementsContext: SingleStmtContext[] = [];

    exitSingleStmt = (ctx: SingleStmtContext) => {
        this._statementsContext.push(ctx);
    };

    enterSingleStmt = (ctx: SingleStmtContext) => {};

    get statementsContext() {
        return this._statementsContext;
    }
}
