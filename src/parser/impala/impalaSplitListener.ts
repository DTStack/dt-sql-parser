import { SingleStatementContext } from '../../lib/impala/ImpalaSqlParser';
import { ImpalaSqlParserListener } from '../../lib/impala/ImpalaSqlParserListener';

export class ImpalaSqlSplitListener implements ImpalaSqlParserListener {
    visitTerminal() {}
    visitErrorNode() {}
    enterEveryRule() {}
    exitEveryRule() {}
    private _statementContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementContext;
    }
}
