import { HiveSqlParserListener } from '../../lib';
import { HiveSqlParser, StatementContext } from '../../lib/hive/HiveSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class HiveSemanticContextCollector
    extends SemanticContextCollector
    implements HiveSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return HiveSqlParser.WHITE_SPACE;
    }
    override getStatementRuleType(): number {
        return HiveSqlParser.RULE_statement;
    }
    enterStatement(ctx: StatementContext) {
        this.visitStatement(ctx);
    }
}

export { HiveSemanticContextCollector };
