import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { SqlParser } from '../../lib/sql/SqlParser';
import { LOCALE_TYPE } from '../common/types';

export class SqlErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [SqlParser.RULE_namespaceName, 'namespace'],
        [SqlParser.RULE_namespaceNameCreate, 'namespace'],
        [SqlParser.RULE_tableName, 'table'],
        [SqlParser.RULE_tableNameCreate, 'table'],
        [SqlParser.RULE_viewName, 'view'],
        [SqlParser.RULE_viewNameCreate, 'view'],
        [SqlParser.RULE_functionName, 'function'],
        [SqlParser.RULE_functionNameCreate, 'function'],
        [SqlParser.RULE_columnName, 'column'],
        [SqlParser.RULE_columnNameCreate, 'column'],
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
            const result = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case SqlParser.RULE_namespaceName:
                    case SqlParser.RULE_tableName:
                    case SqlParser.RULE_viewName:
                    case SqlParser.RULE_functionName:
                    case SqlParser.RULE_columnName: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case SqlParser.RULE_namespaceNameCreate:
                    case SqlParser.RULE_tableNameCreate:
                    case SqlParser.RULE_functionNameCreate:
                    case SqlParser.RULE_viewNameCreate:
                    case SqlParser.RULE_columnNameCreate: {
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
