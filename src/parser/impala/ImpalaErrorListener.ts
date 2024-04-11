import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { ImpalaSqlParser } from '../../lib/impala/ImpalaSqlParser';
import { LOCALE_TYPE } from '../common/types';

export class ImpalaErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

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

    constructor(errorListener: ErrorListener, preferredRules: Set<number>, locale: LOCALE_TYPE) {
        super(errorListener, locale);
        this.preferredRules = preferredRules;
    }

    public getExpectedText(parser: Parser, token: Token) {
        let expectedText = '';

        let currentContext = parser.context ?? undefined;
        while (currentContext?.parent) {
            currentContext = currentContext.parent;
        }

        const core = new CodeCompletionCore(parser);
        core.preferredRules = this.preferredRules;
        const candidates = core.collectCandidates(token.tokenIndex, currentContext);

        if (candidates.rules.size) {
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
                        if (!name) {
                            expectedText = '{newObj}';
                        } else {
                            expectedText = `{new}${name}`;
                        }
                        break;
                    }
                    case ImpalaSqlParser.RULE_databaseNameCreate:
                    case ImpalaSqlParser.RULE_tableNameCreate:
                    case ImpalaSqlParser.RULE_functionNameCreate:
                    case ImpalaSqlParser.RULE_viewNameCreate:
                    case ImpalaSqlParser.RULE_columnNamePathCreate: {
                        if (!name) {
                            expectedText = '{existingObj}';
                        } else {
                            expectedText = `{existing}${name}`;
                        }
                        break;
                    }
                }
            }
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
