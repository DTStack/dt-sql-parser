import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { SQLParser } from '../../lib/sql/SQLParser';
import { LOCALE_TYPE } from '../common/types';

export class SQLErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [SQLParser.RULE_namespaceName, 'namespace'],
        [SQLParser.RULE_namespaceNameCreate, 'namespace'],
        [SQLParser.RULE_tableName, 'table'],
        [SQLParser.RULE_tableNameCreate, 'table'],
        [SQLParser.RULE_viewName, 'view'],
        [SQLParser.RULE_viewNameCreate, 'view'],
        [SQLParser.RULE_functionName, 'function'],
        [SQLParser.RULE_functionNameCreate, 'function'],
        [SQLParser.RULE_columnName, 'column'],
        [SQLParser.RULE_columnNameCreate, 'column'],
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
                    case SQLParser.RULE_namespaceName:
                    case SQLParser.RULE_tableName:
                    case SQLParser.RULE_viewName:
                    case SQLParser.RULE_functionName:
                    case SQLParser.RULE_columnName: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case SQLParser.RULE_namespaceNameCreate:
                    case SQLParser.RULE_tableNameCreate:
                    case SQLParser.RULE_functionNameCreate:
                    case SQLParser.RULE_viewNameCreate:
                    case SQLParser.RULE_columnNameCreate: {
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
