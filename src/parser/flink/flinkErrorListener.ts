import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { FlinkSqlParser } from '../../lib/flink/FlinkSqlParser';
import { LOCALE_TYPE } from '../common/types';

export class FlinkErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [FlinkSqlParser.RULE_catalogPath, 'catalog'],
        [FlinkSqlParser.RULE_catalogPathCreate, 'catalog'],
        [FlinkSqlParser.RULE_databasePath, 'database'],
        [FlinkSqlParser.RULE_databasePathCreate, 'database'],
        [FlinkSqlParser.RULE_tablePath, 'table'],
        [FlinkSqlParser.RULE_tablePathCreate, 'table'],
        [FlinkSqlParser.RULE_viewPath, 'view'],
        [FlinkSqlParser.RULE_viewPathCreate, 'view'],
        [FlinkSqlParser.RULE_functionName, 'function'],
        [FlinkSqlParser.RULE_functionNameCreate, 'function'],
        [FlinkSqlParser.RULE_columnName, 'column'],
        [FlinkSqlParser.RULE_columnNameCreate, 'column'],
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
                    case FlinkSqlParser.RULE_databasePath:
                    case FlinkSqlParser.RULE_tablePath:
                    case FlinkSqlParser.RULE_viewPath:
                    case FlinkSqlParser.RULE_functionName:
                    case FlinkSqlParser.RULE_columnName:
                    case FlinkSqlParser.RULE_catalogPath: {
                        result.push(`{existing}${name}`);
                        break;
                    }
                    case FlinkSqlParser.RULE_databasePathCreate:
                    case FlinkSqlParser.RULE_tablePathCreate:
                    case FlinkSqlParser.RULE_functionNameCreate:
                    case FlinkSqlParser.RULE_viewPathCreate:
                    case FlinkSqlParser.RULE_columnNameCreate:
                    case FlinkSqlParser.RULE_catalogPathCreate: {
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
