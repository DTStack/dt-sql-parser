import { PostgreSqlParserListener } from '../../lib';
import { PostgreSqlParser, SingleStmtContext } from '../../lib/postgresql/PostgreSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class PostgreSemanticContextCollector
    extends SemanticContextCollector
    implements PostgreSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return PostgreSqlParser.Whitespace;
    }
    override getStatementRuleType(): number {
        return PostgreSqlParser.RULE_singleStmt;
    }

    enterSingleStmt(ctx: SingleStmtContext) {
        this.visitStatement(ctx);
    }
}

export { PostgreSemanticContextCollector };
