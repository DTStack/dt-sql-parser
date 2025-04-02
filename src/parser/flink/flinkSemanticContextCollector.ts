import { FlinkSqlParserListener } from '../../lib';
import { FlinkSqlParser, SingleStatementContext } from '../../lib/flink/FlinkSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class FlinkSemanticContextCollector
    extends SemanticContextCollector
    implements FlinkSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return FlinkSqlParser.WHITE_SPACE;
    }
    override getStatementRuleType(): number {
        return FlinkSqlParser.RULE_singleStatement;
    }
    enterSingleStatement(ctx: SingleStatementContext) {
        this.visitStatement(ctx);
    }
}

export { FlinkSemanticContextCollector };
