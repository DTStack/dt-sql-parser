import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { FlinkSqlParser } from '../../lib/flink/FlinkSqlParser';

export class FlinkErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [FlinkSqlParser.RULE_catalogPath, 'catalog'],
        [FlinkSqlParser.RULE_catalogPathCreate, 'catalog'],
        [FlinkSqlParser.RULE_databasePath, 'database'],
        [FlinkSqlParser.RULE_databasePathCreate, 'database'],
        [FlinkSqlParser.RULE_tablePath, 'table'],
        [FlinkSqlParser.RULE_tablePathCreate, 'table'],
        [FlinkSqlParser.RULE_viewPath, 'view'],
        [FlinkSqlParser.RULE_viewPathCreate, 'view'],
        [FlinkSqlParser.RULE_functionName, 'function'],
        [FlinkSqlParser.RULE_functionNameWithParams, 'function'],
        [FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName, 'function'],
        [FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName, 'function'],
        [FlinkSqlParser.RULE_functionNameCreate, 'function'],
        [FlinkSqlParser.RULE_columnName, 'column'],
        [FlinkSqlParser.RULE_columnNamePath, 'column'],
        [FlinkSqlParser.RULE_columnNameCreate, 'column'],
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
                    case FlinkSqlParser.RULE_databasePath:
                    case FlinkSqlParser.RULE_tablePath:
                    case FlinkSqlParser.RULE_viewPath:
                    case FlinkSqlParser.RULE_functionName:
                    case FlinkSqlParser.RULE_functionNameWithParams:
                    case FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName:
                    case FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName:
                    case FlinkSqlParser.RULE_columnName:
                    case FlinkSqlParser.RULE_columnNamePath:
                    case FlinkSqlParser.RULE_catalogPath: {
                        if (!result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    case FlinkSqlParser.RULE_databasePathCreate:
                    case FlinkSqlParser.RULE_tablePathCreate:
                    case FlinkSqlParser.RULE_functionNameCreate:
                    case FlinkSqlParser.RULE_viewPathCreate:
                    case FlinkSqlParser.RULE_columnNameCreate:
                    case FlinkSqlParser.RULE_catalogPathCreate: {
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
