import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { ImpalaSqlParser } from '../../lib/impala/ImpalaSqlParser';

export class ImpalaErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [ImpalaSqlParser.RULE_databaseNamePath, 'database'],
        [ImpalaSqlParser.RULE_databaseNameCreate, 'database'],
        [ImpalaSqlParser.RULE_tableNamePath, 'table'],
        [ImpalaSqlParser.RULE_tableNameCreate, 'table'],
        [ImpalaSqlParser.RULE_viewNamePath, 'view'],
        [ImpalaSqlParser.RULE_viewNameCreate, 'view'],
        [ImpalaSqlParser.RULE_functionNamePath, 'function'],
        [ImpalaSqlParser.RULE_functionNameCreate, 'function'],
        [ImpalaSqlParser.RULE_columnNamePath, 'column'],
        [ImpalaSqlParser.RULE_columnNamePathCreate, 'column'],
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
                    case ImpalaSqlParser.RULE_databaseNamePath:
                    case ImpalaSqlParser.RULE_tableNamePath:
                    case ImpalaSqlParser.RULE_functionNamePath:
                    case ImpalaSqlParser.RULE_viewNamePath:
                    case ImpalaSqlParser.RULE_columnNamePath: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case ImpalaSqlParser.RULE_databaseNameCreate:
                    case ImpalaSqlParser.RULE_tableNameCreate:
                    case ImpalaSqlParser.RULE_functionNameCreate:
                    case ImpalaSqlParser.RULE_viewNameCreate:
                    case ImpalaSqlParser.RULE_columnNamePathCreate: {
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
