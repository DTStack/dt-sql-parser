import { CodeCompletionCore } from 'antlr4-c3';
import { Parser, Token } from 'antlr4ng';

import { GenericSqlParser } from '../../lib/generic/GenericSqlParser';
import { ParseErrorListener } from '../common/parseErrorListener';

export class GenericErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [GenericSqlParser.RULE_tableName, 'table'],
        [GenericSqlParser.RULE_tableNameCreate, 'table'],
        [GenericSqlParser.RULE_columnRef, 'column'],
    ]);

    public getExpectedText(parser: Parser, token: Token) {
        let expectedText = '';
        const input = this.parserContext.getParsedInput();

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
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case GenericSqlParser.RULE_tableName:
                    case GenericSqlParser.RULE_columnRef: {
                        if (name && !result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    case GenericSqlParser.RULE_tableNameCreate: {
                        if (name && !result.includes(`{new}${name}`)) {
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
