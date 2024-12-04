import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { MySqlParser } from '../../lib/mysql/MySqlParser';

export class MysqlErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [MySqlParser.RULE_databaseName, 'database'],
        [MySqlParser.RULE_databaseNameCreate, 'database'],
        [MySqlParser.RULE_tableName, 'table'],
        [MySqlParser.RULE_tableNameCreate, 'table'],
        [MySqlParser.RULE_viewName, 'view'],
        [MySqlParser.RULE_viewNameCreate, 'view'],
        [MySqlParser.RULE_functionName, 'function'],
        [MySqlParser.RULE_functionNameCreate, 'function'],
        [MySqlParser.RULE_columnName, 'column'],
        [MySqlParser.RULE_columnNameCreate, 'column'],
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
                    case MySqlParser.RULE_databaseName:
                    case MySqlParser.RULE_tableName:
                    case MySqlParser.RULE_functionName:
                    case MySqlParser.RULE_viewName:
                    case MySqlParser.RULE_columnName: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case MySqlParser.RULE_databaseNameCreate:
                    case MySqlParser.RULE_tableNameCreate:
                    case MySqlParser.RULE_functionNameCreate:
                    case MySqlParser.RULE_viewNameCreate:
                    case MySqlParser.RULE_columnNameCreate: {
                        result.push(`{new}${name}`);
                        break;
                    }
                }
            }
            expectedText = result.join(`{or}`);
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
