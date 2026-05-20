import { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import { GenericSqlParser, StatementsContext } from '../../lib/generic/GenericSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class GenericSemanticContextCollector
    extends SemanticContextCollector
    implements GenericSqlListener
{
    override getWhiteSpaceRuleType(): number {
        return GenericSqlParser.WHITE_SPACE;
    }
    override getStatementRuleType(): number {
        return GenericSqlParser.RULE_statements;
    }
    enterStatements(ctx: StatementsContext) {
        this.visitStatement(ctx);
    }
}

export { GenericSemanticContextCollector };
