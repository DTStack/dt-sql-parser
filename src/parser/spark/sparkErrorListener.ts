import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { SparkSqlParser } from '../../lib/spark/SparkSqlParser';
import { LOCALE_TYPE } from '../common/types';

export class SparkErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

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
        [SparkSqlParser.RULE_columnNameCreate, 'column'],
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
                    case SparkSqlParser.RULE_namespaceName:
                    case SparkSqlParser.RULE_tableName:
                    case SparkSqlParser.RULE_viewName:
                    case SparkSqlParser.RULE_functionName:
                    case SparkSqlParser.RULE_columnName: {
                        if (!name) {
                            expectedText = '{newObj}';
                        } else {
                            expectedText = `{new}${name}`;
                        }
                        break;
                    }
                    case SparkSqlParser.RULE_namespaceNameCreate:
                    case SparkSqlParser.RULE_tableNameCreate:
                    case SparkSqlParser.RULE_functionNameCreate:
                    case SparkSqlParser.RULE_viewNameCreate:
                    case SparkSqlParser.RULE_columnNameCreate: {
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
