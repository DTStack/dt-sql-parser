import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { PostgreSqlParser } from '../../lib/postgresql/PostgreSqlParser';

export class PostgreSqlErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [PostgreSqlParser.RULE_databaseName, 'database'],
        [PostgreSqlParser.RULE_databaseNameCreate, 'database'],
        [PostgreSqlParser.RULE_tableName, 'table'],
        [PostgreSqlParser.RULE_tableNameCreate, 'table'],
        [PostgreSqlParser.RULE_viewName, 'view'],
        [PostgreSqlParser.RULE_viewNameCreate, 'view'],
        [PostgreSqlParser.RULE_functionName, 'function'],
        [PostgreSqlParser.RULE_functionNameCreate, 'function'],
        [PostgreSqlParser.RULE_columnName, 'column'],
        [PostgreSqlParser.RULE_columnNameCreate, 'column'],
        [PostgreSqlParser.RULE_schemaNameCreate, 'schema'],
        [PostgreSqlParser.RULE_schemaName, 'schema'],
        [PostgreSqlParser.RULE_procedureNameCreate, 'procedure'],
        [PostgreSqlParser.RULE_procedureName, 'procedure'],
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
                    case PostgreSqlParser.RULE_tableName:
                    case PostgreSqlParser.RULE_functionName:
                    case PostgreSqlParser.RULE_schemaName:
                    case PostgreSqlParser.RULE_viewName:
                    case PostgreSqlParser.RULE_databaseName:
                    case PostgreSqlParser.RULE_procedureName:
                    case PostgreSqlParser.RULE_columnName: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case PostgreSqlParser.RULE_tableNameCreate:
                    case PostgreSqlParser.RULE_functionNameCreate:
                    case PostgreSqlParser.RULE_schemaNameCreate:
                    case PostgreSqlParser.RULE_viewNameCreate:
                    case PostgreSqlParser.RULE_databaseNameCreate:
                    case PostgreSqlParser.RULE_procedureNameCreate:
                    case PostgreSqlParser.RULE_columnNameCreate: {
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
