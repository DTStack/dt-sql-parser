import { CodeCompletionCore } from 'antlr4-c3';
import { ErrorListener, ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { PostgreSqlParser } from '../../lib/postgresql/PostgreSqlParser';

export class PostgreSqlErrorListener extends ParseErrorListener {
    private preferredRules: Set<number>;

    private objectNames: Map<number, string> = new Map([
        [PostgreSqlParser.RULE_database_name, 'database'],
        [PostgreSqlParser.RULE_database_name_create, 'database'],
        [PostgreSqlParser.RULE_table_name, 'table'],
        [PostgreSqlParser.RULE_table_name_create, 'table'],
        [PostgreSqlParser.RULE_view_name, 'view'],
        [PostgreSqlParser.RULE_view_name_create, 'view'],
        [PostgreSqlParser.RULE_function_name, 'function'],
        [PostgreSqlParser.RULE_function_name_create, 'function'],
        [PostgreSqlParser.RULE_column_name, 'column'],
        [PostgreSqlParser.RULE_column_name_create, 'column'],
        [PostgreSqlParser.RULE_schema_name_create, 'schema'],
        [PostgreSqlParser.RULE_schema_name, 'schema'],
        [PostgreSqlParser.RULE_procedure_name_create, 'procedure'],
        [PostgreSqlParser.RULE_procedure_name, 'procedure'],
    ]);

    constructor(errorListener: ErrorListener, preferredRules: Set<number>) {
        super(errorListener);
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
                    case PostgreSqlParser.RULE_table_name:
                    case PostgreSqlParser.RULE_function_name:
                    case PostgreSqlParser.RULE_schema_name:
                    case PostgreSqlParser.RULE_view_name:
                    case PostgreSqlParser.RULE_database_name:
                    case PostgreSqlParser.RULE_procedure_name:
                    case PostgreSqlParser.RULE_column_name: {
                        if (!name) {
                            expectedText = 'a new object name';
                        } else {
                            expectedText = `a new ${name} name`;
                        }
                        break;
                    }
                    case PostgreSqlParser.RULE_table_name_create:
                    case PostgreSqlParser.RULE_function_name_create:
                    case PostgreSqlParser.RULE_schema_name_create:
                    case PostgreSqlParser.RULE_view_name_create:
                    case PostgreSqlParser.RULE_database_name_create:
                    case PostgreSqlParser.RULE_procedure_name_create:
                    case PostgreSqlParser.RULE_column_name_create: {
                        if (!name) {
                            expectedText = 'an existing object';
                        } else {
                            expectedText = `an existing ${name}`;
                        }
                        break;
                    }
                }
            }
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? ' or a keyword' : 'a keyword';
        }
        return expectedText;
    }
}
