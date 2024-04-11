import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { TrinoSqlParser } from '../../lib/trino/TrinoSqlParser';
import { LOCALE_TYPE } from '../common/types';

export class TrinoErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [TrinoSqlParser.RULE_catalogName, 'database'],
        [TrinoSqlParser.RULE_catalogNameCreate, 'database'],
        [TrinoSqlParser.RULE_tableName, 'table'],
        [TrinoSqlParser.RULE_tableNameCreate, 'table'],
        [TrinoSqlParser.RULE_viewName, 'view'],
        [TrinoSqlParser.RULE_viewNameCreate, 'view'],
        [TrinoSqlParser.RULE_schemaName, 'schema'],
        [TrinoSqlParser.RULE_schemaNameCreate, 'schema'],
        [TrinoSqlParser.RULE_functionName, 'function'],
        [TrinoSqlParser.RULE_columnName, 'column'],
        [TrinoSqlParser.RULE_columnNameCreate, 'column'],
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
                    case TrinoSqlParser.RULE_catalogName:
                    case TrinoSqlParser.RULE_schemaName:
                    case TrinoSqlParser.RULE_tableName:
                    case TrinoSqlParser.RULE_viewName:
                    case TrinoSqlParser.RULE_functionName:
                    case TrinoSqlParser.RULE_columnName: {
                        if (!name) {
                            expectedText = '{newObj}';
                        } else {
                            expectedText = `{new}${name}`;
                        }
                        break;
                    }
                    case TrinoSqlParser.RULE_catalogNameCreate:
                    case TrinoSqlParser.RULE_tableNameCreate:
                    case TrinoSqlParser.RULE_schemaNameCreate:
                    case TrinoSqlParser.RULE_viewNameCreate:
                    case TrinoSqlParser.RULE_tableNameCreate: {
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
