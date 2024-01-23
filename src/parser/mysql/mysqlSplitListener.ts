import { SingleStatementContext } from '../../lib/mysql/MySqlParser';
import { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';

export default class MysqlSplitListener implements MySqlParserListener {
    private _statementsContext: SingleStatementContext[] = [];

    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };

    enterSingleStatement = (ctx: SingleStatementContext) => {};

    get statementsContext() {
        return this._statementsContext;
    }
}
