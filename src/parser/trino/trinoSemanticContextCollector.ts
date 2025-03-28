import { TrinoSqlListener } from '../../lib';
import { StatementsContext, TrinoSqlParser } from '../../lib/trino/TrinoSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class TrinoSemanticContextCollector extends SemanticContextCollector implements TrinoSqlListener {
    override getWhiteSpaceRuleType(): number {
        return TrinoSqlParser.WS;
    }
    override getStatementRuleType(): number {
        return TrinoSqlParser.RULE_statements;
    }
    enterStatements(ctx: StatementsContext) {
        this.visitStatement(ctx);
    }
}

export { TrinoSemanticContextCollector };
