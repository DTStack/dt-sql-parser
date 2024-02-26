import { SingleStatementContext } from '../../lib/spark/SparkSqlParser';

import { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';

export default class SparkSqlSplitListener implements SparkSqlParserListener {
    private _statementsContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementsContext;
    }
    visitTerminal() {}
    visitErrorNode() {}
    enterEveryRule() {}
    exitEveryRule() {}
}
