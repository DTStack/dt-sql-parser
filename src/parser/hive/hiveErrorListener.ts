import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { HiveSqlParser } from '../../lib/hive/HiveSqlParser';
import { LOCALE_TYPE } from '../common/types';

export class HiveErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [HiveSqlParser.RULE_dbSchemaName, 'database'],
        [HiveSqlParser.RULE_dbSchemaNameCreate, 'database'],
        [HiveSqlParser.RULE_tableName, 'table'],
        [HiveSqlParser.RULE_tableNameCreate, 'table'],
        [HiveSqlParser.RULE_viewName, 'view'],
        [HiveSqlParser.RULE_viewNameCreate, 'view'],
        [HiveSqlParser.RULE_functionNameForDDL, 'function'],
        [HiveSqlParser.RULE_functionNameForInvoke, 'function'],
        [HiveSqlParser.RULE_functionNameCreate, 'function'],
        [HiveSqlParser.RULE_columnName, 'column'],
        [HiveSqlParser.RULE_columnNameCreate, 'column'],
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
            const result: string[] = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case HiveSqlParser.RULE_dbSchemaName:
                    case HiveSqlParser.RULE_tableName:
                    case HiveSqlParser.RULE_viewName:
                    case HiveSqlParser.RULE_functionNameForDDL:
                    case HiveSqlParser.RULE_functionNameForInvoke:
                    case HiveSqlParser.RULE_columnName: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case HiveSqlParser.RULE_dbSchemaNameCreate:
                    case HiveSqlParser.RULE_tableNameCreate:
                    case HiveSqlParser.RULE_functionNameCreate:
                    case HiveSqlParser.RULE_viewNameCreate:
                    case HiveSqlParser.RULE_columnNameCreate: {
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
