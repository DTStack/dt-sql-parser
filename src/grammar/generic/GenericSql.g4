/**
 * GenericSql.g4
 * 基于 Trino 裁剪，只保留核心 DML 和 DDL 语法
 */

// $antlr-format alignTrailingComments true, columnLimit 160, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

grammar GenericSql;

options {
    caseInsensitive= true;
    superClass= SQLParserBase;
}

@header {
import { SQLParserBase } from '../SQLParserBase';
}

tokens {
    DELIMITER
}

// 入口规则
program
    : statements* EOF
    ;

statements
    : singleStatement
    ;

singleStatement
    : statement SEMICOLON?
    ;

// 语句规则
statement
    : queryStatement       # statementDefault
    | insertStatement      # insert
    | updateStatement      # update
    | deleteStatement      # delete
    | createTableStatement # createTable
    | alterTableStatement  # alterTable
    | dropTableStatement   # dropTable
    ;

// SELECT 语句
queryStatement
    : withClause? queryNoWith
    ;

withClause
    : KW_WITH KW_RECURSIVE? namedQuery (',' namedQuery)*
    ;

namedQuery
    : name=identifier KW_AS '(' queryStatement ')'
    ;

queryNoWith
    : queryTerm ((KW_UNION | KW_INTERSECT | KW_EXCEPT) KW_ALL? queryTerm)*
    ;

queryTerm
    : queryPrimary
    ;

queryPrimary
    : querySpecification
    | '(' queryStatement ')'
    ;

querySpecification
    : KW_SELECT setQuantifier? selectItem (',' selectItem)* fromClause? whereClause? groupByClause? havingClause? orderByClause? limitClause?
    ;

setQuantifier
    : KW_DISTINCT
    | KW_ALL
    ;

selectItem
    : expression (KW_AS? identifier)?        # selectExpressionElement
    | qualifiedName '.' ASTERISK             # selectStarElement
    | ASTERISK                               # selectAllElement
    | {this.shouldMatchEmpty()}? emptyColumn # selectEmptyElement
    ;

fromClause
    : KW_FROM relation (',' relation)*
    ;

relation
    : left=relation joinType KW_JOIN right=relation KW_ON condition=expression # joinRelation
    | aliasedRelation                                                          # simpleRelation
    ;

joinType
    : KW_INNER?
    | KW_LEFT KW_OUTER?
    | KW_RIGHT KW_OUTER?
    | KW_FULL KW_OUTER?
    | KW_CROSS
    ;

aliasedRelation
    : relationPrimary (KW_AS? identifier)?
    ;

relationPrimary
    : tableName              # tableNameRelation
    | '(' queryStatement ')' # subqueryRelation
    ;

whereClause
    : KW_WHERE (expression | emptyColumn)
    ;

groupByClause
    : KW_GROUP KW_BY setQuantifier? expression (',' expression)*
    ;

havingClause
    : KW_HAVING (expression | emptyColumn)
    ;

orderByClause
    : KW_ORDER KW_BY sortItem (',' sortItem)*
    ;

sortItem
    : expression ordering=(KW_ASC | KW_DESC)? (KW_NULLS nullOrdering=(KW_FIRST | KW_LAST))?
    ;

limitClause
    : KW_LIMIT limit=expression (KW_OFFSET offset=expression)?
    ;

// INSERT 语句
insertStatement
    : KW_INSERT KW_INTO tableName columnList? queryStatement
    ;

columnList
    : '(' columnRef (',' columnRef)* ')'
    ;

// UPDATE 语句
updateStatement
    : KW_UPDATE tableName KW_SET updateAssignment (',' updateAssignment)* whereClause?
    ;

updateAssignment
    : columnRef EQ expression
    ;

// DELETE 语句
deleteStatement
    : KW_DELETE KW_FROM tableName whereClause?
    ;

// CREATE TABLE 语句
createTableStatement
    : KW_CREATE KW_TABLE (KW_IF KW_NOT KW_EXISTS)? tableNameCreate '(' tableElement (',' tableElement)* ')' (
        KW_WITH properties
    )?
    ;

tableElement
    : columnDefinition
    | tableConstraint
    ;

columnDefinition
    : columnRefCreate colType=dataType (KW_NOT KW_NULL)? (KW_DEFAULT expression)? (KW_PRIMARY KW_KEY)?
    ;

columnRefCreate
    : identifier
    ;

tableConstraint
    : (KW_CONSTRAINT identifier)? (
        KW_PRIMARY KW_KEY '(' columnRef (',' columnRef)* ')'
        | KW_UNIQUE '(' columnRef (',' columnRef)* ')'
        | KW_CHECK '(' expression ')'
        | KW_FOREIGN KW_KEY '(' columnRef (',' columnRef)* ')' KW_REFERENCES tableName '(' columnRef (
            ',' columnRef
        )* ')'
    )
    ;

// ALTER TABLE 语句
alterTableStatement
    : KW_ALTER KW_TABLE (KW_IF KW_EXISTS)? tableName (
        KW_ADD KW_COLUMN (KW_IF KW_NOT KW_EXISTS)? columnDefinition
        | KW_DROP KW_COLUMN (KW_IF KW_EXISTS)? columnRef
        | KW_RENAME KW_TO tableNameCreate
        | KW_ALTER KW_COLUMN columnRef KW_SET KW_DEFAULT expression
        | KW_ALTER KW_COLUMN columnRef KW_DROP KW_DEFAULT
    )
    ;

// DROP TABLE 语句
dropTableStatement
    : KW_DROP KW_TABLE (KW_IF KW_EXISTS)? tableName
    ;

// 表达式规则
expression
    : booleanExpression
    ;

booleanExpression
    : predicatedExpression                                  # predicated
    | KW_NOT booleanExpression                              # notExpression
    | left=booleanExpression KW_AND right=booleanExpression # andExpression
    | left=booleanExpression KW_OR right=booleanExpression  # orExpression
    ;

predicatedExpression
    : valueExpression predicate?
    ;

predicate
    : comparisonOperator right=valueExpression                                    # comparisonPredicate
    | KW_NOT? KW_IN '(' expression (',' expression)* ')'                          # inPredicate
    | KW_NOT? KW_IN '(' queryStatement ')'                                        # inSubqueryPredicate
    | KW_NOT? KW_BETWEEN lower=valueExpression KW_AND upper=valueExpression       # betweenPredicate
    | KW_NOT? KW_LIKE pattern=valueExpression (KW_ESCAPE escape=valueExpression)? # likePredicate
    | KW_IS KW_NOT? KW_NULL                                                       # nullPredicate
    | KW_IS KW_NOT? KW_DISTINCT KW_FROM right=valueExpression                     # distinctFromPredicate
    ;

comparisonOperator
    : EQ
    | NEQ
    | LT
    | LTE
    | GT
    | GTE
    ;

valueExpression
    : primaryExpression                                                                # valueExpressionDefault
    | operator=(MINUS | PLUS) valueExpression                                          # arithmeticUnary
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT) right=valueExpression # arithmeticBinary
    | left=valueExpression operator=(PLUS | MINUS) right=valueExpression               # arithmeticBinary
    | left=valueExpression CONCAT right=valueExpression                                # concatenation
    ;

primaryExpression
    : literal                                                             # literalExpression
    | functionName '(' (setQuantifier? expression (',' expression)*)? ')' # functionCall
    | KW_CASE whenClause+ (KW_ELSE expression)? KW_END                    # searchedCaseExpression
    | KW_CASE expression whenClause+ (KW_ELSE expression)? KW_END         # simpleCaseExpression
    | KW_CAST '(' expression KW_AS dataType ')'                           # castExpression
    | KW_COALESCE '(' expression (',' expression)* ')'                    # coalesceExpression
    | KW_NULLIF '(' valueExpression ',' valueExpression ')'               # nullIfExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    | KW_EXISTS '(' queryStatement ')'                                    # existsExpression
    | subqueryExpression                                                  # subqueryExpressionDefault
    | columnName                                                          # columnReference
    ;

whenClause
    : KW_WHEN condition=expression KW_THEN result=expression
    ;

subqueryExpression
    : '(' queryStatement ')'
    ;

// 数据类型
dataType
    : KW_BOOLEAN
    | KW_TINYINT
    | KW_SMALLINT
    | KW_INT
    | KW_INTEGER
    | KW_BIGINT
    | KW_FLOAT
    | KW_DOUBLE
    | KW_DECIMAL ('(' precision=INTEGER_VALUE (',' scale=INTEGER_VALUE)? ')')?
    | KW_NUMERIC ('(' precision=INTEGER_VALUE (',' scale=INTEGER_VALUE)? ')')?
    | KW_VARCHAR ('(' maxLength=INTEGER_VALUE ')')?
    | KW_CHAR ('(' length=INTEGER_VALUE ')')?
    | KW_TEXT
    | KW_DATE
    | KW_TIME
    | KW_TIMESTAMP
    | KW_BINARY
    | KW_VARBINARY
    ;

// 属性
properties
    : '(' property (',' property)* ')'
    ;

property
    : identifier EQ literal
    ;

// 字面量
literal
    : KW_NULL        # nullLiteral
    | KW_TRUE        # booleanLiteral
    | KW_FALSE       # booleanLiteral
    | INTEGER_VALUE  # integerLiteral
    | DECIMAL_VALUE  # decimalLiteral
    | DOUBLE_VALUE   # doubleLiteral
    | STRING         # stringLiteral
    | BINARY_LITERAL # binaryLiteral
    ;

// 标识符
identifier
    : IDENTIFIER
    | DIGIT_IDENTIFIER
    | QUOTED_IDENTIFIER
    | BACKQUOTED_IDENTIFIER
    | nonReserved
    ;

qualifiedName
    : identifier ('.' identifier)*
    ;

columnRef
    : identifier
    | {this.shouldMatchEmpty()}? emptyColumn
    ;

columnName
    : qualifiedName
    ;

emptyColumn
    :
    ;

tableName
    : qualifiedName
    ;

tableNameCreate
    : qualifiedName
    ;

functionName
    : qualifiedName
    ;

// 非保留关键字 — 可以用作标识符的关键字
// 核心结构关键字 (SELECT, FROM, WHERE, CREATE, TABLE, INSERT, UPDATE, DELETE, DROP, ALTER, SET 等) 是保留的，不能用作标识符
nonReserved
    : KW_ADD
    | KW_ALL
    | KW_ASC
    | KW_BIGINT
    | KW_BINARY
    | KW_BOOLEAN
    | KW_BY
    | KW_CHAR
    | KW_COALESCE
    | KW_COLUMN
    | KW_CROSS
    | KW_DATE
    | KW_DECIMAL
    | KW_DEFAULT
    | KW_DESC
    | KW_DOUBLE
    | KW_FALSE
    | KW_FIRST
    | KW_FLOAT
    | KW_FULL
    | KW_IF
    | KW_INT
    | KW_INTEGER
    | KW_KEY
    | KW_LAST
    | KW_LEFT
    | KW_LIMIT
    | KW_NULLIF
    | KW_NULLS
    | KW_NUMERIC
    | KW_OFFSET
    | KW_OUTER
    | KW_RIGHT
    | KW_SMALLINT
    | KW_TEXT
    | KW_TIME
    | KW_TIMESTAMP
    | KW_TINYINT
    | KW_TO
    | KW_TRUE
    | KW_UNIQUE
    | KW_VARCHAR
    | KW_VARBINARY
    ;

// 关键字定义
KW_ADD
    : 'ADD'
    ;

KW_ALL
    : 'ALL'
    ;

KW_ALTER
    : 'ALTER'
    ;

KW_AND
    : 'AND'
    ;

KW_AS
    : 'AS'
    ;

KW_ASC
    : 'ASC'
    ;

KW_BETWEEN
    : 'BETWEEN'
    ;

KW_BIGINT
    : 'BIGINT'
    ;

KW_BINARY
    : 'BINARY'
    ;

KW_BOOLEAN
    : 'BOOLEAN'
    ;

KW_BY
    : 'BY'
    ;

KW_CASE
    : 'CASE'
    ;

KW_CAST
    : 'CAST'
    ;

KW_CHAR
    : 'CHAR'
    ;

KW_CHECK
    : 'CHECK'
    ;

KW_COALESCE
    : 'COALESCE'
    ;

KW_COLUMN
    : 'COLUMN'
    ;

KW_CONSTRAINT
    : 'CONSTRAINT'
    ;

KW_CREATE
    : 'CREATE'
    ;

KW_CROSS
    : 'CROSS'
    ;

KW_DATE
    : 'DATE'
    ;

KW_DECIMAL
    : 'DECIMAL'
    ;

KW_DEFAULT
    : 'DEFAULT'
    ;

KW_DELETE
    : 'DELETE'
    ;

KW_DESC
    : 'DESC'
    ;

KW_DISTINCT
    : 'DISTINCT'
    ;

KW_DOUBLE
    : 'DOUBLE'
    ;

KW_DROP
    : 'DROP'
    ;

KW_ELSE
    : 'ELSE'
    ;

KW_END
    : 'END'
    ;

KW_ESCAPE
    : 'ESCAPE'
    ;

KW_EXCEPT
    : 'EXCEPT'
    ;

KW_EXISTS
    : 'EXISTS'
    ;

KW_FALSE
    : 'FALSE'
    ;

KW_FIRST
    : 'FIRST'
    ;

KW_FLOAT
    : 'FLOAT'
    ;

KW_FOREIGN
    : 'FOREIGN'
    ;

KW_FROM
    : 'FROM'
    ;

KW_FULL
    : 'FULL'
    ;

KW_GROUP
    : 'GROUP'
    ;

KW_HAVING
    : 'HAVING'
    ;

KW_IF
    : 'IF'
    ;

KW_IN
    : 'IN'
    ;

KW_INNER
    : 'INNER'
    ;

KW_INSERT
    : 'INSERT'
    ;

KW_INT
    : 'INT'
    ;

KW_INTEGER
    : 'INTEGER'
    ;

KW_INTERSECT
    : 'INTERSECT'
    ;

KW_INTO
    : 'INTO'
    ;

KW_IS
    : 'IS'
    ;

KW_JOIN
    : 'JOIN'
    ;

KW_KEY
    : 'KEY'
    ;

KW_LAST
    : 'LAST'
    ;

KW_LEFT
    : 'LEFT'
    ;

KW_LIKE
    : 'LIKE'
    ;

KW_LIMIT
    : 'LIMIT'
    ;

KW_NOT
    : 'NOT'
    ;

KW_NULL
    : 'NULL'
    ;

KW_NULLIF
    : 'NULLIF'
    ;

KW_NULLS
    : 'NULLS'
    ;

KW_NUMERIC
    : 'NUMERIC'
    ;

KW_OFFSET
    : 'OFFSET'
    ;

KW_ON
    : 'ON'
    ;

KW_OR
    : 'OR'
    ;

KW_ORDER
    : 'ORDER'
    ;

KW_OUTER
    : 'OUTER'
    ;

KW_PRIMARY
    : 'PRIMARY'
    ;

KW_RECURSIVE
    : 'RECURSIVE'
    ;

KW_REFERENCES
    : 'REFERENCES'
    ;

KW_RENAME
    : 'RENAME'
    ;

KW_RIGHT
    : 'RIGHT'
    ;

KW_SELECT
    : 'SELECT'
    ;

KW_SET
    : 'SET'
    ;

KW_SMALLINT
    : 'SMALLINT'
    ;

KW_TABLE
    : 'TABLE'
    ;

KW_TEXT
    : 'TEXT'
    ;

KW_THEN
    : 'THEN'
    ;

KW_TIME
    : 'TIME'
    ;

KW_TIMESTAMP
    : 'TIMESTAMP'
    ;

KW_TINYINT
    : 'TINYINT'
    ;

KW_TO
    : 'TO'
    ;

KW_TRUE
    : 'TRUE'
    ;

KW_UNION
    : 'UNION'
    ;

KW_UNIQUE
    : 'UNIQUE'
    ;

KW_UPDATE
    : 'UPDATE'
    ;

KW_VARCHAR
    : 'VARCHAR'
    ;

KW_VARBINARY
    : 'VARBINARY'
    ;

KW_WHEN
    : 'WHEN'
    ;

KW_WHERE
    : 'WHERE'
    ;

KW_WITH
    : 'WITH'
    ;

// 运算符
EQ
    : '='
    ;

NEQ
    : '<>'
    | '!='
    ;

LT
    : '<'
    ;

LTE
    : '<='
    ;

GT
    : '>'
    ;

GTE
    : '>='
    ;

PLUS
    : '+'
    ;

MINUS
    : '-'
    ;

ASTERISK
    : '*'
    ;

SLASH
    : '/'
    ;

PERCENT
    : '%'
    ;

CONCAT
    : '||'
    ;

QUESTION_MARK
    : '?'
    ;

SEMICOLON
    : ';'
    ;

// 字面量
STRING
    : '\'' (~'\'' | '\'\'')* '\''
    ;

BINARY_LITERAL
    : 'X\'' (~'\'')* '\''
    ;

INTEGER_VALUE
    : DECIMAL_INTEGER
    | HEXADECIMAL_INTEGER
    | OCTAL_INTEGER
    | BINARY_INTEGER
    ;

DECIMAL_VALUE
    : DECIMAL_INTEGER '.' DECIMAL_INTEGER?
    | '.' DECIMAL_INTEGER
    ;

DOUBLE_VALUE
    : DIGIT+ ('.' DIGIT*)? EXPONENT
    | '.' DIGIT+ EXPONENT
    ;

// 标识符
IDENTIFIER
    : (LETTER | '_') (LETTER | DIGIT | '_')*
    ;

DIGIT_IDENTIFIER
    : DIGIT (LETTER | DIGIT | '_')+
    ;

QUOTED_IDENTIFIER
    : '"' (~'"' | '""')* '"'
    ;

BACKQUOTED_IDENTIFIER
    : '`' (~'`' | '``')* '`'
    ;

// 片段规则
fragment DECIMAL_INTEGER
    : DIGIT ('_'? DIGIT)*
    ;

fragment HEXADECIMAL_INTEGER
    : '0X' ('_'? (DIGIT | [A-F]))+
    ;

fragment OCTAL_INTEGER
    : '0O' ('_'? [0-7])+
    ;

fragment BINARY_INTEGER
    : '0B' ('_'? [01])+
    ;

fragment EXPONENT
    : 'E' [+-]? DIGIT+
    ;

fragment DIGIT
    : [0-9]
    ;

fragment LETTER
    : [A-Z]
    ;

// 注释和空白
LINE_COMMENT
    : '--' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN)
    ;

BRACKETED_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WHITE_SPACE
    : (' ' | '\t' | '\r' | '\n') -> channel(HIDDEN)
    ;

// 未识别字符
UNRECOGNIZED
    : .
    ;