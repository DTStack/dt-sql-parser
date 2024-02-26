import { StatementContext } from '../../lib/hive/HiveSqlParser';
import { HiveSqlParserListener } from '../../lib/hive/HiveSqlParserListener';

export class HiveSqlSplitListener implements HiveSqlParserListener {
    private _statementContext: StatementContext[] = [];

    exitStatement = (ctx: StatementContext) => {
        this._statementContext.push(ctx);
    };

    enterStatement = (ctx: StatementContext) => {};

    get statementsContext() {
        return this._statementContext;
    }

    visitTerminal() {}
    visitErrorNode() {}
    enterEveryRule() {}
    exitEveryRule() {}
}
