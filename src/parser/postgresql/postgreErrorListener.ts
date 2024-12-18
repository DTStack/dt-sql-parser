import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { PostgreSqlParser } from '../../lib/postgresql/PostgreSqlParser';

export class PostgreSqlErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [PostgreSqlParser.RULE_database_name, 'database'],
        [PostgreSqlParser.RULE_database_name_create, 'database'],
        [PostgreSqlParser.RULE_table_name, 'table'],
        [PostgreSqlParser.RULE_table_name_create, 'table'],
        [PostgreSqlParser.RULE_view_name, 'view'],
        [PostgreSqlParser.RULE_view_name_create, 'view'],
        [PostgreSqlParser.RULE_function_name, 'function'],
        [PostgreSqlParser.RULE_function_name_create, 'function'],
        [PostgreSqlParser.RULE_column_name, 'column'],
        [PostgreSqlParser.RULE_column_name_create, 'column'],
        [PostgreSqlParser.RULE_schema_name_create, 'schema'],
        [PostgreSqlParser.RULE_schema_name, 'schema'],
        [PostgreSqlParser.RULE_procedure_name_create, 'procedure'],
        [PostgreSqlParser.RULE_procedure_name, 'procedure'],
    ]);

    public getExpectedText(parser: Parser, token: Token) {
        let expectedText = '';
        const input = this.parserContext.getParsedInput();

        /**
         * Get the program context.
         * When called error listener, `this._parseTree` is still `undefined`,
         * so we can't use cached parseTree in `getMinimumParserInfo`
         */
        let currentContext = parser.context ?? undefined;
        while (currentContext?.parent) {
            currentContext = currentContext.parent;
        }

        const parserInfo = this.parserContext.getMinimumParserInfo(
            input,
            token.tokenIndex,
            currentContext
        );

        if (!parserInfo) return '';

        const { parser: c3Parser, newTokenIndex, parseTree: c3Context } = parserInfo;

        const core = new CodeCompletionCore(c3Parser);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(newTokenIndex, c3Context);

        if (candidates.rules.size) {
            const result: string[] = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case PostgreSqlParser.RULE_table_name:
                    case PostgreSqlParser.RULE_function_name:
                    case PostgreSqlParser.RULE_schema_name:
                    case PostgreSqlParser.RULE_view_name:
                    case PostgreSqlParser.RULE_database_name:
                    case PostgreSqlParser.RULE_procedure_name:
                    case PostgreSqlParser.RULE_column_name: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case PostgreSqlParser.RULE_table_name_create:
                    case PostgreSqlParser.RULE_function_name_create:
                    case PostgreSqlParser.RULE_schema_name_create:
                    case PostgreSqlParser.RULE_view_name_create:
                    case PostgreSqlParser.RULE_database_name_create:
                    case PostgreSqlParser.RULE_procedure_name_create:
                    case PostgreSqlParser.RULE_column_name_create: {
                        result.push(`{new}${name}`);
                        break;
                    }
                }
            }
            expectedText = result.join('{or}');
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
