import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { SparkSqlParser } from '../../lib/spark/SparkSqlParser';

export class SparkErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [SparkSqlParser.RULE_namespaceName, 'namespace'],
        [SparkSqlParser.RULE_namespaceNameCreate, 'namespace'],
        [SparkSqlParser.RULE_tableName, 'table'],
        [SparkSqlParser.RULE_tableNameCreate, 'table'],
        [SparkSqlParser.RULE_viewName, 'view'],
        [SparkSqlParser.RULE_viewNameCreate, 'view'],
        [SparkSqlParser.RULE_functionName, 'function'],
        [SparkSqlParser.RULE_functionNameCreate, 'function'],
        [SparkSqlParser.RULE_columnName, 'column'],
        [SparkSqlParser.RULE_columnNamePath, 'column'],
        [SparkSqlParser.RULE_columnNameCreate, 'column'],
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
            const result = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case SparkSqlParser.RULE_namespaceName:
                    case SparkSqlParser.RULE_tableName:
                    case SparkSqlParser.RULE_viewName:
                    case SparkSqlParser.RULE_functionName:
                    case SparkSqlParser.RULE_columnName:
                    case SparkSqlParser.RULE_columnNamePath: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case SparkSqlParser.RULE_namespaceNameCreate:
                    case SparkSqlParser.RULE_tableNameCreate:
                    case SparkSqlParser.RULE_functionNameCreate:
                    case SparkSqlParser.RULE_viewNameCreate:
                    case SparkSqlParser.RULE_columnNameCreate: {
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
