import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser, ProgramContext } from '../lib/flinksql/FlinkSqlParser';
import { SyntaxContextType, Suggestions, SyntaxSuggestion } from './common/basic-parser-types';
import BasicParser from './common/basicParser';

export default class FlinkSQL extends BasicParser<FlinkSqlLexer, ProgramContext, FlinkSqlParser> {
    public createLexerFormCharStream(charStreams) {
        const lexer = new FlinkSqlLexer(charStreams);
        return lexer;
    }

    public createParserFromTokenStream(tokenStream) {
        const parser = new FlinkSqlParser(tokenStream);
        return parser;
    }

    public preferredRules = new Set([
        FlinkSqlParser.RULE_tablePath, // table name >> select / insert ...
        FlinkSqlParser.RULE_tablePathCreate, // table name >> create 
        FlinkSqlParser.RULE_databasePath, // database name >> show
        FlinkSqlParser.RULE_databasePathCreate, // database name >> create 
        FlinkSqlParser.RULE_catalogPath, // catalog name
    ]);

    public processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate
            const tokenRanges = allTokens.slice(candidateRule.startTokenIndex, caretTokenIndex + 1)
            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case FlinkSqlParser.RULE_tablePath: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case FlinkSqlParser.RULE_tablePathCreate: {
                    syntaxContextType = SyntaxContextType.TABLE_CREATE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePath: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_databasePathCreate: {
                    syntaxContextType = SyntaxContextType.DATABASE;
                    break;
                }
                case FlinkSqlParser.RULE_catalogPath: {
                    syntaxContextType = SyntaxContextType.CATALOG;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges
                })
            }
        }

        for (let candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if(symbolicName && symbolicName.startsWith('KW_')) {
                const keyword = displayName.startsWith("'") && displayName.endsWith("'")
                    ? displayName.slice(1, -1)
                    : displayName
                keywords.push(keyword);
            }
        }
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        }
    }
}
