import { ImpalaSqlParserListener } from '../../lib';
import { ImpalaSqlParser, SingleStatementContext } from '../../lib/impala/ImpalaSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class ImpalaSemanticContextCollector
    extends SemanticContextCollector
    implements ImpalaSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return ImpalaSqlParser.WHITE_SPACE;
    }
    override getStatementRuleType(): number {
        return ImpalaSqlParser.RULE_singleStatement;
    }
    enterSingleStatement(ctx: SingleStatementContext) {
        this.visitStatement(ctx);
    }
}

export { ImpalaSemanticContextCollector };
