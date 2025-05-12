import { MySqlParserListener } from '../../lib';
import { MySqlParser, SingleStatementContext } from '../../lib/mysql/MySqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class MySqlSemanticContextCollector
    extends SemanticContextCollector
    implements MySqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return MySqlParser.WHITE_SPACE;
    }
    override getStatementRuleType(): number {
        return MySqlParser.RULE_singleStatement;
    }
    enterSingleStatement(ctx: SingleStatementContext) {
        this.visitStatement(ctx);
    }
}

export { MySqlSemanticContextCollector };
