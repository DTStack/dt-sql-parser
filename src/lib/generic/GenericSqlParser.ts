// Generated from dt-sql-parser/src/grammar/generic/GenericSql.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { GenericSqlListener } from "./GenericSqlListener.js";
import { GenericSqlVisitor } from "./GenericSqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { SQLParserBase } from '../SQLParserBase';


export class GenericSqlParser extends SQLParserBase {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly KW_ADD = 5;
    public static readonly KW_ALL = 6;
    public static readonly KW_ALTER = 7;
    public static readonly KW_AND = 8;
    public static readonly KW_AS = 9;
    public static readonly KW_ASC = 10;
    public static readonly KW_BETWEEN = 11;
    public static readonly KW_BIGINT = 12;
    public static readonly KW_BINARY = 13;
    public static readonly KW_BOOLEAN = 14;
    public static readonly KW_BY = 15;
    public static readonly KW_CASE = 16;
    public static readonly KW_CAST = 17;
    public static readonly KW_CHAR = 18;
    public static readonly KW_CHECK = 19;
    public static readonly KW_COALESCE = 20;
    public static readonly KW_COLUMN = 21;
    public static readonly KW_CONSTRAINT = 22;
    public static readonly KW_CREATE = 23;
    public static readonly KW_CROSS = 24;
    public static readonly KW_DATE = 25;
    public static readonly KW_DECIMAL = 26;
    public static readonly KW_DEFAULT = 27;
    public static readonly KW_DELETE = 28;
    public static readonly KW_DESC = 29;
    public static readonly KW_DISTINCT = 30;
    public static readonly KW_DOUBLE = 31;
    public static readonly KW_DROP = 32;
    public static readonly KW_ELSE = 33;
    public static readonly KW_END = 34;
    public static readonly KW_ESCAPE = 35;
    public static readonly KW_EXCEPT = 36;
    public static readonly KW_EXISTS = 37;
    public static readonly KW_FALSE = 38;
    public static readonly KW_FIRST = 39;
    public static readonly KW_FLOAT = 40;
    public static readonly KW_FOREIGN = 41;
    public static readonly KW_FROM = 42;
    public static readonly KW_FULL = 43;
    public static readonly KW_GROUP = 44;
    public static readonly KW_HAVING = 45;
    public static readonly KW_IF = 46;
    public static readonly KW_IN = 47;
    public static readonly KW_INNER = 48;
    public static readonly KW_INSERT = 49;
    public static readonly KW_INT = 50;
    public static readonly KW_INTEGER = 51;
    public static readonly KW_INTERSECT = 52;
    public static readonly KW_INTO = 53;
    public static readonly KW_IS = 54;
    public static readonly KW_JOIN = 55;
    public static readonly KW_KEY = 56;
    public static readonly KW_LAST = 57;
    public static readonly KW_LEFT = 58;
    public static readonly KW_LIKE = 59;
    public static readonly KW_LIMIT = 60;
    public static readonly KW_NOT = 61;
    public static readonly KW_NULL = 62;
    public static readonly KW_NULLIF = 63;
    public static readonly KW_NULLS = 64;
    public static readonly KW_NUMERIC = 65;
    public static readonly KW_OFFSET = 66;
    public static readonly KW_ON = 67;
    public static readonly KW_OR = 68;
    public static readonly KW_ORDER = 69;
    public static readonly KW_OUTER = 70;
    public static readonly KW_PRIMARY = 71;
    public static readonly KW_RECURSIVE = 72;
    public static readonly KW_REFERENCES = 73;
    public static readonly KW_RENAME = 74;
    public static readonly KW_RIGHT = 75;
    public static readonly KW_SELECT = 76;
    public static readonly KW_SET = 77;
    public static readonly KW_SMALLINT = 78;
    public static readonly KW_TABLE = 79;
    public static readonly KW_TEXT = 80;
    public static readonly KW_THEN = 81;
    public static readonly KW_TIME = 82;
    public static readonly KW_TIMESTAMP = 83;
    public static readonly KW_TINYINT = 84;
    public static readonly KW_TO = 85;
    public static readonly KW_TRUE = 86;
    public static readonly KW_UNION = 87;
    public static readonly KW_UNIQUE = 88;
    public static readonly KW_UPDATE = 89;
    public static readonly KW_VARCHAR = 90;
    public static readonly KW_VARBINARY = 91;
    public static readonly KW_WHEN = 92;
    public static readonly KW_WHERE = 93;
    public static readonly KW_WITH = 94;
    public static readonly EQ = 95;
    public static readonly NEQ = 96;
    public static readonly LT = 97;
    public static readonly LTE = 98;
    public static readonly GT = 99;
    public static readonly GTE = 100;
    public static readonly PLUS = 101;
    public static readonly MINUS = 102;
    public static readonly ASTERISK = 103;
    public static readonly SLASH = 104;
    public static readonly PERCENT = 105;
    public static readonly CONCAT = 106;
    public static readonly QUESTION_MARK = 107;
    public static readonly SEMICOLON = 108;
    public static readonly STRING = 109;
    public static readonly BINARY_LITERAL = 110;
    public static readonly INTEGER_VALUE = 111;
    public static readonly DECIMAL_VALUE = 112;
    public static readonly DOUBLE_VALUE = 113;
    public static readonly IDENTIFIER = 114;
    public static readonly DIGIT_IDENTIFIER = 115;
    public static readonly QUOTED_IDENTIFIER = 116;
    public static readonly BACKQUOTED_IDENTIFIER = 117;
    public static readonly LINE_COMMENT = 118;
    public static readonly BRACKETED_COMMENT = 119;
    public static readonly WHITE_SPACE = 120;
    public static readonly UNRECOGNIZED = 121;
    public static readonly DELIMITER = 122;
    public static readonly RULE_program = 0;
    public static readonly RULE_statements = 1;
    public static readonly RULE_singleStatement = 2;
    public static readonly RULE_statement = 3;
    public static readonly RULE_queryStatement = 4;
    public static readonly RULE_withClause = 5;
    public static readonly RULE_namedQuery = 6;
    public static readonly RULE_cteColumnList = 7;
    public static readonly RULE_queryNoWith = 8;
    public static readonly RULE_queryTerm = 9;
    public static readonly RULE_queryPrimary = 10;
    public static readonly RULE_querySpecification = 11;
    public static readonly RULE_setQuantifier = 12;
    public static readonly RULE_selectItem = 13;
    public static readonly RULE_fromClause = 14;
    public static readonly RULE_relation = 15;
    public static readonly RULE_joinType = 16;
    public static readonly RULE_aliasedRelation = 17;
    public static readonly RULE_relationPrimary = 18;
    public static readonly RULE_whereClause = 19;
    public static readonly RULE_groupByClause = 20;
    public static readonly RULE_havingClause = 21;
    public static readonly RULE_orderByClause = 22;
    public static readonly RULE_sortItem = 23;
    public static readonly RULE_limitClause = 24;
    public static readonly RULE_insertStatement = 25;
    public static readonly RULE_columnList = 26;
    public static readonly RULE_updateStatement = 27;
    public static readonly RULE_updateAssignment = 28;
    public static readonly RULE_deleteStatement = 29;
    public static readonly RULE_createTableStatement = 30;
    public static readonly RULE_tableElement = 31;
    public static readonly RULE_columnDefinition = 32;
    public static readonly RULE_tableConstraint = 33;
    public static readonly RULE_alterTableStatement = 34;
    public static readonly RULE_dropTableStatement = 35;
    public static readonly RULE_expression = 36;
    public static readonly RULE_booleanExpression = 37;
    public static readonly RULE_predicatedExpression = 38;
    public static readonly RULE_predicate = 39;
    public static readonly RULE_comparisonOperator = 40;
    public static readonly RULE_valueExpression = 41;
    public static readonly RULE_primaryExpression = 42;
    public static readonly RULE_whenClause = 43;
    public static readonly RULE_subqueryExpression = 44;
    public static readonly RULE_dataType = 45;
    public static readonly RULE_properties = 46;
    public static readonly RULE_property = 47;
    public static readonly RULE_literal = 48;
    public static readonly RULE_identifier = 49;
    public static readonly RULE_qualifiedName = 50;
    public static readonly RULE_columnRef = 51;
    public static readonly RULE_tableName = 52;
    public static readonly RULE_tableNameCreate = 53;
    public static readonly RULE_nonReserved = 54;

    public static readonly literalNames = [
        null, "','", "'('", "')'", "'.'", "'ADD'", "'ALL'", "'ALTER'", "'AND'", 
        "'AS'", "'ASC'", "'BETWEEN'", "'BIGINT'", "'BINARY'", "'BOOLEAN'", 
        "'BY'", "'CASE'", "'CAST'", "'CHAR'", "'CHECK'", "'COALESCE'", "'COLUMN'", 
        "'CONSTRAINT'", "'CREATE'", "'CROSS'", "'DATE'", "'DECIMAL'", "'DEFAULT'", 
        "'DELETE'", "'DESC'", "'DISTINCT'", "'DOUBLE'", "'DROP'", "'ELSE'", 
        "'END'", "'ESCAPE'", "'EXCEPT'", "'EXISTS'", "'FALSE'", "'FIRST'", 
        "'FLOAT'", "'FOREIGN'", "'FROM'", "'FULL'", "'GROUP'", "'HAVING'", 
        "'IF'", "'IN'", "'INNER'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", 
        "'INTO'", "'IS'", "'JOIN'", "'KEY'", "'LAST'", "'LEFT'", "'LIKE'", 
        "'LIMIT'", "'NOT'", "'NULL'", "'NULLIF'", "'NULLS'", "'NUMERIC'", 
        "'OFFSET'", "'ON'", "'OR'", "'ORDER'", "'OUTER'", "'PRIMARY'", "'RECURSIVE'", 
        "'REFERENCES'", "'RENAME'", "'RIGHT'", "'SELECT'", "'SET'", "'SMALLINT'", 
        "'TABLE'", "'TEXT'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TINYINT'", 
        "'TO'", "'TRUE'", "'UNION'", "'UNIQUE'", "'UPDATE'", "'VARCHAR'", 
        "'VARBINARY'", "'WHEN'", "'WHERE'", "'WITH'", "'='", null, "'<'", 
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'", 
        "'?'", "';'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, "KW_ADD", "KW_ALL", "KW_ALTER", "KW_AND", 
        "KW_AS", "KW_ASC", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BOOLEAN", 
        "KW_BY", "KW_CASE", "KW_CAST", "KW_CHAR", "KW_CHECK", "KW_COALESCE", 
        "KW_COLUMN", "KW_CONSTRAINT", "KW_CREATE", "KW_CROSS", "KW_DATE", 
        "KW_DECIMAL", "KW_DEFAULT", "KW_DELETE", "KW_DESC", "KW_DISTINCT", 
        "KW_DOUBLE", "KW_DROP", "KW_ELSE", "KW_END", "KW_ESCAPE", "KW_EXCEPT", 
        "KW_EXISTS", "KW_FALSE", "KW_FIRST", "KW_FLOAT", "KW_FOREIGN", "KW_FROM", 
        "KW_FULL", "KW_GROUP", "KW_HAVING", "KW_IF", "KW_IN", "KW_INNER", 
        "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTO", 
        "KW_IS", "KW_JOIN", "KW_KEY", "KW_LAST", "KW_LEFT", "KW_LIKE", "KW_LIMIT", 
        "KW_NOT", "KW_NULL", "KW_NULLIF", "KW_NULLS", "KW_NUMERIC", "KW_OFFSET", 
        "KW_ON", "KW_OR", "KW_ORDER", "KW_OUTER", "KW_PRIMARY", "KW_RECURSIVE", 
        "KW_REFERENCES", "KW_RENAME", "KW_RIGHT", "KW_SELECT", "KW_SET", 
        "KW_SMALLINT", "KW_TABLE", "KW_TEXT", "KW_THEN", "KW_TIME", "KW_TIMESTAMP", 
        "KW_TINYINT", "KW_TO", "KW_TRUE", "KW_UNION", "KW_UNIQUE", "KW_UPDATE", 
        "KW_VARCHAR", "KW_VARBINARY", "KW_WHEN", "KW_WHERE", "KW_WITH", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "QUESTION_MARK", "SEMICOLON", "STRING", 
        "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", 
        "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "LINE_COMMENT", "BRACKETED_COMMENT", "WHITE_SPACE", "UNRECOGNIZED", 
        "DELIMITER"
    ];
    public static readonly ruleNames = [
        "program", "statements", "singleStatement", "statement", "queryStatement", 
        "withClause", "namedQuery", "cteColumnList", "queryNoWith", "queryTerm", 
        "queryPrimary", "querySpecification", "setQuantifier", "selectItem", 
        "fromClause", "relation", "joinType", "aliasedRelation", "relationPrimary", 
        "whereClause", "groupByClause", "havingClause", "orderByClause", 
        "sortItem", "limitClause", "insertStatement", "columnList", "updateStatement", 
        "updateAssignment", "deleteStatement", "createTableStatement", "tableElement", 
        "columnDefinition", "tableConstraint", "alterTableStatement", "dropTableStatement", 
        "expression", "booleanExpression", "predicatedExpression", "predicate", 
        "comparisonOperator", "valueExpression", "primaryExpression", "whenClause", 
        "subqueryExpression", "dataType", "properties", "property", "literal", 
        "identifier", "qualifiedName", "columnRef", "tableName", "tableNameCreate", 
        "nonReserved",
    ];

    public get grammarFileName(): string { return "GenericSql.g4"; }
    public get literalNames(): (string | null)[] { return GenericSqlParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return GenericSqlParser.symbolicNames; }
    public get ruleNames(): string[] { return GenericSqlParser.ruleNames; }
    public get serializedATN(): number[] { return GenericSqlParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, GenericSqlParser._ATN, GenericSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, GenericSqlParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 276824196) !== 0) || _la === 32 || _la === 49 || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 270337) !== 0)) {
                {
                {
                this.state = 110;
                this.statements();
                }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 116;
            this.match(GenericSqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statements(): StatementsContext {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 2, GenericSqlParser.RULE_statements);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.singleStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleStatement(): SingleStatementContext {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, GenericSqlParser.RULE_singleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.statement();
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 108) {
                {
                this.state = 121;
                this.match(GenericSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 6, GenericSqlParser.RULE_statement);
        try {
            this.state = 131;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.T__1:
            case GenericSqlParser.KW_SELECT:
            case GenericSqlParser.KW_WITH:
                localContext = new StatementDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 124;
                this.queryStatement();
                }
                break;
            case GenericSqlParser.KW_INSERT:
                localContext = new InsertContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 125;
                this.insertStatement();
                }
                break;
            case GenericSqlParser.KW_UPDATE:
                localContext = new UpdateContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 126;
                this.updateStatement();
                }
                break;
            case GenericSqlParser.KW_DELETE:
                localContext = new DeleteContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 127;
                this.deleteStatement();
                }
                break;
            case GenericSqlParser.KW_CREATE:
                localContext = new CreateTableContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 128;
                this.createTableStatement();
                }
                break;
            case GenericSqlParser.KW_ALTER:
                localContext = new AlterTableContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 129;
                this.alterTableStatement();
                }
                break;
            case GenericSqlParser.KW_DROP:
                localContext = new DropTableContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 130;
                this.dropTableStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryStatement(): QueryStatementContext {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, GenericSqlParser.RULE_queryStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 133;
                this.withClause();
                }
            }

            this.state = 136;
            this.queryNoWith();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withClause(): WithClauseContext {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 10, GenericSqlParser.RULE_withClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
            this.match(GenericSqlParser.KW_WITH);
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 139;
                this.match(GenericSqlParser.KW_RECURSIVE);
                }
            }

            this.state = 142;
            this.namedQuery();
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 143;
                this.match(GenericSqlParser.T__0);
                this.state = 144;
                this.namedQuery();
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedQuery(): NamedQueryContext {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 12, GenericSqlParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            localContext._name = this.identifier();
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 151;
                this.cteColumnList();
                }
            }

            this.state = 154;
            this.match(GenericSqlParser.KW_AS);
            this.state = 155;
            this.match(GenericSqlParser.T__1);
            this.state = 156;
            this.queryStatement();
            this.state = 157;
            this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cteColumnList(): CteColumnListContext {
        let localContext = new CteColumnListContext(this.context, this.state);
        this.enterRule(localContext, 14, GenericSqlParser.RULE_cteColumnList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.match(GenericSqlParser.T__1);
            this.state = 160;
            this.identifier();
            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 161;
                this.match(GenericSqlParser.T__0);
                this.state = 162;
                this.identifier();
                }
                }
                this.state = 167;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 168;
            this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryNoWith(): QueryNoWithContext {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 16, GenericSqlParser.RULE_queryNoWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.queryTerm();
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 36 || _la === 52 || _la === 87) {
                {
                {
                this.state = 171;
                _la = this.tokenStream.LA(1);
                if(!(_la === 36 || _la === 52 || _la === 87)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 172;
                    this.match(GenericSqlParser.KW_ALL);
                    }
                }

                this.state = 175;
                this.queryTerm();
                }
                }
                this.state = 180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryTerm(): QueryTermContext {
        let localContext = new QueryTermContext(this.context, this.state);
        this.enterRule(localContext, 18, GenericSqlParser.RULE_queryTerm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.queryPrimary();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryPrimary(): QueryPrimaryContext {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 20, GenericSqlParser.RULE_queryPrimary);
        try {
            this.state = 188;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_SELECT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 183;
                this.querySpecification();
                }
                break;
            case GenericSqlParser.T__1:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 184;
                this.match(GenericSqlParser.T__1);
                this.state = 185;
                this.queryStatement();
                this.state = 186;
                this.match(GenericSqlParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public querySpecification(): QuerySpecificationContext {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 22, GenericSqlParser.RULE_querySpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            this.match(GenericSqlParser.KW_SELECT);
            this.state = 192;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 191;
                this.setQuantifier();
                }
                break;
            }
            this.state = 194;
            this.selectItem();
            this.state = 199;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 195;
                this.match(GenericSqlParser.T__0);
                this.state = 196;
                this.selectItem();
                }
                }
                this.state = 201;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 42) {
                {
                this.state = 202;
                this.fromClause();
                }
            }

            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 205;
                this.whereClause();
                }
            }

            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 208;
                this.groupByClause();
                }
            }

            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 211;
                this.havingClause();
                }
            }

            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 214;
                this.orderByClause();
                }
            }

            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 217;
                this.limitClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setQuantifier(): SetQuantifierContext {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 24, GenericSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 220;
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 30)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectItem(): SelectItemContext {
        let localContext = new SelectItemContext(this.context, this.state);
        this.enterRule(localContext, 26, GenericSqlParser.RULE_selectItem);
        let _la: number;
        try {
            this.state = 234;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 222;
                this.expression();
                this.state = 227;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 224;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 9) {
                        {
                        this.state = 223;
                        this.match(GenericSqlParser.KW_AS);
                        }
                    }

                    this.state = 226;
                    localContext._alias = this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 229;
                this.qualifiedName();
                this.state = 230;
                this.match(GenericSqlParser.T__3);
                this.state = 231;
                this.match(GenericSqlParser.ASTERISK);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 233;
                this.match(GenericSqlParser.ASTERISK);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 28, GenericSqlParser.RULE_fromClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.match(GenericSqlParser.KW_FROM);
            this.state = 237;
            this.relation(0);
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 238;
                this.match(GenericSqlParser.T__0);
                this.state = 239;
                this.relation(0);
                }
                }
                this.state = 244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public relation(): RelationContext;
    public relation(_p: number): RelationContext;
    public relation(_p?: number): RelationContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 30;
        this.enterRecursionRule(localContext, 30, GenericSqlParser.RULE_relation, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new SimpleRelationContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 246;
            this.aliasedRelation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 257;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new JoinRelationContext(new RelationContext(parentContext, parentState));
                    (localContext as JoinRelationContext)._left = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_relation);
                    this.state = 248;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 249;
                    this.joinType();
                    this.state = 250;
                    this.match(GenericSqlParser.KW_JOIN);
                    this.state = 251;
                    (localContext as JoinRelationContext)._right = this.relation(0);
                    this.state = 252;
                    this.match(GenericSqlParser.KW_ON);
                    this.state = 253;
                    (localContext as JoinRelationContext)._condition = this.expression();
                    }
                    }
                }
                this.state = 259;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public joinType(): JoinTypeContext {
        let localContext = new JoinTypeContext(this.context, this.state);
        this.enterRule(localContext, 32, GenericSqlParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 276;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_INNER:
            case GenericSqlParser.KW_JOIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 48) {
                    {
                    this.state = 260;
                    this.match(GenericSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case GenericSqlParser.KW_LEFT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 263;
                this.match(GenericSqlParser.KW_LEFT);
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 264;
                    this.match(GenericSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case GenericSqlParser.KW_RIGHT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 267;
                this.match(GenericSqlParser.KW_RIGHT);
                this.state = 269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 268;
                    this.match(GenericSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case GenericSqlParser.KW_FULL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 271;
                this.match(GenericSqlParser.KW_FULL);
                this.state = 273;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70) {
                    {
                    this.state = 272;
                    this.match(GenericSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case GenericSqlParser.KW_CROSS:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 275;
                this.match(GenericSqlParser.KW_CROSS);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasedRelation(): AliasedRelationContext {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 34, GenericSqlParser.RULE_aliasedRelation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.relationPrimary();
            this.state = 283;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 279;
                    this.match(GenericSqlParser.KW_AS);
                    }
                }

                this.state = 282;
                localContext._alias = this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relationPrimary(): RelationPrimaryContext {
        let localContext = new RelationPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 36, GenericSqlParser.RULE_relationPrimary);
        try {
            this.state = 290;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_ADD:
            case GenericSqlParser.KW_ALL:
            case GenericSqlParser.KW_ASC:
            case GenericSqlParser.KW_BIGINT:
            case GenericSqlParser.KW_BINARY:
            case GenericSqlParser.KW_BOOLEAN:
            case GenericSqlParser.KW_BY:
            case GenericSqlParser.KW_CHAR:
            case GenericSqlParser.KW_COALESCE:
            case GenericSqlParser.KW_COLUMN:
            case GenericSqlParser.KW_CROSS:
            case GenericSqlParser.KW_DATE:
            case GenericSqlParser.KW_DECIMAL:
            case GenericSqlParser.KW_DEFAULT:
            case GenericSqlParser.KW_DESC:
            case GenericSqlParser.KW_DOUBLE:
            case GenericSqlParser.KW_FALSE:
            case GenericSqlParser.KW_FIRST:
            case GenericSqlParser.KW_FLOAT:
            case GenericSqlParser.KW_FULL:
            case GenericSqlParser.KW_IF:
            case GenericSqlParser.KW_INT:
            case GenericSqlParser.KW_INTEGER:
            case GenericSqlParser.KW_KEY:
            case GenericSqlParser.KW_LAST:
            case GenericSqlParser.KW_LEFT:
            case GenericSqlParser.KW_LIMIT:
            case GenericSqlParser.KW_NULLIF:
            case GenericSqlParser.KW_NULLS:
            case GenericSqlParser.KW_NUMERIC:
            case GenericSqlParser.KW_OFFSET:
            case GenericSqlParser.KW_OUTER:
            case GenericSqlParser.KW_RIGHT:
            case GenericSqlParser.KW_SMALLINT:
            case GenericSqlParser.KW_TEXT:
            case GenericSqlParser.KW_TIME:
            case GenericSqlParser.KW_TIMESTAMP:
            case GenericSqlParser.KW_TINYINT:
            case GenericSqlParser.KW_TO:
            case GenericSqlParser.KW_TRUE:
            case GenericSqlParser.KW_UNIQUE:
            case GenericSqlParser.KW_VARCHAR:
            case GenericSqlParser.KW_VARBINARY:
            case GenericSqlParser.IDENTIFIER:
            case GenericSqlParser.DIGIT_IDENTIFIER:
            case GenericSqlParser.QUOTED_IDENTIFIER:
            case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                localContext = new TableNameRelationContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 285;
                this.tableName();
                }
                break;
            case GenericSqlParser.T__1:
                localContext = new SubqueryRelationContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 286;
                this.match(GenericSqlParser.T__1);
                this.state = 287;
                this.queryStatement();
                this.state = 288;
                this.match(GenericSqlParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 38, GenericSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(GenericSqlParser.KW_WHERE);
            this.state = 293;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 40, GenericSqlParser.RULE_groupByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.match(GenericSqlParser.KW_GROUP);
            this.state = 296;
            this.match(GenericSqlParser.KW_BY);
            this.state = 298;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 297;
                this.setQuantifier();
                }
                break;
            }
            this.state = 300;
            this.expression();
            this.state = 305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 301;
                this.match(GenericSqlParser.T__0);
                this.state = 302;
                this.expression();
                }
                }
                this.state = 307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 42, GenericSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 308;
            this.match(GenericSqlParser.KW_HAVING);
            this.state = 309;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 44, GenericSqlParser.RULE_orderByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.match(GenericSqlParser.KW_ORDER);
            this.state = 312;
            this.match(GenericSqlParser.KW_BY);
            this.state = 313;
            this.sortItem();
            this.state = 318;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 314;
                this.match(GenericSqlParser.T__0);
                this.state = 315;
                this.sortItem();
                }
                }
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortItem(): SortItemContext {
        let localContext = new SortItemContext(this.context, this.state);
        this.enterRule(localContext, 46, GenericSqlParser.RULE_sortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.expression();
            this.state = 323;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 29) {
                {
                this.state = 322;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 10 || _la === 29)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 327;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 325;
                this.match(GenericSqlParser.KW_NULLS);
                this.state = 326;
                localContext._nullOrdering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 39 || _la === 57)) {
                    localContext._nullOrdering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 48, GenericSqlParser.RULE_limitClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.match(GenericSqlParser.KW_LIMIT);
            this.state = 330;
            localContext._limit = this.expression();
            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 331;
                this.match(GenericSqlParser.KW_OFFSET);
                this.state = 332;
                localContext._offset = this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertStatement(): InsertStatementContext {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 50, GenericSqlParser.RULE_insertStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 335;
            this.match(GenericSqlParser.KW_INSERT);
            this.state = 336;
            this.match(GenericSqlParser.KW_INTO);
            this.state = 337;
            this.tableName();
            this.state = 339;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                {
                this.state = 338;
                this.columnList();
                }
                break;
            }
            this.state = 341;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnList(): ColumnListContext {
        let localContext = new ColumnListContext(this.context, this.state);
        this.enterRule(localContext, 52, GenericSqlParser.RULE_columnList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 343;
            this.match(GenericSqlParser.T__1);
            this.state = 344;
            this.columnRef();
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 345;
                this.match(GenericSqlParser.T__0);
                this.state = 346;
                this.columnRef();
                }
                }
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 352;
            this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateStatement(): UpdateStatementContext {
        let localContext = new UpdateStatementContext(this.context, this.state);
        this.enterRule(localContext, 54, GenericSqlParser.RULE_updateStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 354;
            this.match(GenericSqlParser.KW_UPDATE);
            this.state = 355;
            this.tableName();
            this.state = 356;
            this.match(GenericSqlParser.KW_SET);
            this.state = 357;
            this.updateAssignment();
            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 358;
                this.match(GenericSqlParser.T__0);
                this.state = 359;
                this.updateAssignment();
                }
                }
                this.state = 364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 366;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 365;
                this.whereClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateAssignment(): UpdateAssignmentContext {
        let localContext = new UpdateAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 56, GenericSqlParser.RULE_updateAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.columnRef();
            this.state = 369;
            this.match(GenericSqlParser.EQ);
            this.state = 370;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteStatement(): DeleteStatementContext {
        let localContext = new DeleteStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, GenericSqlParser.RULE_deleteStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 372;
            this.match(GenericSqlParser.KW_DELETE);
            this.state = 373;
            this.match(GenericSqlParser.KW_FROM);
            this.state = 374;
            this.tableName();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 375;
                this.whereClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTableStatement(): CreateTableStatementContext {
        let localContext = new CreateTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 60, GenericSqlParser.RULE_createTableStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 378;
            this.match(GenericSqlParser.KW_CREATE);
            this.state = 379;
            this.match(GenericSqlParser.KW_TABLE);
            this.state = 383;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 380;
                this.match(GenericSqlParser.KW_IF);
                this.state = 381;
                this.match(GenericSqlParser.KW_NOT);
                this.state = 382;
                this.match(GenericSqlParser.KW_EXISTS);
                }
                break;
            }
            this.state = 385;
            this.tableNameCreate();
            this.state = 386;
            this.match(GenericSqlParser.T__1);
            this.state = 387;
            this.tableElement();
            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 388;
                this.match(GenericSqlParser.T__0);
                this.state = 389;
                this.tableElement();
                }
                }
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 395;
            this.match(GenericSqlParser.T__2);
            this.state = 398;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                {
                this.state = 396;
                this.match(GenericSqlParser.KW_WITH);
                this.state = 397;
                this.properties();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableElement(): TableElementContext {
        let localContext = new TableElementContext(this.context, this.state);
        this.enterRule(localContext, 62, GenericSqlParser.RULE_tableElement);
        try {
            this.state = 402;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 400;
                this.columnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 401;
                this.tableConstraint();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnDefinition(): ColumnDefinitionContext {
        let localContext = new ColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 64, GenericSqlParser.RULE_columnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.columnRef();
            this.state = 405;
            this.dataType();
            this.state = 408;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 61) {
                {
                this.state = 406;
                this.match(GenericSqlParser.KW_NOT);
                this.state = 407;
                this.match(GenericSqlParser.KW_NULL);
                }
            }

            this.state = 412;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 410;
                this.match(GenericSqlParser.KW_DEFAULT);
                this.state = 411;
                this.expression();
                }
            }

            this.state = 416;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 414;
                this.match(GenericSqlParser.KW_PRIMARY);
                this.state = 415;
                this.match(GenericSqlParser.KW_KEY);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableConstraint(): TableConstraintContext {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 66, GenericSqlParser.RULE_tableConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 420;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 418;
                this.match(GenericSqlParser.KW_CONSTRAINT);
                this.state = 419;
                this.identifier();
                }
            }

            this.state = 477;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_PRIMARY:
                {
                this.state = 422;
                this.match(GenericSqlParser.KW_PRIMARY);
                this.state = 423;
                this.match(GenericSqlParser.KW_KEY);
                this.state = 424;
                this.match(GenericSqlParser.T__1);
                this.state = 425;
                this.columnRef();
                this.state = 430;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 426;
                    this.match(GenericSqlParser.T__0);
                    this.state = 427;
                    this.columnRef();
                    }
                    }
                    this.state = 432;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 433;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case GenericSqlParser.KW_UNIQUE:
                {
                this.state = 435;
                this.match(GenericSqlParser.KW_UNIQUE);
                this.state = 436;
                this.match(GenericSqlParser.T__1);
                this.state = 437;
                this.columnRef();
                this.state = 442;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 438;
                    this.match(GenericSqlParser.T__0);
                    this.state = 439;
                    this.columnRef();
                    }
                    }
                    this.state = 444;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 445;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case GenericSqlParser.KW_CHECK:
                {
                this.state = 447;
                this.match(GenericSqlParser.KW_CHECK);
                this.state = 448;
                this.match(GenericSqlParser.T__1);
                this.state = 449;
                this.expression();
                this.state = 450;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case GenericSqlParser.KW_FOREIGN:
                {
                this.state = 452;
                this.match(GenericSqlParser.KW_FOREIGN);
                this.state = 453;
                this.match(GenericSqlParser.KW_KEY);
                this.state = 454;
                this.match(GenericSqlParser.T__1);
                this.state = 455;
                this.columnRef();
                this.state = 460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 456;
                    this.match(GenericSqlParser.T__0);
                    this.state = 457;
                    this.columnRef();
                    }
                    }
                    this.state = 462;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 463;
                this.match(GenericSqlParser.T__2);
                this.state = 464;
                this.match(GenericSqlParser.KW_REFERENCES);
                this.state = 465;
                this.tableName();
                this.state = 466;
                this.match(GenericSqlParser.T__1);
                this.state = 467;
                this.columnRef();
                this.state = 472;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 468;
                    this.match(GenericSqlParser.T__0);
                    this.state = 469;
                    this.columnRef();
                    }
                    }
                    this.state = 474;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 475;
                this.match(GenericSqlParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTableStatement(): AlterTableStatementContext {
        let localContext = new AlterTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 68, GenericSqlParser.RULE_alterTableStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
            this.match(GenericSqlParser.KW_ALTER);
            this.state = 480;
            this.match(GenericSqlParser.KW_TABLE);
            this.state = 483;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                {
                this.state = 481;
                this.match(GenericSqlParser.KW_IF);
                this.state = 482;
                this.match(GenericSqlParser.KW_EXISTS);
                }
                break;
            }
            this.state = 485;
            this.tableName();
            this.state = 517;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                {
                this.state = 486;
                this.match(GenericSqlParser.KW_ADD);
                this.state = 487;
                this.match(GenericSqlParser.KW_COLUMN);
                this.state = 491;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
                case 1:
                    {
                    this.state = 488;
                    this.match(GenericSqlParser.KW_IF);
                    this.state = 489;
                    this.match(GenericSqlParser.KW_NOT);
                    this.state = 490;
                    this.match(GenericSqlParser.KW_EXISTS);
                    }
                    break;
                }
                this.state = 493;
                this.columnDefinition();
                }
                break;
            case 2:
                {
                this.state = 494;
                this.match(GenericSqlParser.KW_DROP);
                this.state = 495;
                this.match(GenericSqlParser.KW_COLUMN);
                this.state = 498;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
                case 1:
                    {
                    this.state = 496;
                    this.match(GenericSqlParser.KW_IF);
                    this.state = 497;
                    this.match(GenericSqlParser.KW_EXISTS);
                    }
                    break;
                }
                this.state = 500;
                this.columnRef();
                }
                break;
            case 3:
                {
                this.state = 501;
                this.match(GenericSqlParser.KW_RENAME);
                this.state = 502;
                this.match(GenericSqlParser.KW_TO);
                this.state = 503;
                this.tableNameCreate();
                }
                break;
            case 4:
                {
                this.state = 504;
                this.match(GenericSqlParser.KW_ALTER);
                this.state = 505;
                this.match(GenericSqlParser.KW_COLUMN);
                this.state = 506;
                this.columnRef();
                this.state = 507;
                this.match(GenericSqlParser.KW_SET);
                this.state = 508;
                this.match(GenericSqlParser.KW_DEFAULT);
                this.state = 509;
                this.expression();
                }
                break;
            case 5:
                {
                this.state = 511;
                this.match(GenericSqlParser.KW_ALTER);
                this.state = 512;
                this.match(GenericSqlParser.KW_COLUMN);
                this.state = 513;
                this.columnRef();
                this.state = 514;
                this.match(GenericSqlParser.KW_DROP);
                this.state = 515;
                this.match(GenericSqlParser.KW_DEFAULT);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropTableStatement(): DropTableStatementContext {
        let localContext = new DropTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 70, GenericSqlParser.RULE_dropTableStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 519;
            this.match(GenericSqlParser.KW_DROP);
            this.state = 520;
            this.match(GenericSqlParser.KW_TABLE);
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 521;
                this.match(GenericSqlParser.KW_IF);
                this.state = 522;
                this.match(GenericSqlParser.KW_EXISTS);
                }
                break;
            }
            this.state = 525;
            this.tableName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 72, GenericSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 527;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 74;
        this.enterRecursionRule(localContext, 74, GenericSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 533;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.T__1:
            case GenericSqlParser.KW_ADD:
            case GenericSqlParser.KW_ALL:
            case GenericSqlParser.KW_ASC:
            case GenericSqlParser.KW_BIGINT:
            case GenericSqlParser.KW_BINARY:
            case GenericSqlParser.KW_BOOLEAN:
            case GenericSqlParser.KW_BY:
            case GenericSqlParser.KW_CASE:
            case GenericSqlParser.KW_CAST:
            case GenericSqlParser.KW_CHAR:
            case GenericSqlParser.KW_COALESCE:
            case GenericSqlParser.KW_COLUMN:
            case GenericSqlParser.KW_CROSS:
            case GenericSqlParser.KW_DATE:
            case GenericSqlParser.KW_DECIMAL:
            case GenericSqlParser.KW_DEFAULT:
            case GenericSqlParser.KW_DESC:
            case GenericSqlParser.KW_DOUBLE:
            case GenericSqlParser.KW_EXISTS:
            case GenericSqlParser.KW_FALSE:
            case GenericSqlParser.KW_FIRST:
            case GenericSqlParser.KW_FLOAT:
            case GenericSqlParser.KW_FULL:
            case GenericSqlParser.KW_IF:
            case GenericSqlParser.KW_INT:
            case GenericSqlParser.KW_INTEGER:
            case GenericSqlParser.KW_KEY:
            case GenericSqlParser.KW_LAST:
            case GenericSqlParser.KW_LEFT:
            case GenericSqlParser.KW_LIMIT:
            case GenericSqlParser.KW_NULL:
            case GenericSqlParser.KW_NULLIF:
            case GenericSqlParser.KW_NULLS:
            case GenericSqlParser.KW_NUMERIC:
            case GenericSqlParser.KW_OFFSET:
            case GenericSqlParser.KW_OUTER:
            case GenericSqlParser.KW_RIGHT:
            case GenericSqlParser.KW_SMALLINT:
            case GenericSqlParser.KW_TEXT:
            case GenericSqlParser.KW_TIME:
            case GenericSqlParser.KW_TIMESTAMP:
            case GenericSqlParser.KW_TINYINT:
            case GenericSqlParser.KW_TO:
            case GenericSqlParser.KW_TRUE:
            case GenericSqlParser.KW_UNIQUE:
            case GenericSqlParser.KW_VARCHAR:
            case GenericSqlParser.KW_VARBINARY:
            case GenericSqlParser.PLUS:
            case GenericSqlParser.MINUS:
            case GenericSqlParser.STRING:
            case GenericSqlParser.BINARY_LITERAL:
            case GenericSqlParser.INTEGER_VALUE:
            case GenericSqlParser.DECIMAL_VALUE:
            case GenericSqlParser.DOUBLE_VALUE:
            case GenericSqlParser.IDENTIFIER:
            case GenericSqlParser.DIGIT_IDENTIFIER:
            case GenericSqlParser.QUOTED_IDENTIFIER:
            case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 530;
                this.predicatedExpression();
                }
                break;
            case GenericSqlParser.KW_NOT:
                {
                localContext = new NotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 531;
                this.match(GenericSqlParser.KW_NOT);
                this.state = 532;
                this.booleanExpression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 543;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 541;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
                    case 1:
                        {
                        localContext = new AndExpressionContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as AndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_booleanExpression);
                        this.state = 535;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 536;
                        this.match(GenericSqlParser.KW_AND);
                        this.state = 537;
                        (localContext as AndExpressionContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new OrExpressionContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as OrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_booleanExpression);
                        this.state = 538;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 539;
                        this.match(GenericSqlParser.KW_OR);
                        this.state = 540;
                        (localContext as OrExpressionContext)._right = this.booleanExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 545;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public predicatedExpression(): PredicatedExpressionContext {
        let localContext = new PredicatedExpressionContext(this.context, this.state);
        this.enterRule(localContext, 76, GenericSqlParser.RULE_predicatedExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 546;
            this.valueExpression(0);
            this.state = 548;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                {
                this.state = 547;
                this.predicate();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicate(): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 78, GenericSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                localContext = new ComparisonPredicateContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 550;
                this.comparisonOperator();
                this.state = 551;
                (localContext as ComparisonPredicateContext)._right = this.valueExpression(0);
                }
                break;
            case 2:
                localContext = new InPredicateContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 554;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 553;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 556;
                this.match(GenericSqlParser.KW_IN);
                this.state = 557;
                this.match(GenericSqlParser.T__1);
                this.state = 558;
                this.expression();
                this.state = 563;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 559;
                    this.match(GenericSqlParser.T__0);
                    this.state = 560;
                    this.expression();
                    }
                    }
                    this.state = 565;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 566;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 3:
                localContext = new InSubqueryPredicateContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 569;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 568;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 571;
                this.match(GenericSqlParser.KW_IN);
                this.state = 572;
                this.match(GenericSqlParser.T__1);
                this.state = 573;
                this.queryStatement();
                this.state = 574;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 4:
                localContext = new BetweenPredicateContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 577;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 576;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 579;
                this.match(GenericSqlParser.KW_BETWEEN);
                this.state = 580;
                (localContext as BetweenPredicateContext)._lower = this.valueExpression(0);
                this.state = 581;
                this.match(GenericSqlParser.KW_AND);
                this.state = 582;
                (localContext as BetweenPredicateContext)._upper = this.valueExpression(0);
                }
                break;
            case 5:
                localContext = new LikePredicateContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 585;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 584;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 587;
                this.match(GenericSqlParser.KW_LIKE);
                this.state = 588;
                (localContext as LikePredicateContext)._pattern = this.valueExpression(0);
                this.state = 591;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
                case 1:
                    {
                    this.state = 589;
                    this.match(GenericSqlParser.KW_ESCAPE);
                    this.state = 590;
                    (localContext as LikePredicateContext)._escape = this.valueExpression(0);
                    }
                    break;
                }
                }
                break;
            case 6:
                localContext = new NullPredicateContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 593;
                this.match(GenericSqlParser.KW_IS);
                this.state = 595;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 594;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 597;
                this.match(GenericSqlParser.KW_NULL);
                }
                break;
            case 7:
                localContext = new DistinctFromPredicateContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 598;
                this.match(GenericSqlParser.KW_IS);
                this.state = 600;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                    this.state = 599;
                    this.match(GenericSqlParser.KW_NOT);
                    }
                }

                this.state = 602;
                this.match(GenericSqlParser.KW_DISTINCT);
                this.state = 603;
                this.match(GenericSqlParser.KW_FROM);
                this.state = 604;
                (localContext as DistinctFromPredicateContext)._right = this.valueExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 80, GenericSqlParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 607;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, GenericSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 613;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.T__1:
            case GenericSqlParser.KW_ADD:
            case GenericSqlParser.KW_ALL:
            case GenericSqlParser.KW_ASC:
            case GenericSqlParser.KW_BIGINT:
            case GenericSqlParser.KW_BINARY:
            case GenericSqlParser.KW_BOOLEAN:
            case GenericSqlParser.KW_BY:
            case GenericSqlParser.KW_CASE:
            case GenericSqlParser.KW_CAST:
            case GenericSqlParser.KW_CHAR:
            case GenericSqlParser.KW_COALESCE:
            case GenericSqlParser.KW_COLUMN:
            case GenericSqlParser.KW_CROSS:
            case GenericSqlParser.KW_DATE:
            case GenericSqlParser.KW_DECIMAL:
            case GenericSqlParser.KW_DEFAULT:
            case GenericSqlParser.KW_DESC:
            case GenericSqlParser.KW_DOUBLE:
            case GenericSqlParser.KW_EXISTS:
            case GenericSqlParser.KW_FALSE:
            case GenericSqlParser.KW_FIRST:
            case GenericSqlParser.KW_FLOAT:
            case GenericSqlParser.KW_FULL:
            case GenericSqlParser.KW_IF:
            case GenericSqlParser.KW_INT:
            case GenericSqlParser.KW_INTEGER:
            case GenericSqlParser.KW_KEY:
            case GenericSqlParser.KW_LAST:
            case GenericSqlParser.KW_LEFT:
            case GenericSqlParser.KW_LIMIT:
            case GenericSqlParser.KW_NULL:
            case GenericSqlParser.KW_NULLIF:
            case GenericSqlParser.KW_NULLS:
            case GenericSqlParser.KW_NUMERIC:
            case GenericSqlParser.KW_OFFSET:
            case GenericSqlParser.KW_OUTER:
            case GenericSqlParser.KW_RIGHT:
            case GenericSqlParser.KW_SMALLINT:
            case GenericSqlParser.KW_TEXT:
            case GenericSqlParser.KW_TIME:
            case GenericSqlParser.KW_TIMESTAMP:
            case GenericSqlParser.KW_TINYINT:
            case GenericSqlParser.KW_TO:
            case GenericSqlParser.KW_TRUE:
            case GenericSqlParser.KW_UNIQUE:
            case GenericSqlParser.KW_VARCHAR:
            case GenericSqlParser.KW_VARBINARY:
            case GenericSqlParser.STRING:
            case GenericSqlParser.BINARY_LITERAL:
            case GenericSqlParser.INTEGER_VALUE:
            case GenericSqlParser.DECIMAL_VALUE:
            case GenericSqlParser.DOUBLE_VALUE:
            case GenericSqlParser.IDENTIFIER:
            case GenericSqlParser.DIGIT_IDENTIFIER:
            case GenericSqlParser.QUOTED_IDENTIFIER:
            case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 610;
                this.primaryExpression();
                }
                break;
            case GenericSqlParser.PLUS:
            case GenericSqlParser.MINUS:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 611;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 101 || _la === 102)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 612;
                this.valueExpression(4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 626;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 76, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 624;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                        this.state = 615;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 616;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 617;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                        this.state = 618;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 619;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 101 || _la === 102)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 620;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ConcatenationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                        this.state = 621;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 622;
                        this.match(GenericSqlParser.CONCAT);
                        this.state = 623;
                        (localContext as ConcatenationContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 628;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 76, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public primaryExpression(): PrimaryExpressionContext {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 84, GenericSqlParser.RULE_primaryExpression);
        let _la: number;
        try {
            this.state = 709;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                localContext = new LiteralExpressionContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 629;
                this.literal();
                }
                break;
            case 2:
                localContext = new FunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 630;
                this.qualifiedName();
                this.state = 631;
                this.match(GenericSqlParser.T__1);
                this.state = 643;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4013421668) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1069048399) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 2151019809) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 65409) !== 0)) {
                    {
                    this.state = 633;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
                    case 1:
                        {
                        this.state = 632;
                        this.setQuantifier();
                        }
                        break;
                    }
                    this.state = 635;
                    this.expression();
                    this.state = 640;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 1) {
                        {
                        {
                        this.state = 636;
                        this.match(GenericSqlParser.T__0);
                        this.state = 637;
                        this.expression();
                        }
                        }
                        this.state = 642;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 645;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 3:
                localContext = new SearchedCaseExpressionContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 647;
                this.match(GenericSqlParser.KW_CASE);
                this.state = 649;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 648;
                    this.whenClause();
                    }
                    }
                    this.state = 651;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 92);
                this.state = 655;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                    this.state = 653;
                    this.match(GenericSqlParser.KW_ELSE);
                    this.state = 654;
                    this.expression();
                    }
                }

                this.state = 657;
                this.match(GenericSqlParser.KW_END);
                }
                break;
            case 4:
                localContext = new SimpleCaseExpressionContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 659;
                this.match(GenericSqlParser.KW_CASE);
                this.state = 660;
                this.expression();
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 661;
                    this.whenClause();
                    }
                    }
                    this.state = 664;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 92);
                this.state = 668;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                    this.state = 666;
                    this.match(GenericSqlParser.KW_ELSE);
                    this.state = 667;
                    this.expression();
                    }
                }

                this.state = 670;
                this.match(GenericSqlParser.KW_END);
                }
                break;
            case 5:
                localContext = new CastExpressionContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 672;
                this.match(GenericSqlParser.KW_CAST);
                this.state = 673;
                this.match(GenericSqlParser.T__1);
                this.state = 674;
                this.expression();
                this.state = 675;
                this.match(GenericSqlParser.KW_AS);
                this.state = 676;
                this.dataType();
                this.state = 677;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 6:
                localContext = new CoalesceExpressionContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 679;
                this.match(GenericSqlParser.KW_COALESCE);
                this.state = 680;
                this.match(GenericSqlParser.T__1);
                this.state = 681;
                this.expression();
                this.state = 686;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                    {
                    this.state = 682;
                    this.match(GenericSqlParser.T__0);
                    this.state = 683;
                    this.expression();
                    }
                    }
                    this.state = 688;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 689;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 7:
                localContext = new NullIfExpressionContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 691;
                this.match(GenericSqlParser.KW_NULLIF);
                this.state = 692;
                this.match(GenericSqlParser.T__1);
                this.state = 693;
                this.valueExpression(0);
                this.state = 694;
                this.match(GenericSqlParser.T__0);
                this.state = 695;
                this.valueExpression(0);
                this.state = 696;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 8:
                localContext = new ParenthesizedExpressionContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 698;
                this.match(GenericSqlParser.T__1);
                this.state = 699;
                this.expression();
                this.state = 700;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 9:
                localContext = new ExistsExpressionContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 702;
                this.match(GenericSqlParser.KW_EXISTS);
                this.state = 703;
                this.match(GenericSqlParser.T__1);
                this.state = 704;
                this.queryStatement();
                this.state = 705;
                this.match(GenericSqlParser.T__2);
                }
                break;
            case 10:
                localContext = new SubqueryExpressionDefaultContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 707;
                this.subqueryExpression();
                }
                break;
            case 11:
                localContext = new ColumnReferenceContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 708;
                this.qualifiedName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenClause(): WhenClauseContext {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 86, GenericSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.match(GenericSqlParser.KW_WHEN);
            this.state = 712;
            localContext._condition = this.expression();
            this.state = 713;
            this.match(GenericSqlParser.KW_THEN);
            this.state = 714;
            localContext._result = this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subqueryExpression(): SubqueryExpressionContext {
        let localContext = new SubqueryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 88, GenericSqlParser.RULE_subqueryExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 716;
            this.match(GenericSqlParser.T__1);
            this.state = 717;
            this.queryStatement();
            this.state = 718;
            this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataType(): DataTypeContext {
        let localContext = new DataTypeContext(this.context, this.state);
        this.enterRule(localContext, 90, GenericSqlParser.RULE_dataType);
        let _la: number;
        try {
            this.state = 766;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_BOOLEAN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 720;
                this.match(GenericSqlParser.KW_BOOLEAN);
                }
                break;
            case GenericSqlParser.KW_TINYINT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 721;
                this.match(GenericSqlParser.KW_TINYINT);
                }
                break;
            case GenericSqlParser.KW_SMALLINT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 722;
                this.match(GenericSqlParser.KW_SMALLINT);
                }
                break;
            case GenericSqlParser.KW_INT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 723;
                this.match(GenericSqlParser.KW_INT);
                }
                break;
            case GenericSqlParser.KW_INTEGER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 724;
                this.match(GenericSqlParser.KW_INTEGER);
                }
                break;
            case GenericSqlParser.KW_BIGINT:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 725;
                this.match(GenericSqlParser.KW_BIGINT);
                }
                break;
            case GenericSqlParser.KW_FLOAT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 726;
                this.match(GenericSqlParser.KW_FLOAT);
                }
                break;
            case GenericSqlParser.KW_DOUBLE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 727;
                this.match(GenericSqlParser.KW_DOUBLE);
                }
                break;
            case GenericSqlParser.KW_DECIMAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 728;
                this.match(GenericSqlParser.KW_DECIMAL);
                this.state = 736;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
                case 1:
                    {
                    this.state = 729;
                    this.match(GenericSqlParser.T__1);
                    this.state = 730;
                    localContext._precision = this.match(GenericSqlParser.INTEGER_VALUE);
                    this.state = 733;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 1) {
                        {
                        this.state = 731;
                        this.match(GenericSqlParser.T__0);
                        this.state = 732;
                        localContext._scale = this.match(GenericSqlParser.INTEGER_VALUE);
                        }
                    }

                    this.state = 735;
                    this.match(GenericSqlParser.T__2);
                    }
                    break;
                }
                }
                break;
            case GenericSqlParser.KW_NUMERIC:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 738;
                this.match(GenericSqlParser.KW_NUMERIC);
                this.state = 746;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
                case 1:
                    {
                    this.state = 739;
                    this.match(GenericSqlParser.T__1);
                    this.state = 740;
                    localContext._precision = this.match(GenericSqlParser.INTEGER_VALUE);
                    this.state = 743;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 1) {
                        {
                        this.state = 741;
                        this.match(GenericSqlParser.T__0);
                        this.state = 742;
                        localContext._scale = this.match(GenericSqlParser.INTEGER_VALUE);
                        }
                    }

                    this.state = 745;
                    this.match(GenericSqlParser.T__2);
                    }
                    break;
                }
                }
                break;
            case GenericSqlParser.KW_VARCHAR:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 748;
                this.match(GenericSqlParser.KW_VARCHAR);
                this.state = 752;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context) ) {
                case 1:
                    {
                    this.state = 749;
                    this.match(GenericSqlParser.T__1);
                    this.state = 750;
                    localContext._maxLength = this.match(GenericSqlParser.INTEGER_VALUE);
                    this.state = 751;
                    this.match(GenericSqlParser.T__2);
                    }
                    break;
                }
                }
                break;
            case GenericSqlParser.KW_CHAR:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 754;
                this.match(GenericSqlParser.KW_CHAR);
                this.state = 758;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context) ) {
                case 1:
                    {
                    this.state = 755;
                    this.match(GenericSqlParser.T__1);
                    this.state = 756;
                    localContext._length = this.match(GenericSqlParser.INTEGER_VALUE);
                    this.state = 757;
                    this.match(GenericSqlParser.T__2);
                    }
                    break;
                }
                }
                break;
            case GenericSqlParser.KW_TEXT:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 760;
                this.match(GenericSqlParser.KW_TEXT);
                }
                break;
            case GenericSqlParser.KW_DATE:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 761;
                this.match(GenericSqlParser.KW_DATE);
                }
                break;
            case GenericSqlParser.KW_TIME:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 762;
                this.match(GenericSqlParser.KW_TIME);
                }
                break;
            case GenericSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 763;
                this.match(GenericSqlParser.KW_TIMESTAMP);
                }
                break;
            case GenericSqlParser.KW_BINARY:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 764;
                this.match(GenericSqlParser.KW_BINARY);
                }
                break;
            case GenericSqlParser.KW_VARBINARY:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 765;
                this.match(GenericSqlParser.KW_VARBINARY);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public properties(): PropertiesContext {
        let localContext = new PropertiesContext(this.context, this.state);
        this.enterRule(localContext, 92, GenericSqlParser.RULE_properties);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 768;
            this.match(GenericSqlParser.T__1);
            this.state = 769;
            this.property();
            this.state = 774;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 770;
                this.match(GenericSqlParser.T__0);
                this.state = 771;
                this.property();
                }
                }
                this.state = 776;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 777;
            this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 94, GenericSqlParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 779;
            this.identifier();
            this.state = 780;
            this.match(GenericSqlParser.EQ);
            this.state = 781;
            this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 96, GenericSqlParser.RULE_literal);
        try {
            this.state = 791;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.KW_NULL:
                localContext = new NullLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 783;
                this.match(GenericSqlParser.KW_NULL);
                }
                break;
            case GenericSqlParser.KW_TRUE:
                localContext = new BooleanLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 784;
                this.match(GenericSqlParser.KW_TRUE);
                }
                break;
            case GenericSqlParser.KW_FALSE:
                localContext = new BooleanLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 785;
                this.match(GenericSqlParser.KW_FALSE);
                }
                break;
            case GenericSqlParser.INTEGER_VALUE:
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 786;
                this.match(GenericSqlParser.INTEGER_VALUE);
                }
                break;
            case GenericSqlParser.DECIMAL_VALUE:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 787;
                this.match(GenericSqlParser.DECIMAL_VALUE);
                }
                break;
            case GenericSqlParser.DOUBLE_VALUE:
                localContext = new DoubleLiteralContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 788;
                this.match(GenericSqlParser.DOUBLE_VALUE);
                }
                break;
            case GenericSqlParser.STRING:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 789;
                this.match(GenericSqlParser.STRING);
                }
                break;
            case GenericSqlParser.BINARY_LITERAL:
                localContext = new BinaryLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 790;
                this.match(GenericSqlParser.BINARY_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 98, GenericSqlParser.RULE_identifier);
        try {
            this.state = 798;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GenericSqlParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 793;
                this.match(GenericSqlParser.IDENTIFIER);
                }
                break;
            case GenericSqlParser.DIGIT_IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 794;
                this.match(GenericSqlParser.DIGIT_IDENTIFIER);
                }
                break;
            case GenericSqlParser.QUOTED_IDENTIFIER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 795;
                this.match(GenericSqlParser.QUOTED_IDENTIFIER);
                }
                break;
            case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 796;
                this.match(GenericSqlParser.BACKQUOTED_IDENTIFIER);
                }
                break;
            case GenericSqlParser.KW_ADD:
            case GenericSqlParser.KW_ALL:
            case GenericSqlParser.KW_ASC:
            case GenericSqlParser.KW_BIGINT:
            case GenericSqlParser.KW_BINARY:
            case GenericSqlParser.KW_BOOLEAN:
            case GenericSqlParser.KW_BY:
            case GenericSqlParser.KW_CHAR:
            case GenericSqlParser.KW_COALESCE:
            case GenericSqlParser.KW_COLUMN:
            case GenericSqlParser.KW_CROSS:
            case GenericSqlParser.KW_DATE:
            case GenericSqlParser.KW_DECIMAL:
            case GenericSqlParser.KW_DEFAULT:
            case GenericSqlParser.KW_DESC:
            case GenericSqlParser.KW_DOUBLE:
            case GenericSqlParser.KW_FALSE:
            case GenericSqlParser.KW_FIRST:
            case GenericSqlParser.KW_FLOAT:
            case GenericSqlParser.KW_FULL:
            case GenericSqlParser.KW_IF:
            case GenericSqlParser.KW_INT:
            case GenericSqlParser.KW_INTEGER:
            case GenericSqlParser.KW_KEY:
            case GenericSqlParser.KW_LAST:
            case GenericSqlParser.KW_LEFT:
            case GenericSqlParser.KW_LIMIT:
            case GenericSqlParser.KW_NULLIF:
            case GenericSqlParser.KW_NULLS:
            case GenericSqlParser.KW_NUMERIC:
            case GenericSqlParser.KW_OFFSET:
            case GenericSqlParser.KW_OUTER:
            case GenericSqlParser.KW_RIGHT:
            case GenericSqlParser.KW_SMALLINT:
            case GenericSqlParser.KW_TEXT:
            case GenericSqlParser.KW_TIME:
            case GenericSqlParser.KW_TIMESTAMP:
            case GenericSqlParser.KW_TINYINT:
            case GenericSqlParser.KW_TO:
            case GenericSqlParser.KW_TRUE:
            case GenericSqlParser.KW_UNIQUE:
            case GenericSqlParser.KW_VARCHAR:
            case GenericSqlParser.KW_VARBINARY:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 797;
                this.nonReserved();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 100, GenericSqlParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 800;
            this.identifier();
            this.state = 805;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 801;
                    this.match(GenericSqlParser.T__3);
                    this.state = 802;
                    this.identifier();
                    }
                    }
                }
                this.state = 807;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnRef(): ColumnRefContext {
        let localContext = new ColumnRefContext(this.context, this.state);
        this.enterRule(localContext, 102, GenericSqlParser.RULE_columnRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 808;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableName(): TableNameContext {
        let localContext = new TableNameContext(this.context, this.state);
        this.enterRule(localContext, 104, GenericSqlParser.RULE_tableName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 810;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableNameCreate(): TableNameCreateContext {
        let localContext = new TableNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 106, GenericSqlParser.RULE_tableNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 812;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonReserved(): NonReservedContext {
        let localContext = new NonReservedContext(this.context, this.state);
        this.enterRule(localContext, 108, GenericSqlParser.RULE_nonReserved);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 814;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2939483232) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 509358375) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 3536161) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 15:
            return this.relation_sempred(localContext as RelationContext, predIndex);
        case 37:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 41:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        }
        return true;
    }
    private relation_sempred(localContext: RelationContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        case 5:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,122,817,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,1,0,5,0,112,8,0,10,0,12,0,115,9,0,1,0,1,0,
        1,1,1,1,1,2,1,2,3,2,123,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,132,
        8,3,1,4,3,4,135,8,4,1,4,1,4,1,5,1,5,3,5,141,8,5,1,5,1,5,1,5,5,5,
        146,8,5,10,5,12,5,149,9,5,1,6,1,6,3,6,153,8,6,1,6,1,6,1,6,1,6,1,
        6,1,7,1,7,1,7,1,7,5,7,164,8,7,10,7,12,7,167,9,7,1,7,1,7,1,8,1,8,
        1,8,3,8,174,8,8,1,8,5,8,177,8,8,10,8,12,8,180,9,8,1,9,1,9,1,10,1,
        10,1,10,1,10,1,10,3,10,189,8,10,1,11,1,11,3,11,193,8,11,1,11,1,11,
        1,11,5,11,198,8,11,10,11,12,11,201,9,11,1,11,3,11,204,8,11,1,11,
        3,11,207,8,11,1,11,3,11,210,8,11,1,11,3,11,213,8,11,1,11,3,11,216,
        8,11,1,11,3,11,219,8,11,1,12,1,12,1,13,1,13,3,13,225,8,13,1,13,3,
        13,228,8,13,1,13,1,13,1,13,1,13,1,13,3,13,235,8,13,1,14,1,14,1,14,
        1,14,5,14,241,8,14,10,14,12,14,244,9,14,1,15,1,15,1,15,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,5,15,256,8,15,10,15,12,15,259,9,15,1,16,
        3,16,262,8,16,1,16,1,16,3,16,266,8,16,1,16,1,16,3,16,270,8,16,1,
        16,1,16,3,16,274,8,16,1,16,3,16,277,8,16,1,17,1,17,3,17,281,8,17,
        1,17,3,17,284,8,17,1,18,1,18,1,18,1,18,1,18,3,18,291,8,18,1,19,1,
        19,1,19,1,20,1,20,1,20,3,20,299,8,20,1,20,1,20,1,20,5,20,304,8,20,
        10,20,12,20,307,9,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,5,22,
        317,8,22,10,22,12,22,320,9,22,1,23,1,23,3,23,324,8,23,1,23,1,23,
        3,23,328,8,23,1,24,1,24,1,24,1,24,3,24,334,8,24,1,25,1,25,1,25,1,
        25,3,25,340,8,25,1,25,1,25,1,26,1,26,1,26,1,26,5,26,348,8,26,10,
        26,12,26,351,9,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,5,27,361,
        8,27,10,27,12,27,364,9,27,1,27,3,27,367,8,27,1,28,1,28,1,28,1,28,
        1,29,1,29,1,29,1,29,3,29,377,8,29,1,30,1,30,1,30,1,30,1,30,3,30,
        384,8,30,1,30,1,30,1,30,1,30,1,30,5,30,391,8,30,10,30,12,30,394,
        9,30,1,30,1,30,1,30,3,30,399,8,30,1,31,1,31,3,31,403,8,31,1,32,1,
        32,1,32,1,32,3,32,409,8,32,1,32,1,32,3,32,413,8,32,1,32,1,32,3,32,
        417,8,32,1,33,1,33,3,33,421,8,33,1,33,1,33,1,33,1,33,1,33,1,33,5,
        33,429,8,33,10,33,12,33,432,9,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
        33,5,33,441,8,33,10,33,12,33,444,9,33,1,33,1,33,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,459,8,33,10,33,12,33,
        462,9,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,471,8,33,10,33,
        12,33,474,9,33,1,33,1,33,3,33,478,8,33,1,34,1,34,1,34,1,34,3,34,
        484,8,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,492,8,34,1,34,1,34,1,
        34,1,34,1,34,3,34,499,8,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,518,8,34,1,
        35,1,35,1,35,1,35,3,35,524,8,35,1,35,1,35,1,36,1,36,1,37,1,37,1,
        37,1,37,3,37,534,8,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,542,8,37,
        10,37,12,37,545,9,37,1,38,1,38,3,38,549,8,38,1,39,1,39,1,39,1,39,
        3,39,555,8,39,1,39,1,39,1,39,1,39,1,39,5,39,562,8,39,10,39,12,39,
        565,9,39,1,39,1,39,1,39,3,39,570,8,39,1,39,1,39,1,39,1,39,1,39,1,
        39,3,39,578,8,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,586,8,39,1,39,
        1,39,1,39,1,39,3,39,592,8,39,1,39,1,39,3,39,596,8,39,1,39,1,39,1,
        39,3,39,601,8,39,1,39,1,39,1,39,3,39,606,8,39,1,40,1,40,1,41,1,41,
        1,41,1,41,3,41,614,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        1,41,5,41,625,8,41,10,41,12,41,628,9,41,1,42,1,42,1,42,1,42,3,42,
        634,8,42,1,42,1,42,1,42,5,42,639,8,42,10,42,12,42,642,9,42,3,42,
        644,8,42,1,42,1,42,1,42,1,42,4,42,650,8,42,11,42,12,42,651,1,42,
        1,42,3,42,656,8,42,1,42,1,42,1,42,1,42,1,42,4,42,663,8,42,11,42,
        12,42,664,1,42,1,42,3,42,669,8,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,5,42,685,8,42,10,42,12,42,
        688,9,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,710,8,42,1,43,
        1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,734,8,45,1,45,3,45,
        737,8,45,1,45,1,45,1,45,1,45,1,45,3,45,744,8,45,1,45,3,45,747,8,
        45,1,45,1,45,1,45,1,45,3,45,753,8,45,1,45,1,45,1,45,1,45,3,45,759,
        8,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,767,8,45,1,46,1,46,1,46,
        1,46,5,46,773,8,46,10,46,12,46,776,9,46,1,46,1,46,1,47,1,47,1,47,
        1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,792,8,48,1,49,
        1,49,1,49,1,49,1,49,3,49,799,8,49,1,50,1,50,1,50,5,50,804,8,50,10,
        50,12,50,807,9,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,54,0,
        3,30,74,82,55,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
        38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
        82,84,86,88,90,92,94,96,98,100,102,104,106,108,0,8,3,0,36,36,52,
        52,87,87,2,0,6,6,30,30,2,0,10,10,29,29,2,0,39,39,57,57,1,0,95,100,
        1,0,101,102,1,0,103,105,22,0,5,6,10,10,12,15,18,18,20,21,24,27,29,
        29,31,31,38,40,43,43,46,46,50,51,56,58,60,60,63,66,70,70,75,75,78,
        78,80,80,82,86,88,88,90,91,912,0,113,1,0,0,0,2,118,1,0,0,0,4,120,
        1,0,0,0,6,131,1,0,0,0,8,134,1,0,0,0,10,138,1,0,0,0,12,150,1,0,0,
        0,14,159,1,0,0,0,16,170,1,0,0,0,18,181,1,0,0,0,20,188,1,0,0,0,22,
        190,1,0,0,0,24,220,1,0,0,0,26,234,1,0,0,0,28,236,1,0,0,0,30,245,
        1,0,0,0,32,276,1,0,0,0,34,278,1,0,0,0,36,290,1,0,0,0,38,292,1,0,
        0,0,40,295,1,0,0,0,42,308,1,0,0,0,44,311,1,0,0,0,46,321,1,0,0,0,
        48,329,1,0,0,0,50,335,1,0,0,0,52,343,1,0,0,0,54,354,1,0,0,0,56,368,
        1,0,0,0,58,372,1,0,0,0,60,378,1,0,0,0,62,402,1,0,0,0,64,404,1,0,
        0,0,66,420,1,0,0,0,68,479,1,0,0,0,70,519,1,0,0,0,72,527,1,0,0,0,
        74,533,1,0,0,0,76,546,1,0,0,0,78,605,1,0,0,0,80,607,1,0,0,0,82,613,
        1,0,0,0,84,709,1,0,0,0,86,711,1,0,0,0,88,716,1,0,0,0,90,766,1,0,
        0,0,92,768,1,0,0,0,94,779,1,0,0,0,96,791,1,0,0,0,98,798,1,0,0,0,
        100,800,1,0,0,0,102,808,1,0,0,0,104,810,1,0,0,0,106,812,1,0,0,0,
        108,814,1,0,0,0,110,112,3,2,1,0,111,110,1,0,0,0,112,115,1,0,0,0,
        113,111,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,
        116,117,5,0,0,1,117,1,1,0,0,0,118,119,3,4,2,0,119,3,1,0,0,0,120,
        122,3,6,3,0,121,123,5,108,0,0,122,121,1,0,0,0,122,123,1,0,0,0,123,
        5,1,0,0,0,124,132,3,8,4,0,125,132,3,50,25,0,126,132,3,54,27,0,127,
        132,3,58,29,0,128,132,3,60,30,0,129,132,3,68,34,0,130,132,3,70,35,
        0,131,124,1,0,0,0,131,125,1,0,0,0,131,126,1,0,0,0,131,127,1,0,0,
        0,131,128,1,0,0,0,131,129,1,0,0,0,131,130,1,0,0,0,132,7,1,0,0,0,
        133,135,3,10,5,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,
        136,137,3,16,8,0,137,9,1,0,0,0,138,140,5,94,0,0,139,141,5,72,0,0,
        140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,147,3,12,6,0,
        143,144,5,1,0,0,144,146,3,12,6,0,145,143,1,0,0,0,146,149,1,0,0,0,
        147,145,1,0,0,0,147,148,1,0,0,0,148,11,1,0,0,0,149,147,1,0,0,0,150,
        152,3,98,49,0,151,153,3,14,7,0,152,151,1,0,0,0,152,153,1,0,0,0,153,
        154,1,0,0,0,154,155,5,9,0,0,155,156,5,2,0,0,156,157,3,8,4,0,157,
        158,5,3,0,0,158,13,1,0,0,0,159,160,5,2,0,0,160,165,3,98,49,0,161,
        162,5,1,0,0,162,164,3,98,49,0,163,161,1,0,0,0,164,167,1,0,0,0,165,
        163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,
        169,5,3,0,0,169,15,1,0,0,0,170,178,3,18,9,0,171,173,7,0,0,0,172,
        174,5,6,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,
        177,3,18,9,0,176,171,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,
        179,1,0,0,0,179,17,1,0,0,0,180,178,1,0,0,0,181,182,3,20,10,0,182,
        19,1,0,0,0,183,189,3,22,11,0,184,185,5,2,0,0,185,186,3,8,4,0,186,
        187,5,3,0,0,187,189,1,0,0,0,188,183,1,0,0,0,188,184,1,0,0,0,189,
        21,1,0,0,0,190,192,5,76,0,0,191,193,3,24,12,0,192,191,1,0,0,0,192,
        193,1,0,0,0,193,194,1,0,0,0,194,199,3,26,13,0,195,196,5,1,0,0,196,
        198,3,26,13,0,197,195,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,
        200,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,202,204,3,28,14,0,203,
        202,1,0,0,0,203,204,1,0,0,0,204,206,1,0,0,0,205,207,3,38,19,0,206,
        205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,210,3,40,20,0,209,
        208,1,0,0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,213,3,42,21,0,212,
        211,1,0,0,0,212,213,1,0,0,0,213,215,1,0,0,0,214,216,3,44,22,0,215,
        214,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,219,3,48,24,0,218,
        217,1,0,0,0,218,219,1,0,0,0,219,23,1,0,0,0,220,221,7,1,0,0,221,25,
        1,0,0,0,222,227,3,72,36,0,223,225,5,9,0,0,224,223,1,0,0,0,224,225,
        1,0,0,0,225,226,1,0,0,0,226,228,3,98,49,0,227,224,1,0,0,0,227,228,
        1,0,0,0,228,235,1,0,0,0,229,230,3,100,50,0,230,231,5,4,0,0,231,232,
        5,103,0,0,232,235,1,0,0,0,233,235,5,103,0,0,234,222,1,0,0,0,234,
        229,1,0,0,0,234,233,1,0,0,0,235,27,1,0,0,0,236,237,5,42,0,0,237,
        242,3,30,15,0,238,239,5,1,0,0,239,241,3,30,15,0,240,238,1,0,0,0,
        241,244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,29,1,0,0,0,244,
        242,1,0,0,0,245,246,6,15,-1,0,246,247,3,34,17,0,247,257,1,0,0,0,
        248,249,10,2,0,0,249,250,3,32,16,0,250,251,5,55,0,0,251,252,3,30,
        15,0,252,253,5,67,0,0,253,254,3,72,36,0,254,256,1,0,0,0,255,248,
        1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,31,1,
        0,0,0,259,257,1,0,0,0,260,262,5,48,0,0,261,260,1,0,0,0,261,262,1,
        0,0,0,262,277,1,0,0,0,263,265,5,58,0,0,264,266,5,70,0,0,265,264,
        1,0,0,0,265,266,1,0,0,0,266,277,1,0,0,0,267,269,5,75,0,0,268,270,
        5,70,0,0,269,268,1,0,0,0,269,270,1,0,0,0,270,277,1,0,0,0,271,273,
        5,43,0,0,272,274,5,70,0,0,273,272,1,0,0,0,273,274,1,0,0,0,274,277,
        1,0,0,0,275,277,5,24,0,0,276,261,1,0,0,0,276,263,1,0,0,0,276,267,
        1,0,0,0,276,271,1,0,0,0,276,275,1,0,0,0,277,33,1,0,0,0,278,283,3,
        36,18,0,279,281,5,9,0,0,280,279,1,0,0,0,280,281,1,0,0,0,281,282,
        1,0,0,0,282,284,3,98,49,0,283,280,1,0,0,0,283,284,1,0,0,0,284,35,
        1,0,0,0,285,291,3,104,52,0,286,287,5,2,0,0,287,288,3,8,4,0,288,289,
        5,3,0,0,289,291,1,0,0,0,290,285,1,0,0,0,290,286,1,0,0,0,291,37,1,
        0,0,0,292,293,5,93,0,0,293,294,3,72,36,0,294,39,1,0,0,0,295,296,
        5,44,0,0,296,298,5,15,0,0,297,299,3,24,12,0,298,297,1,0,0,0,298,
        299,1,0,0,0,299,300,1,0,0,0,300,305,3,72,36,0,301,302,5,1,0,0,302,
        304,3,72,36,0,303,301,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,
        306,1,0,0,0,306,41,1,0,0,0,307,305,1,0,0,0,308,309,5,45,0,0,309,
        310,3,72,36,0,310,43,1,0,0,0,311,312,5,69,0,0,312,313,5,15,0,0,313,
        318,3,46,23,0,314,315,5,1,0,0,315,317,3,46,23,0,316,314,1,0,0,0,
        317,320,1,0,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,45,1,0,0,0,320,
        318,1,0,0,0,321,323,3,72,36,0,322,324,7,2,0,0,323,322,1,0,0,0,323,
        324,1,0,0,0,324,327,1,0,0,0,325,326,5,64,0,0,326,328,7,3,0,0,327,
        325,1,0,0,0,327,328,1,0,0,0,328,47,1,0,0,0,329,330,5,60,0,0,330,
        333,3,72,36,0,331,332,5,66,0,0,332,334,3,72,36,0,333,331,1,0,0,0,
        333,334,1,0,0,0,334,49,1,0,0,0,335,336,5,49,0,0,336,337,5,53,0,0,
        337,339,3,104,52,0,338,340,3,52,26,0,339,338,1,0,0,0,339,340,1,0,
        0,0,340,341,1,0,0,0,341,342,3,8,4,0,342,51,1,0,0,0,343,344,5,2,0,
        0,344,349,3,102,51,0,345,346,5,1,0,0,346,348,3,102,51,0,347,345,
        1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,352,
        1,0,0,0,351,349,1,0,0,0,352,353,5,3,0,0,353,53,1,0,0,0,354,355,5,
        89,0,0,355,356,3,104,52,0,356,357,5,77,0,0,357,362,3,56,28,0,358,
        359,5,1,0,0,359,361,3,56,28,0,360,358,1,0,0,0,361,364,1,0,0,0,362,
        360,1,0,0,0,362,363,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,365,
        367,3,38,19,0,366,365,1,0,0,0,366,367,1,0,0,0,367,55,1,0,0,0,368,
        369,3,102,51,0,369,370,5,95,0,0,370,371,3,72,36,0,371,57,1,0,0,0,
        372,373,5,28,0,0,373,374,5,42,0,0,374,376,3,104,52,0,375,377,3,38,
        19,0,376,375,1,0,0,0,376,377,1,0,0,0,377,59,1,0,0,0,378,379,5,23,
        0,0,379,383,5,79,0,0,380,381,5,46,0,0,381,382,5,61,0,0,382,384,5,
        37,0,0,383,380,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,386,3,
        106,53,0,386,387,5,2,0,0,387,392,3,62,31,0,388,389,5,1,0,0,389,391,
        3,62,31,0,390,388,1,0,0,0,391,394,1,0,0,0,392,390,1,0,0,0,392,393,
        1,0,0,0,393,395,1,0,0,0,394,392,1,0,0,0,395,398,5,3,0,0,396,397,
        5,94,0,0,397,399,3,92,46,0,398,396,1,0,0,0,398,399,1,0,0,0,399,61,
        1,0,0,0,400,403,3,64,32,0,401,403,3,66,33,0,402,400,1,0,0,0,402,
        401,1,0,0,0,403,63,1,0,0,0,404,405,3,102,51,0,405,408,3,90,45,0,
        406,407,5,61,0,0,407,409,5,62,0,0,408,406,1,0,0,0,408,409,1,0,0,
        0,409,412,1,0,0,0,410,411,5,27,0,0,411,413,3,72,36,0,412,410,1,0,
        0,0,412,413,1,0,0,0,413,416,1,0,0,0,414,415,5,71,0,0,415,417,5,56,
        0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,65,1,0,0,0,418,419,5,22,
        0,0,419,421,3,98,49,0,420,418,1,0,0,0,420,421,1,0,0,0,421,477,1,
        0,0,0,422,423,5,71,0,0,423,424,5,56,0,0,424,425,5,2,0,0,425,430,
        3,102,51,0,426,427,5,1,0,0,427,429,3,102,51,0,428,426,1,0,0,0,429,
        432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,433,1,0,0,0,432,
        430,1,0,0,0,433,434,5,3,0,0,434,478,1,0,0,0,435,436,5,88,0,0,436,
        437,5,2,0,0,437,442,3,102,51,0,438,439,5,1,0,0,439,441,3,102,51,
        0,440,438,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,442,443,1,0,0,
        0,443,445,1,0,0,0,444,442,1,0,0,0,445,446,5,3,0,0,446,478,1,0,0,
        0,447,448,5,19,0,0,448,449,5,2,0,0,449,450,3,72,36,0,450,451,5,3,
        0,0,451,478,1,0,0,0,452,453,5,41,0,0,453,454,5,56,0,0,454,455,5,
        2,0,0,455,460,3,102,51,0,456,457,5,1,0,0,457,459,3,102,51,0,458,
        456,1,0,0,0,459,462,1,0,0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,
        463,1,0,0,0,462,460,1,0,0,0,463,464,5,3,0,0,464,465,5,73,0,0,465,
        466,3,104,52,0,466,467,5,2,0,0,467,472,3,102,51,0,468,469,5,1,0,
        0,469,471,3,102,51,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,
        0,0,472,473,1,0,0,0,473,475,1,0,0,0,474,472,1,0,0,0,475,476,5,3,
        0,0,476,478,1,0,0,0,477,422,1,0,0,0,477,435,1,0,0,0,477,447,1,0,
        0,0,477,452,1,0,0,0,478,67,1,0,0,0,479,480,5,7,0,0,480,483,5,79,
        0,0,481,482,5,46,0,0,482,484,5,37,0,0,483,481,1,0,0,0,483,484,1,
        0,0,0,484,485,1,0,0,0,485,517,3,104,52,0,486,487,5,5,0,0,487,491,
        5,21,0,0,488,489,5,46,0,0,489,490,5,61,0,0,490,492,5,37,0,0,491,
        488,1,0,0,0,491,492,1,0,0,0,492,493,1,0,0,0,493,518,3,64,32,0,494,
        495,5,32,0,0,495,498,5,21,0,0,496,497,5,46,0,0,497,499,5,37,0,0,
        498,496,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,518,3,102,51,
        0,501,502,5,74,0,0,502,503,5,85,0,0,503,518,3,106,53,0,504,505,5,
        7,0,0,505,506,5,21,0,0,506,507,3,102,51,0,507,508,5,77,0,0,508,509,
        5,27,0,0,509,510,3,72,36,0,510,518,1,0,0,0,511,512,5,7,0,0,512,513,
        5,21,0,0,513,514,3,102,51,0,514,515,5,32,0,0,515,516,5,27,0,0,516,
        518,1,0,0,0,517,486,1,0,0,0,517,494,1,0,0,0,517,501,1,0,0,0,517,
        504,1,0,0,0,517,511,1,0,0,0,518,69,1,0,0,0,519,520,5,32,0,0,520,
        523,5,79,0,0,521,522,5,46,0,0,522,524,5,37,0,0,523,521,1,0,0,0,523,
        524,1,0,0,0,524,525,1,0,0,0,525,526,3,104,52,0,526,71,1,0,0,0,527,
        528,3,74,37,0,528,73,1,0,0,0,529,530,6,37,-1,0,530,534,3,76,38,0,
        531,532,5,61,0,0,532,534,3,74,37,3,533,529,1,0,0,0,533,531,1,0,0,
        0,534,543,1,0,0,0,535,536,10,2,0,0,536,537,5,8,0,0,537,542,3,74,
        37,3,538,539,10,1,0,0,539,540,5,68,0,0,540,542,3,74,37,2,541,535,
        1,0,0,0,541,538,1,0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,543,544,
        1,0,0,0,544,75,1,0,0,0,545,543,1,0,0,0,546,548,3,82,41,0,547,549,
        3,78,39,0,548,547,1,0,0,0,548,549,1,0,0,0,549,77,1,0,0,0,550,551,
        3,80,40,0,551,552,3,82,41,0,552,606,1,0,0,0,553,555,5,61,0,0,554,
        553,1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,557,5,47,0,0,557,
        558,5,2,0,0,558,563,3,72,36,0,559,560,5,1,0,0,560,562,3,72,36,0,
        561,559,1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,
        564,566,1,0,0,0,565,563,1,0,0,0,566,567,5,3,0,0,567,606,1,0,0,0,
        568,570,5,61,0,0,569,568,1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,
        571,572,5,47,0,0,572,573,5,2,0,0,573,574,3,8,4,0,574,575,5,3,0,0,
        575,606,1,0,0,0,576,578,5,61,0,0,577,576,1,0,0,0,577,578,1,0,0,0,
        578,579,1,0,0,0,579,580,5,11,0,0,580,581,3,82,41,0,581,582,5,8,0,
        0,582,583,3,82,41,0,583,606,1,0,0,0,584,586,5,61,0,0,585,584,1,0,
        0,0,585,586,1,0,0,0,586,587,1,0,0,0,587,588,5,59,0,0,588,591,3,82,
        41,0,589,590,5,35,0,0,590,592,3,82,41,0,591,589,1,0,0,0,591,592,
        1,0,0,0,592,606,1,0,0,0,593,595,5,54,0,0,594,596,5,61,0,0,595,594,
        1,0,0,0,595,596,1,0,0,0,596,597,1,0,0,0,597,606,5,62,0,0,598,600,
        5,54,0,0,599,601,5,61,0,0,600,599,1,0,0,0,600,601,1,0,0,0,601,602,
        1,0,0,0,602,603,5,30,0,0,603,604,5,42,0,0,604,606,3,82,41,0,605,
        550,1,0,0,0,605,554,1,0,0,0,605,569,1,0,0,0,605,577,1,0,0,0,605,
        585,1,0,0,0,605,593,1,0,0,0,605,598,1,0,0,0,606,79,1,0,0,0,607,608,
        7,4,0,0,608,81,1,0,0,0,609,610,6,41,-1,0,610,614,3,84,42,0,611,612,
        7,5,0,0,612,614,3,82,41,4,613,609,1,0,0,0,613,611,1,0,0,0,614,626,
        1,0,0,0,615,616,10,3,0,0,616,617,7,6,0,0,617,625,3,82,41,4,618,619,
        10,2,0,0,619,620,7,5,0,0,620,625,3,82,41,3,621,622,10,1,0,0,622,
        623,5,106,0,0,623,625,3,82,41,2,624,615,1,0,0,0,624,618,1,0,0,0,
        624,621,1,0,0,0,625,628,1,0,0,0,626,624,1,0,0,0,626,627,1,0,0,0,
        627,83,1,0,0,0,628,626,1,0,0,0,629,710,3,96,48,0,630,631,3,100,50,
        0,631,643,5,2,0,0,632,634,3,24,12,0,633,632,1,0,0,0,633,634,1,0,
        0,0,634,635,1,0,0,0,635,640,3,72,36,0,636,637,5,1,0,0,637,639,3,
        72,36,0,638,636,1,0,0,0,639,642,1,0,0,0,640,638,1,0,0,0,640,641,
        1,0,0,0,641,644,1,0,0,0,642,640,1,0,0,0,643,633,1,0,0,0,643,644,
        1,0,0,0,644,645,1,0,0,0,645,646,5,3,0,0,646,710,1,0,0,0,647,649,
        5,16,0,0,648,650,3,86,43,0,649,648,1,0,0,0,650,651,1,0,0,0,651,649,
        1,0,0,0,651,652,1,0,0,0,652,655,1,0,0,0,653,654,5,33,0,0,654,656,
        3,72,36,0,655,653,1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,658,
        5,34,0,0,658,710,1,0,0,0,659,660,5,16,0,0,660,662,3,72,36,0,661,
        663,3,86,43,0,662,661,1,0,0,0,663,664,1,0,0,0,664,662,1,0,0,0,664,
        665,1,0,0,0,665,668,1,0,0,0,666,667,5,33,0,0,667,669,3,72,36,0,668,
        666,1,0,0,0,668,669,1,0,0,0,669,670,1,0,0,0,670,671,5,34,0,0,671,
        710,1,0,0,0,672,673,5,17,0,0,673,674,5,2,0,0,674,675,3,72,36,0,675,
        676,5,9,0,0,676,677,3,90,45,0,677,678,5,3,0,0,678,710,1,0,0,0,679,
        680,5,20,0,0,680,681,5,2,0,0,681,686,3,72,36,0,682,683,5,1,0,0,683,
        685,3,72,36,0,684,682,1,0,0,0,685,688,1,0,0,0,686,684,1,0,0,0,686,
        687,1,0,0,0,687,689,1,0,0,0,688,686,1,0,0,0,689,690,5,3,0,0,690,
        710,1,0,0,0,691,692,5,63,0,0,692,693,5,2,0,0,693,694,3,82,41,0,694,
        695,5,1,0,0,695,696,3,82,41,0,696,697,5,3,0,0,697,710,1,0,0,0,698,
        699,5,2,0,0,699,700,3,72,36,0,700,701,5,3,0,0,701,710,1,0,0,0,702,
        703,5,37,0,0,703,704,5,2,0,0,704,705,3,8,4,0,705,706,5,3,0,0,706,
        710,1,0,0,0,707,710,3,88,44,0,708,710,3,100,50,0,709,629,1,0,0,0,
        709,630,1,0,0,0,709,647,1,0,0,0,709,659,1,0,0,0,709,672,1,0,0,0,
        709,679,1,0,0,0,709,691,1,0,0,0,709,698,1,0,0,0,709,702,1,0,0,0,
        709,707,1,0,0,0,709,708,1,0,0,0,710,85,1,0,0,0,711,712,5,92,0,0,
        712,713,3,72,36,0,713,714,5,81,0,0,714,715,3,72,36,0,715,87,1,0,
        0,0,716,717,5,2,0,0,717,718,3,8,4,0,718,719,5,3,0,0,719,89,1,0,0,
        0,720,767,5,14,0,0,721,767,5,84,0,0,722,767,5,78,0,0,723,767,5,50,
        0,0,724,767,5,51,0,0,725,767,5,12,0,0,726,767,5,40,0,0,727,767,5,
        31,0,0,728,736,5,26,0,0,729,730,5,2,0,0,730,733,5,111,0,0,731,732,
        5,1,0,0,732,734,5,111,0,0,733,731,1,0,0,0,733,734,1,0,0,0,734,735,
        1,0,0,0,735,737,5,3,0,0,736,729,1,0,0,0,736,737,1,0,0,0,737,767,
        1,0,0,0,738,746,5,65,0,0,739,740,5,2,0,0,740,743,5,111,0,0,741,742,
        5,1,0,0,742,744,5,111,0,0,743,741,1,0,0,0,743,744,1,0,0,0,744,745,
        1,0,0,0,745,747,5,3,0,0,746,739,1,0,0,0,746,747,1,0,0,0,747,767,
        1,0,0,0,748,752,5,90,0,0,749,750,5,2,0,0,750,751,5,111,0,0,751,753,
        5,3,0,0,752,749,1,0,0,0,752,753,1,0,0,0,753,767,1,0,0,0,754,758,
        5,18,0,0,755,756,5,2,0,0,756,757,5,111,0,0,757,759,5,3,0,0,758,755,
        1,0,0,0,758,759,1,0,0,0,759,767,1,0,0,0,760,767,5,80,0,0,761,767,
        5,25,0,0,762,767,5,82,0,0,763,767,5,83,0,0,764,767,5,13,0,0,765,
        767,5,91,0,0,766,720,1,0,0,0,766,721,1,0,0,0,766,722,1,0,0,0,766,
        723,1,0,0,0,766,724,1,0,0,0,766,725,1,0,0,0,766,726,1,0,0,0,766,
        727,1,0,0,0,766,728,1,0,0,0,766,738,1,0,0,0,766,748,1,0,0,0,766,
        754,1,0,0,0,766,760,1,0,0,0,766,761,1,0,0,0,766,762,1,0,0,0,766,
        763,1,0,0,0,766,764,1,0,0,0,766,765,1,0,0,0,767,91,1,0,0,0,768,769,
        5,2,0,0,769,774,3,94,47,0,770,771,5,1,0,0,771,773,3,94,47,0,772,
        770,1,0,0,0,773,776,1,0,0,0,774,772,1,0,0,0,774,775,1,0,0,0,775,
        777,1,0,0,0,776,774,1,0,0,0,777,778,5,3,0,0,778,93,1,0,0,0,779,780,
        3,98,49,0,780,781,5,95,0,0,781,782,3,96,48,0,782,95,1,0,0,0,783,
        792,5,62,0,0,784,792,5,86,0,0,785,792,5,38,0,0,786,792,5,111,0,0,
        787,792,5,112,0,0,788,792,5,113,0,0,789,792,5,109,0,0,790,792,5,
        110,0,0,791,783,1,0,0,0,791,784,1,0,0,0,791,785,1,0,0,0,791,786,
        1,0,0,0,791,787,1,0,0,0,791,788,1,0,0,0,791,789,1,0,0,0,791,790,
        1,0,0,0,792,97,1,0,0,0,793,799,5,114,0,0,794,799,5,115,0,0,795,799,
        5,116,0,0,796,799,5,117,0,0,797,799,3,108,54,0,798,793,1,0,0,0,798,
        794,1,0,0,0,798,795,1,0,0,0,798,796,1,0,0,0,798,797,1,0,0,0,799,
        99,1,0,0,0,800,805,3,98,49,0,801,802,5,4,0,0,802,804,3,98,49,0,803,
        801,1,0,0,0,804,807,1,0,0,0,805,803,1,0,0,0,805,806,1,0,0,0,806,
        101,1,0,0,0,807,805,1,0,0,0,808,809,3,98,49,0,809,103,1,0,0,0,810,
        811,3,100,50,0,811,105,1,0,0,0,812,813,3,100,50,0,813,107,1,0,0,
        0,814,815,7,7,0,0,815,109,1,0,0,0,97,113,122,131,134,140,147,152,
        165,173,178,188,192,199,203,206,209,212,215,218,224,227,234,242,
        257,261,265,269,273,276,280,283,290,298,305,318,323,327,333,339,
        349,362,366,376,383,392,398,402,408,412,416,420,430,442,460,472,
        477,483,491,498,517,523,533,541,543,548,554,563,569,577,585,591,
        595,600,605,613,624,626,633,640,643,651,655,664,668,686,709,733,
        736,743,746,752,758,766,774,791,798,805
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GenericSqlParser.__ATN) {
            GenericSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(GenericSqlParser._serializedATN);
        }

        return GenericSqlParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GenericSqlParser.literalNames, GenericSqlParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GenericSqlParser.vocabulary;
    }

    private static readonly decisionsToDFA = GenericSqlParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.EOF, 0)!;
    }
    public statements(): StatementsContext[];
    public statements(i: number): StatementsContext | null;
    public statements(i?: number): StatementsContext[] | StatementsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementsContext);
        }

        return this.getRuleContext(i, StatementsContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_program;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleStatement(): SingleStatementContext {
        return this.getRuleContext(0, SingleStatementContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_statements;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterStatements) {
             listener.enterStatements(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitStatements) {
             listener.exitStatements(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_singleStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSingleStatement) {
             listener.enterSingleStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSingleStatement) {
             listener.exitSingleStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class CreateTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public createTableStatement(): CreateTableStatementContext {
        return this.getRuleContext(0, CreateTableStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterCreateTable) {
             listener.enterCreateTable(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitCreateTable) {
             listener.exitCreateTable(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementDefaultContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterStatementDefault) {
             listener.enterStatementDefault(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitStatementDefault) {
             listener.exitStatementDefault(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitStatementDefault) {
            return visitor.visitStatementDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public insertStatement(): InsertStatementContext {
        return this.getRuleContext(0, InsertStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterInsert) {
             listener.enterInsert(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitInsert) {
             listener.exitInsert(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitInsert) {
            return visitor.visitInsert(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public updateStatement(): UpdateStatementContext {
        return this.getRuleContext(0, UpdateStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterUpdate) {
             listener.enterUpdate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitUpdate) {
             listener.exitUpdate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitUpdate) {
            return visitor.visitUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public deleteStatement(): DeleteStatementContext {
        return this.getRuleContext(0, DeleteStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDelete) {
             listener.enterDelete(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDelete) {
             listener.exitDelete(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDelete) {
            return visitor.visitDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public alterTableStatement(): AlterTableStatementContext {
        return this.getRuleContext(0, AlterTableStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterAlterTable) {
             listener.enterAlterTable(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitAlterTable) {
             listener.exitAlterTable(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitAlterTable) {
            return visitor.visitAlterTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dropTableStatement(): DropTableStatementContext {
        return this.getRuleContext(0, DropTableStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDropTable) {
             listener.enterDropTable(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDropTable) {
             listener.exitDropTable(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_queryStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQueryStatement) {
             listener.enterQueryStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQueryStatement) {
             listener.exitQueryStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_WITH, 0)!;
    }
    public namedQuery(): NamedQueryContext[];
    public namedQuery(i: number): NamedQueryContext | null;
    public namedQuery(i?: number): NamedQueryContext[] | NamedQueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }

        return this.getRuleContext(i, NamedQueryContext);
    }
    public KW_RECURSIVE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_RECURSIVE, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_withClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterWithClause) {
             listener.enterWithClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitWithClause) {
             listener.exitWithClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedQueryContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_AS, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public cteColumnList(): CteColumnListContext | null {
        return this.getRuleContext(0, CteColumnListContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_namedQuery;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNamedQuery) {
             listener.enterNamedQuery(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNamedQuery) {
             listener.exitNamedQuery(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CteColumnListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_cteColumnList;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterCteColumnList) {
             listener.enterCteColumnList(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitCteColumnList) {
             listener.exitCteColumnList(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitCteColumnList) {
            return visitor.visitCteColumnList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryNoWithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryTerm(): QueryTermContext[];
    public queryTerm(i: number): QueryTermContext | null;
    public queryTerm(i?: number): QueryTermContext[] | QueryTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryTermContext);
        }

        return this.getRuleContext(i, QueryTermContext);
    }
    public KW_UNION(): antlr.TerminalNode[];
    public KW_UNION(i: number): antlr.TerminalNode | null;
    public KW_UNION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_UNION);
    	} else {
    		return this.getToken(GenericSqlParser.KW_UNION, i);
    	}
    }
    public KW_INTERSECT(): antlr.TerminalNode[];
    public KW_INTERSECT(i: number): antlr.TerminalNode | null;
    public KW_INTERSECT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_INTERSECT);
    	} else {
    		return this.getToken(GenericSqlParser.KW_INTERSECT, i);
    	}
    }
    public KW_EXCEPT(): antlr.TerminalNode[];
    public KW_EXCEPT(i: number): antlr.TerminalNode | null;
    public KW_EXCEPT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_EXCEPT);
    	} else {
    		return this.getToken(GenericSqlParser.KW_EXCEPT, i);
    	}
    }
    public KW_ALL(): antlr.TerminalNode[];
    public KW_ALL(i: number): antlr.TerminalNode | null;
    public KW_ALL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_ALL);
    	} else {
    		return this.getToken(GenericSqlParser.KW_ALL, i);
    	}
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_queryNoWith;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQueryNoWith) {
             listener.enterQueryNoWith(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQueryNoWith) {
             listener.exitQueryNoWith(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryNoWith) {
            return visitor.visitQueryNoWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryPrimary(): QueryPrimaryContext {
        return this.getRuleContext(0, QueryPrimaryContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_queryTerm;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQueryTerm) {
             listener.enterQueryTerm(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQueryTerm) {
             listener.exitQueryTerm(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryTerm) {
            return visitor.visitQueryTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public querySpecification(): QuerySpecificationContext | null {
        return this.getRuleContext(0, QuerySpecificationContext);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_queryPrimary;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQueryPrimary) {
             listener.enterQueryPrimary(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQueryPrimary) {
             listener.exitQueryPrimary(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQueryPrimary) {
            return visitor.visitQueryPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuerySpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_SELECT, 0)!;
    }
    public selectItem(): SelectItemContext[];
    public selectItem(i: number): SelectItemContext | null;
    public selectItem(i?: number): SelectItemContext[] | SelectItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }

        return this.getRuleContext(i, SelectItemContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_querySpecification;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQuerySpecification) {
             listener.enterQuerySpecification(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQuerySpecification) {
             listener.exitQuerySpecification(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_setQuantifier;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSetQuantifier) {
             listener.enterSetQuantifier(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSetQuantifier) {
             listener.exitSetQuantifier(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectItemContext extends antlr.ParserRuleContext {
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.ASTERISK, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_selectItem;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSelectItem) {
             listener.enterSelectItem(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSelectItem) {
             listener.exitSelectItem(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSelectItem) {
            return visitor.visitSelectItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_FROM, 0)!;
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_fromClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterFromClause) {
             listener.enterFromClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitFromClause) {
             listener.exitFromClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_relation;
    }
    public override copyFrom(ctx: RelationContext): void {
        super.copyFrom(ctx);
    }
}
export class SimpleRelationContext extends RelationContext {
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public aliasedRelation(): AliasedRelationContext {
        return this.getRuleContext(0, AliasedRelationContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSimpleRelation) {
             listener.enterSimpleRelation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSimpleRelation) {
             listener.exitSimpleRelation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSimpleRelation) {
            return visitor.visitSimpleRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinRelationContext extends RelationContext {
    public _left?: RelationContext;
    public _right?: RelationContext;
    public _condition?: ExpressionContext;
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public joinType(): JoinTypeContext {
        return this.getRuleContext(0, JoinTypeContext)!;
    }
    public KW_JOIN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_JOIN, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_ON, 0)!;
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterJoinRelation) {
             listener.enterJoinRelation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitJoinRelation) {
             listener.exitJoinRelation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitJoinRelation) {
            return visitor.visitJoinRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INNER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_INNER, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_LEFT, 0);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_OUTER, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_RIGHT, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FULL, 0);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CROSS, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_joinType;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterJoinType) {
             listener.enterJoinType(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitJoinType) {
             listener.exitJoinType(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitJoinType) {
            return visitor.visitJoinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasedRelationContext extends antlr.ParserRuleContext {
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationPrimary(): RelationPrimaryContext {
        return this.getRuleContext(0, RelationPrimaryContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_aliasedRelation;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterAliasedRelation) {
             listener.enterAliasedRelation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitAliasedRelation) {
             listener.exitAliasedRelation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitAliasedRelation) {
            return visitor.visitAliasedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_relationPrimary;
    }
    public override copyFrom(ctx: RelationPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class SubqueryRelationContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSubqueryRelation) {
             listener.enterSubqueryRelation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSubqueryRelation) {
             listener.exitSubqueryRelation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSubqueryRelation) {
            return visitor.visitSubqueryRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableNameRelationContext extends RelationPrimaryContext {
    public constructor(ctx: RelationPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterTableNameRelation) {
             listener.enterTableNameRelation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitTableNameRelation) {
             listener.exitTableNameRelation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitTableNameRelation) {
            return visitor.visitTableNameRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_WHERE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_whereClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_GROUP, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_BY, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_groupByClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_HAVING, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_havingClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_ORDER, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_BY, 0)!;
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_orderByClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterOrderByClause) {
             listener.enterOrderByClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitOrderByClause) {
             listener.exitOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortItemContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrdering?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DESC, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FIRST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_LAST, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_sortItem;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSortItem) {
             listener.enterSortItem(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSortItem) {
             listener.exitSortItem(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSortItem) {
            return visitor.visitSortItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public _limit?: ExpressionContext;
    public _offset?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIMIT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_LIMIT, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_limitClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterLimitClause) {
             listener.enterLimitClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitLimitClause) {
             listener.exitLimitClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_INSERT, 0)!;
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_INTO, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public columnList(): ColumnListContext | null {
        return this.getRuleContext(0, ColumnListContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_insertStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterInsertStatement) {
             listener.enterInsertStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitInsertStatement) {
             listener.exitInsertStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnRef(): ColumnRefContext[];
    public columnRef(i: number): ColumnRefContext | null;
    public columnRef(i?: number): ColumnRefContext[] | ColumnRefContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnRefContext);
        }

        return this.getRuleContext(i, ColumnRefContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_columnList;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterColumnList) {
             listener.enterColumnList(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitColumnList) {
             listener.exitColumnList(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnList) {
            return visitor.visitColumnList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UPDATE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_UPDATE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_SET, 0)!;
    }
    public updateAssignment(): UpdateAssignmentContext[];
    public updateAssignment(i: number): UpdateAssignmentContext | null;
    public updateAssignment(i?: number): UpdateAssignmentContext[] | UpdateAssignmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UpdateAssignmentContext);
        }

        return this.getRuleContext(i, UpdateAssignmentContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_updateStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterUpdateStatement) {
             listener.enterUpdateStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitUpdateStatement) {
             listener.exitUpdateStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitUpdateStatement) {
            return visitor.visitUpdateStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnRef(): ColumnRefContext {
        return this.getRuleContext(0, ColumnRefContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_updateAssignment;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterUpdateAssignment) {
             listener.enterUpdateAssignment(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitUpdateAssignment) {
             listener.exitUpdateAssignment(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitUpdateAssignment) {
            return visitor.visitUpdateAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_DELETE, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_FROM, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_deleteStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDeleteStatement) {
             listener.enterDeleteStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDeleteStatement) {
             listener.exitDeleteStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDeleteStatement) {
            return visitor.visitDeleteStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public tableElement(): TableElementContext[];
    public tableElement(i: number): TableElementContext | null;
    public tableElement(i?: number): TableElementContext[] | TableElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableElementContext);
        }

        return this.getRuleContext(i, TableElementContext);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_WITH, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_createTableStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterCreateTableStatement) {
             listener.enterCreateTableStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitCreateTableStatement) {
             listener.exitCreateTableStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitCreateTableStatement) {
            return visitor.visitCreateTableStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnDefinition(): ColumnDefinitionContext | null {
        return this.getRuleContext(0, ColumnDefinitionContext);
    }
    public tableConstraint(): TableConstraintContext | null {
        return this.getRuleContext(0, TableConstraintContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_tableElement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterTableElement) {
             listener.enterTableElement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitTableElement) {
             listener.exitTableElement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitTableElement) {
            return visitor.visitTableElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnRef(): ColumnRefContext {
        return this.getRuleContext(0, ColumnRefContext)!;
    }
    public dataType(): DataTypeContext {
        return this.getRuleContext(0, DataTypeContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NULL, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_columnDefinition;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterColumnDefinition) {
             listener.enterColumnDefinition(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitColumnDefinition) {
             listener.exitColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    public columnRef(): ColumnRefContext[];
    public columnRef(i: number): ColumnRefContext | null;
    public columnRef(i?: number): ColumnRefContext[] | ColumnRefContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnRefContext);
        }

        return this.getRuleContext(i, ColumnRefContext);
    }
    public KW_UNIQUE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_UNIQUE, 0);
    }
    public KW_CHECK(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CHECK, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_FOREIGN(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FOREIGN, 0);
    }
    public KW_REFERENCES(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_REFERENCES, 0);
    }
    public tableName(): TableNameContext | null {
        return this.getRuleContext(0, TableNameContext);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CONSTRAINT, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_tableConstraint;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterTableConstraint) {
             listener.enterTableConstraint(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitTableConstraint) {
             listener.exitTableConstraint(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode[];
    public KW_ALTER(i: number): antlr.TerminalNode | null;
    public KW_ALTER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_ALTER);
    	} else {
    		return this.getToken(GenericSqlParser.KW_ALTER, i);
    	}
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ADD, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_COLUMN, 0);
    }
    public columnDefinition(): ColumnDefinitionContext | null {
        return this.getRuleContext(0, ColumnDefinitionContext);
    }
    public KW_DROP(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DROP, 0);
    }
    public columnRef(): ColumnRefContext | null {
        return this.getRuleContext(0, ColumnRefContext);
    }
    public KW_RENAME(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_RENAME, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TO, 0);
    }
    public tableNameCreate(): TableNameCreateContext | null {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    public KW_SET(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_SET, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_IF(): antlr.TerminalNode[];
    public KW_IF(i: number): antlr.TerminalNode | null;
    public KW_IF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_IF);
    	} else {
    		return this.getToken(GenericSqlParser.KW_IF, i);
    	}
    }
    public KW_EXISTS(): antlr.TerminalNode[];
    public KW_EXISTS(i: number): antlr.TerminalNode | null;
    public KW_EXISTS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.KW_EXISTS);
    	} else {
    		return this.getToken(GenericSqlParser.KW_EXISTS, i);
    	}
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_alterTableStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterAlterTableStatement) {
             listener.enterAlterTableStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitAlterTableStatement) {
             listener.exitAlterTableStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitAlterTableStatement) {
            return visitor.visitAlterTableStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropTableStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_DROP, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_TABLE, 0)!;
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_dropTableStatement;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDropTableStatement) {
             listener.enterDropTableStatement(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDropTableStatement) {
             listener.exitDropTableStatement(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDropTableStatement) {
            return visitor.visitDropTableStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_expression;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class OrExpressionContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_OR(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_OR, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterOrExpression) {
             listener.enterOrExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitOrExpression) {
             listener.exitOrExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndExpressionContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_AND, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterAndExpression) {
             listener.enterAndExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitAndExpression) {
             listener.exitAndExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public predicatedExpression(): PredicatedExpressionContext {
        return this.getRuleContext(0, PredicatedExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterPredicated) {
             listener.enterPredicated(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitPredicated) {
             listener.exitPredicated(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExpressionContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNotExpression) {
             listener.enterNotExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNotExpression) {
             listener.exitNotExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicatedExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public predicate(): PredicateContext | null {
        return this.getRuleContext(0, PredicateContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_predicatedExpression;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterPredicatedExpression) {
             listener.enterPredicatedExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitPredicatedExpression) {
             listener.exitPredicatedExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitPredicatedExpression) {
            return visitor.visitPredicatedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_predicate;
    }
    public override copyFrom(ctx: PredicateContext): void {
        super.copyFrom(ctx);
    }
}
export class ComparisonPredicateContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterComparisonPredicate) {
             listener.enterComparisonPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitComparisonPredicate) {
             listener.exitComparisonPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitComparisonPredicate) {
            return visitor.visitComparisonPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_IN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterInPredicate) {
             listener.enterInPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitInPredicate) {
             listener.exitInPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitInPredicate) {
            return visitor.visitInPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InSubqueryPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_IN, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterInSubqueryPredicate) {
             listener.enterInSubqueryPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitInSubqueryPredicate) {
             listener.exitInSubqueryPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitInSubqueryPredicate) {
            return visitor.visitInSubqueryPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenPredicateContext extends PredicateContext {
    public _lower?: ValueExpressionContext;
    public _upper?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_BETWEEN, 0)!;
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_AND, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterBetweenPredicate) {
             listener.enterBetweenPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitBetweenPredicate) {
             listener.exitBetweenPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitBetweenPredicate) {
            return visitor.visitBetweenPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikePredicateContext extends PredicateContext {
    public _pattern?: ValueExpressionContext;
    public _escape?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_LIKE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterLikePredicate) {
             listener.enterLikePredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitLikePredicate) {
             listener.exitLikePredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_IS, 0)!;
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_NULL, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNullPredicate) {
             listener.enterNullPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNullPredicate) {
             listener.exitNullPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNullPredicate) {
            return visitor.visitNullPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DistinctFromPredicateContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_IS, 0)!;
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_DISTINCT, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDistinctFromPredicate) {
             listener.enterDistinctFromPredicate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDistinctFromPredicate) {
             listener.exitDistinctFromPredicate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDistinctFromPredicate) {
            return visitor.visitDistinctFromPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.NEQ, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.LT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.LTE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.GT, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.GTE, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenationContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONCAT(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.CONCAT, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterConcatenation) {
             listener.enterConcatenation(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitConcatenation) {
             listener.exitConcatenation(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _operator?: Token | null;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.MINUS, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.PLUS, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class SubqueryExpressionDefaultContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public subqueryExpression(): SubqueryExpressionContext {
        return this.getRuleContext(0, SubqueryExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSubqueryExpressionDefault) {
             listener.enterSubqueryExpressionDefault(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSubqueryExpressionDefault) {
             listener.exitSubqueryExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpressionDefault) {
            return visitor.visitSubqueryExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_CAST, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_AS, 0)!;
    }
    public dataType(): DataTypeContext {
        return this.getRuleContext(0, DataTypeContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterCastExpression) {
             listener.enterCastExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitCastExpression) {
             listener.exitCastExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CoalesceExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_COALESCE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_COALESCE, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterCoalesceExpression) {
             listener.enterCoalesceExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitCoalesceExpression) {
             listener.exitCoalesceExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitCoalesceExpression) {
            return visitor.visitCoalesceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterColumnReference) {
             listener.enterColumnReference(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitColumnReference) {
             listener.exitColumnReference(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterExistsExpression) {
             listener.enterExistsExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitExistsExpression) {
             listener.exitExistsExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitExistsExpression) {
            return visitor.visitExistsExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSearchedCaseExpression) {
             listener.enterSearchedCaseExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSearchedCaseExpression) {
             listener.exitSearchedCaseExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSearchedCaseExpression) {
            return visitor.visitSearchedCaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullIfExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NULLIF(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_NULLIF, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNullIfExpression) {
             listener.enterNullIfExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNullIfExpression) {
             listener.exitNullIfExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNullIfExpression) {
            return visitor.visitNullIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_CASE, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ELSE, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSimpleCaseExpression) {
             listener.enterSimpleCaseExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSimpleCaseExpression) {
             listener.exitSimpleCaseExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSimpleCaseExpression) {
            return visitor.visitSimpleCaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenClauseContext extends antlr.ParserRuleContext {
    public _condition?: ExpressionContext;
    public _result?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_WHEN, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_THEN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_whenClause;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterWhenClause) {
             listener.enterWhenClause(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitWhenClause) {
             listener.exitWhenClause(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubqueryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_subqueryExpression;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataTypeContext extends antlr.ParserRuleContext {
    public _precision?: Token | null;
    public _scale?: Token | null;
    public _maxLength?: Token | null;
    public _length?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BOOLEAN, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TINYINT, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_SMALLINT, 0);
    }
    public KW_INT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_INTEGER, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BIGINT, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FLOAT, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DOUBLE, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DECIMAL, 0);
    }
    public INTEGER_VALUE(): antlr.TerminalNode[];
    public INTEGER_VALUE(i: number): antlr.TerminalNode | null;
    public INTEGER_VALUE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GenericSqlParser.INTEGER_VALUE);
    	} else {
    		return this.getToken(GenericSqlParser.INTEGER_VALUE, i);
    	}
    }
    public KW_NUMERIC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NUMERIC, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_VARCHAR, 0);
    }
    public KW_CHAR(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CHAR, 0);
    }
    public KW_TEXT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TEXT, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DATE, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_BINARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BINARY, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_VARBINARY, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_dataType;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDataType) {
             listener.enterDataType(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDataType) {
             listener.exitDataType(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDataType) {
            return visitor.visitDataType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_properties;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterProperties) {
             listener.enterProperties(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitProperties) {
             listener.exitProperties(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitProperties) {
            return visitor.visitProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.EQ, 0)!;
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_property;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_literal;
    }
    public override copyFrom(ctx: LiteralContext): void {
        super.copyFrom(ctx);
    }
}
export class BinaryLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BINARY_LITERAL(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.BINARY_LITERAL, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterBinaryLiteral) {
             listener.enterBinaryLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitBinaryLiteral) {
             listener.exitBinaryLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitBinaryLiteral) {
            return visitor.visitBinaryLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecimalLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DECIMAL_VALUE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.DECIMAL_VALUE, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.KW_NULL, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.STRING, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoubleLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOUBLE_VALUE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.DOUBLE_VALUE, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterDoubleLiteral) {
             listener.enterDoubleLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitDoubleLiteral) {
             listener.exitDoubleLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitDoubleLiteral) {
            return visitor.visitDoubleLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER_VALUE(): antlr.TerminalNode {
        return this.getToken(GenericSqlParser.INTEGER_VALUE, 0)!;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterIntegerLiteral) {
             listener.enterIntegerLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitIntegerLiteral) {
             listener.exitIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends LiteralContext {
    public constructor(ctx: LiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FALSE, 0);
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.IDENTIFIER, 0);
    }
    public DIGIT_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.DIGIT_IDENTIFIER, 0);
    }
    public QUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.QUOTED_IDENTIFIER, 0);
    }
    public BACKQUOTED_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.BACKQUOTED_IDENTIFIER, 0);
    }
    public nonReserved(): NonReservedContext | null {
        return this.getRuleContext(0, NonReservedContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_identifier;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_qualifiedName;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_columnRef;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterColumnRef) {
             listener.enterColumnRef(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitColumnRef) {
             listener.exitColumnRef(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitColumnRef) {
            return visitor.visitColumnRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_tableName;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterTableName) {
             listener.enterTableName(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitTableName) {
             listener.exitTableName(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_tableNameCreate;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterTableNameCreate) {
             listener.enterTableNameCreate(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitTableNameCreate) {
             listener.exitTableNameCreate(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitTableNameCreate) {
            return visitor.visitTableNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonReservedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ADD, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ALL, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_ASC, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BIGINT, 0);
    }
    public KW_BINARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BINARY, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BOOLEAN, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_BY, 0);
    }
    public KW_CHAR(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CHAR, 0);
    }
    public KW_COALESCE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_COALESCE, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_COLUMN, 0);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_CROSS, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DATE, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DECIMAL, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DESC, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_DOUBLE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FALSE, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FIRST, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FLOAT, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_FULL, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    public KW_INT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_INTEGER, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_LAST, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_LEFT, 0);
    }
    public KW_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_LIMIT, 0);
    }
    public KW_NULLIF(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NULLIF, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NULLS, 0);
    }
    public KW_NUMERIC(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_NUMERIC, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_OFFSET, 0);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_OUTER, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_RIGHT, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_SMALLINT, 0);
    }
    public KW_TEXT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TEXT, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TINYINT, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TO, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_TRUE, 0);
    }
    public KW_UNIQUE(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_UNIQUE, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_VARCHAR, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode | null {
        return this.getToken(GenericSqlParser.KW_VARBINARY, 0);
    }
    public override get ruleIndex(): number {
        return GenericSqlParser.RULE_nonReserved;
    }
    public override enterRule(listener: GenericSqlListener): void {
        if(listener.enterNonReserved) {
             listener.enterNonReserved(this);
        }
    }
    public override exitRule(listener: GenericSqlListener): void {
        if(listener.exitNonReserved) {
             listener.exitNonReserved(this);
        }
    }
    public override accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null {
        if (visitor.visitNonReserved) {
            return visitor.visitNonReserved(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
