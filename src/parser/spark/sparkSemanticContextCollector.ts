import { SparkSqlParserListener } from '../../lib';
import { SingleStatementContext, SparkSqlParser } from '../../lib/spark/SparkSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class SparkSemanticContextCollector
    extends SemanticContextCollector
    implements SparkSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return SparkSqlParser.WS;
    }
    override getStatementRuleType(): number {
        return SparkSqlParser.RULE_singleStatement;
    }
    enterSingleStatement(ctx: SingleStatementContext) {
        this.visitStatement(ctx);
    }
}

export { SparkSemanticContextCollector };
