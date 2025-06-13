import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { HiveSqlParser } from '../../lib/hive/HiveSqlParser';

export class HiveErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [HiveSqlParser.RULE_dbSchemaName, 'database'],
        [HiveSqlParser.RULE_dbSchemaNameCreate, 'database'],
        [HiveSqlParser.RULE_tableName, 'table'],
        [HiveSqlParser.RULE_tableNameCreate, 'table'],
        [HiveSqlParser.RULE_viewName, 'view'],
        [HiveSqlParser.RULE_viewNameCreate, 'view'],
        [HiveSqlParser.RULE_functionNameForDDL, 'function'],
        [HiveSqlParser.RULE_functionNameForInvoke, 'function'],
        [HiveSqlParser.RULE_functionNameCreate, 'function'],
        [HiveSqlParser.RULE_columnName, 'column'],
        [HiveSqlParser.RULE_columnNameCreate, 'column'],
        [HiveSqlParser.RULE_columnNamePath, 'column'],
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
                    case HiveSqlParser.RULE_dbSchemaName:
                    case HiveSqlParser.RULE_tableName:
                    case HiveSqlParser.RULE_viewName:
                    case HiveSqlParser.RULE_functionNameForDDL:
                    case HiveSqlParser.RULE_functionNameForInvoke:
                    case HiveSqlParser.RULE_columnName:
                    case HiveSqlParser.RULE_columnNamePath: {
                        if (!result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    case HiveSqlParser.RULE_dbSchemaNameCreate:
                    case HiveSqlParser.RULE_tableNameCreate:
                    case HiveSqlParser.RULE_functionNameCreate:
                    case HiveSqlParser.RULE_viewNameCreate:
                    case HiveSqlParser.RULE_columnNameCreate: {
                        if (!result.includes(`{new}${name}`)) {
                            result.push(`{new}${name}`);
                        }
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
