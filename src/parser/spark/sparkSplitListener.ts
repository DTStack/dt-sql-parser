import { SingleStatementContext } from '../../lib/spark/SparkSqlParser';

import { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import SplitListener from '../common/splitListener';

export default class SparkSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements SparkSqlParserListener
{
    exitSingleStatement = (ctx: SingleStatementContext) => {
        this._statementsContext.push(ctx);
    };
}
