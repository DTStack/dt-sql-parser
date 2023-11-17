/*
 * [The "MIT license"]
 * Copyright (C) 2014 Sam Harwell, Tunnel Vision Laboratories, LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * 1. The above copyright notice and this permission notice shall be included in
 *    all copies or substantial portions of the Software.
 * 2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *    DEALINGS IN THE SOFTWARE.
 * 3. Except as contained in this notice, the name of Tunnel Vision
 *    Laboratories, LLC. shall not be used in advertising or otherwise to
 *    promote the sale, use or other dealings in this Software without prior
 *    written authorization from Tunnel Vision Laboratories, LLC.
 */


/**
 * This file is an adaptation of antlr's sql/postgresql/PostgreSQLLexer.g4 grammar.
 * Reference: https://github.com/antlr/grammars-v4/blob/master/sql/postgresql/PostgreSQLLexer.g4
 */

lexer grammar PostgreSQLLexer;

/**
 * Reference Doc: https://www.postgresql.org/docs/16.1/sql-commands.html
 */
// SPECIAL CHARACTERS (4.1.4)

//

// Note that Asterisk is a valid operator, but does not have the type Operator due to its syntactic use in locations

// that are not expressions.

Dollar: '$';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';
COMMA: ',';
SEMI: ';';
COLON: ':';
STAR: '*';
EQUAL: '=';
DOT: '.';
//NamedArgument	: ':=';
PLUS: '+';
MINUS: '-';
SLASH: '/';
CARET: '^';
LT: '<';
GT: '>';
LESS_LESS: '<<';
GREATER_GREATER: '>>';
COLON_EQUALS: ':=';
LESS_EQUALS: '<=';
EQUALS_GREATER: '=>';
GREATER_EQUALS: '>=';
DOT_DOT: '..';
NOT_EQUALS: '<>';
TYPECAST: '::';
PERCENT: '%';
PARAM: '$' ([0-9])+;
//

// OPERATORS (4.1.3)

//

// this rule does not allow + or - at the end of a multi-character operator

Operator: (
		(
			OperatorCharacter
			| ('+' | '-')+ (
				OperatorCharacter
				| '/' ?
			)
			| '/'
		)+
		| // special handling for the single-character operators + and -
		[+-]
	)
	//TODO somehow rewrite this part without using Actions
	;

OperatorEndingWithPlusMinus: (
		OperatorCharacterNotAllowPlusMinusAtEnd
		| '-'
		| '/'
	)* OperatorCharacterAllowPlusMinusAtEnd Operator? (
		'+'
		| '-'
	)+ -> type (Operator);
// Each of the following fragment rules omits the +, -, and / characters, which must always be handled in a special way

// by the operator rules above.

fragment OperatorCharacter: [*<>=~!@%^&|`?#];
// these are the operator characters that don't count towards one ending with + or -

fragment OperatorCharacterNotAllowPlusMinusAtEnd: [*<>=+];
// an operator may end with + or - if it contains one of these characters

fragment OperatorCharacterAllowPlusMinusAtEnd: [~!@%^&|`?#];
//

// KEYWORDS (Appendix C)

//

//

// reserved keywords

//

KW_ALL: 'ALL';
KW_ANALYSE: 'ANALYSE';
KW_ANALYZE: 'ANALYZE';
KW_AND: 'AND';
KW_ANY: 'ANY';
KW_ARRAY: 'ARRAY';
KW_AS: 'AS';
KW_ASC: 'ASC';
KW_ASYMMETRIC: 'ASYMMETRIC';
KW_BOTH: 'BOTH';
KW_CASE: 'CASE';
KW_CAST: 'CAST';
KW_CHECK: 'CHECK';
KW_COLLATE: 'COLLATE';
KW_COLUMN: 'COLUMN';
KW_CONSTRAINT: 'CONSTRAINT';
KW_CREATE: 'CREATE';
KW_CURRENT_CATALOG: 'CURRENT_CATALOG';
KW_CURRENT_DATE: 'CURRENT_DATE';
KW_CURRENT_ROLE: 'CURRENT_ROLE';
KW_CURRENT_TIME: 'CURRENT_TIME';
KW_CURRENT_TIMESTAMP: 'CURRENT_TIMESTAMP';
KW_CURRENT_USER: 'CURRENT_USER';
KW_DEFAULT: 'DEFAULT';
KW_DEFERRABLE: 'DEFERRABLE';
KW_DESC: 'DESC';
KW_DISTINCT: 'DISTINCT';
KW_DO: 'DO';
KW_ELSE: 'ELSE';
KW_EXCEPT: 'EXCEPT';
KW_FALSE: 'FALSE';
KW_FETCH: 'FETCH';
KW_FOR: 'FOR';
KW_FOREIGN: 'FOREIGN';
KW_FROM: 'FROM';
KW_GRANT: 'GRANT';
KW_GROUP: 'GROUP';
KW_HAVING: 'HAVING';
KW_IN: 'IN';
KW_INITIALLY: 'INITIALLY';
KW_INTERSECT: 'INTERSECT';
KW_INTO: 'INTO';
KW_LATERAL: 'LATERAL';
KW_LEADING: 'LEADING';
KW_LIMIT: 'LIMIT';
KW_LOCALTIME: 'LOCALTIME';
KW_LOCALTIMESTAMP: 'LOCALTIMESTAMP';
KW_NOT: 'NOT';
KW_NULL: 'NULL';
KW_OFFSET: 'OFFSET';
KW_ON: 'ON';
KW_ONLY: 'ONLY';
KW_OR: 'OR';
KW_ORDER: 'ORDER';
KW_PLACING: 'PLACING';
KW_PRIMARY: 'PRIMARY';
KW_REFERENCES: 'REFERENCES';
KW_RETURNING: 'RETURNING';
KW_SELECT: 'SELECT';
KW_SESSION_USER: 'SESSION_USER';
KW_SOME: 'SOME';
KW_SYMMETRIC: 'SYMMETRIC';
KW_TABLE: 'TABLE';
KW_THEN: 'THEN';
KW_TO: 'TO';
KW_TRAILING: 'TRAILING';
KW_TRUE: 'TRUE';
KW_UNION: 'UNION';
KW_UNIQUE: 'UNIQUE';
KW_USER: 'USER';
KW_USING: 'USING';
KW_VARIADIC: 'VARIADIC';
KW_WHEN: 'WHEN';
KW_WHERE: 'WHERE';
KW_WINDOW: 'WINDOW';
KW_WITH: 'WITH';
//

// reserved keywords (can be function or type)

//

KW_AUTHORIZATION: 'AUTHORIZATION';
KW_BINARY: 'BINARY';
KW_COLLATION: 'COLLATION';
KW_CONCURRENTLY: 'CONCURRENTLY';
KW_CROSS: 'CROSS';
KW_CURRENT_SCHEMA: 'CURRENT_SCHEMA';
KW_FREEZE: 'FREEZE';
KW_FULL: 'FULL';
KW_ILIKE: 'ILIKE';
KW_INNER: 'INNER';
KW_IS: 'IS';
KW_ISNULL: 'ISNULL';
KW_JOIN: 'JOIN';
KW_LEFT: 'LEFT';
KW_LIKE: 'LIKE';
KW_NATURAL: 'NATURAL';
KW_NOTNULL: 'NOTNULL';
KW_OUTER: 'OUTER';
KW_OVER: 'OVER';
KW_OVERLAPS: 'OVERLAPS';
KW_RIGHT: 'RIGHT';
KW_SIMILAR: 'SIMILAR';
KW_VERBOSE: 'VERBOSE';
//

// non-reserved keywords

//

KW_ABORT: 'ABORT';
KW_ABSOLUTE: 'ABSOLUTE';
KW_ACCESS: 'ACCESS';
KW_ACTION: 'ACTION';
KW_ADD: 'ADD';
KW_ADMIN: 'ADMIN';
KW_AFTER: 'AFTER';
KW_AGGREGATE: 'AGGREGATE';
KW_ALSO: 'ALSO';
KW_ALTER: 'ALTER';
KW_ALWAYS: 'ALWAYS';
KW_ASSERTION: 'ASSERTION';
KW_ASSIGNMENT: 'ASSIGNMENT';
KW_AT: 'AT';
KW_ATTRIBUTE: 'ATTRIBUTE';
KW_BACKWARD: 'BACKWARD';
KW_BEFORE: 'BEFORE';
KW_BEGIN: 'BEGIN';
KW_BY: 'BY';
KW_CACHE: 'CACHE';
KW_CALLED: 'CALLED';
KW_CASCADE: 'CASCADE';
KW_CASCADED: 'CASCADED';
KW_CATALOG: 'CATALOG';
KW_CHAIN: 'CHAIN';
KW_CHARACTERISTICS: 'CHARACTERISTICS';
KW_CHECKPOINT: 'CHECKPOINT';
KW_CLASS: 'CLASS';
KW_CLOSE: 'CLOSE';
KW_CLUSTER: 'CLUSTER';
KW_COMMENT: 'COMMENT';
KW_COMMENTS: 'COMMENTS';
KW_COMMIT: 'COMMIT';
KW_COMMITTED: 'COMMITTED';
KW_CONFIGURATION: 'CONFIGURATION';
KW_CONNECTION: 'CONNECTION';
KW_CONSTRAINTS: 'CONSTRAINTS';
KW_CONTENT: 'CONTENT';
KW_CONTINUE: 'CONTINUE';
KW_CONVERSION: 'CONVERSION';
KW_COPY: 'COPY';
KW_COST: 'COST';
KW_CSV: 'CSV';
KW_CURSOR: 'CURSOR';
KW_CYCLE: 'CYCLE';
KW_DATA: 'DATA';
KW_DATABASE: 'DATABASE';
KW_DAY: 'DAY';
KW_DEALLOCATE: 'DEALLOCATE';
KW_DECLARE: 'DECLARE';
KW_DEFAULTS: 'DEFAULTS';
KW_DEFERRED: 'DEFERRED';
KW_DEFINER: 'DEFINER';
KW_DELETE: 'DELETE';
KW_DELIMITER: 'DELIMITER';
KW_DELIMITERS: 'DELIMITERS';
KW_DICTIONARY: 'DICTIONARY';
KW_DISABLE: 'DISABLE';
KW_DISCARD: 'DISCARD';
KW_DOCUMENT: 'DOCUMENT';
KW_DOMAIN: 'DOMAIN';
KW_DOUBLE: 'DOUBLE';
KW_DROP: 'DROP';
KW_EACH: 'EACH';
KW_ENABLE: 'ENABLE';
KW_ENCODING: 'ENCODING';
KW_ENCRYPTED: 'ENCRYPTED';
KW_ENUM: 'ENUM';
KW_ESCAPE: 'ESCAPE';
KW_EVENT: 'EVENT';
KW_EXCLUDE: 'EXCLUDE';
KW_EXCLUDING: 'EXCLUDING';
KW_EXCLUSIVE: 'EXCLUSIVE';
KW_EXECUTE: 'EXECUTE';
KW_EXPLAIN: 'EXPLAIN';
KW_EXTENSION: 'EXTENSION';
KW_EXTERNAL: 'EXTERNAL';
KW_FAMILY: 'FAMILY';
KW_FIRST: 'FIRST';
KW_FOLLOWING: 'FOLLOWING';
KW_FORCE: 'FORCE';
KW_FORWARD: 'FORWARD';
KW_FUNCTION: 'FUNCTION';
KW_FUNCTIONS: 'FUNCTIONS';
KW_GLOBAL: 'GLOBAL';
KW_GRANTED: 'GRANTED';
KW_HANDLER: 'HANDLER';
KW_HEADER: 'HEADER';
KW_HOLD: 'HOLD';
KW_HOUR: 'HOUR';
KW_IDENTITY: 'IDENTITY';
KW_IF: 'IF';
KW_IMMEDIATE: 'IMMEDIATE';
KW_IMMUTABLE: 'IMMUTABLE';
KW_IMPLICIT: 'IMPLICIT';
KW_INCLUDING: 'INCLUDING';
KW_INCREMENT: 'INCREMENT';
KW_INDEX: 'INDEX';
KW_INDEXES: 'INDEXES';
KW_INHERIT: 'INHERIT';
KW_NOINHERIT: 'NOINHERIT';
KW_SUPERUSER: 'SUPERUSER';
KW_NOSUPERUSER: 'NOSUPERUSER';
KW_CREATEDB: 'CREATEDB';
KW_NOCREATEDB: 'NOCREATEDB';
KW_CREATEROLE: 'CREATEROLE';
KW_NOCREATEROLE: 'NOCREATEROLE';
KW_CREATEUSER: 'CREATEUSER';
KW_NOCREATEUSER: 'NOCREATEUSER';
KW_INHERITS: 'INHERITS';
KW_INLINE: 'INLINE';
KW_INSENSITIVE: 'INSENSITIVE';
KW_INSERT: 'INSERT';
KW_INSTEAD: 'INSTEAD';
KW_INVOKER: 'INVOKER';
KW_ISOLATION: 'ISOLATION';
KW_KEY: 'KEY';
KW_LABEL: 'LABEL';
KW_LANGUAGE: 'LANGUAGE';
KW_LARGE: 'LARGE';
KW_LAST: 'LAST';
//LC_COLLATE			: 'LC'_'COLLATE;

//LC_CTYPE			: 'LC'_'CTYPE;
KW_LEAKPROOF: 'LEAKPROOF';
KW_LEVEL: 'LEVEL';
KW_LISTEN: 'LISTEN';
KW_LOAD: 'LOAD';
KW_LOCAL: 'LOCAL';
KW_LOCATION: 'LOCATION';
KW_LOCK: 'LOCK';
KW_MAPPING: 'MAPPING';
KW_MATCH: 'MATCH';
KW_MATERIALIZED: 'MATERIALIZED';
KW_MAXVALUE: 'MAXVALUE';
KW_MINUTE: 'MINUTE';
KW_MINVALUE: 'MINVALUE';
KW_MODE: 'MODE';
KW_MONTH: 'MONTH';
KW_MOVE: 'MOVE';
KW_NAME: 'NAME';
KW_NAMES: 'NAMES';
KW_NEXT: 'NEXT';
KW_NO: 'NO';
KW_NOTHING: 'NOTHING';
KW_NOTIFY: 'NOTIFY';
KW_NOWAIT: 'NOWAIT';
KW_NULLS: 'NULLS';
KW_OBJECT: 'OBJECT';
KW_OF: 'OF';
KW_OFF: 'OFF';
KW_OIDS: 'OIDS';
KW_OPERATOR: 'OPERATOR';
KW_OPTION: 'OPTION';
KW_OPTIONS: 'OPTIONS';
KW_OWNED: 'OWNED';
KW_OWNER: 'OWNER';
KW_PARSER: 'PARSER';
KW_PARTIAL: 'PARTIAL';
KW_PARTITION: 'PARTITION';
KW_PASSING: 'PASSING';
KW_PASSWORD: 'PASSWORD';
KW_PLANS: 'PLANS';
KW_PRECEDING: 'PRECEDING';
KW_PREPARE: 'PREPARE';
KW_PREPARED: 'PREPARED';
KW_PRESERVE: 'PRESERVE';
KW_PRIOR: 'PRIOR';
KW_PRIVILEGES: 'PRIVILEGES';
KW_PROCEDURAL: 'PROCEDURAL';
KW_PROCEDURE: 'PROCEDURE';
KW_PROGRAM: 'PROGRAM';
KW_QUOTE: 'QUOTE';
KW_RANGE: 'RANGE';
KW_READ: 'READ';
KW_REASSIGN: 'REASSIGN';
KW_RECHECK: 'RECHECK';
KW_RECURSIVE: 'RECURSIVE';
KW_REF: 'REF';
KW_REFRESH: 'REFRESH';
KW_REINDEX: 'REINDEX';
KW_RELATIVE: 'RELATIVE';
KW_RELEASE: 'RELEASE';
KW_RENAME: 'RENAME';
KW_REPEATABLE: 'REPEATABLE';
KW_REPLACE: 'REPLACE';
KW_REPLICA: 'REPLICA';
KW_RESET: 'RESET';
KW_RESTART: 'RESTART';
KW_RESTRICT: 'RESTRICT';
KW_RETURNS: 'RETURNS';
KW_REVOKE: 'REVOKE';
KW_ROLE: 'ROLE';
KW_ROLLBACK: 'ROLLBACK';
KW_ROWS: 'ROWS';
KW_RULE: 'RULE';
KW_SAVEPOINT: 'SAVEPOINT';
KW_SCHEMA: 'SCHEMA';
KW_SCROLL: 'SCROLL';
KW_SEARCH: 'SEARCH';
KW_SECOND: 'SECOND';
KW_SECURITY: 'SECURITY';
KW_SEQUENCE: 'SEQUENCE';
KW_SEQUENCES: 'SEQUENCES';
KW_SERIALIZABLE: 'SERIALIZABLE';
KW_SERVER: 'SERVER';
KW_SESSION: 'SESSION';
KW_SET: 'SET';
KW_SHARE: 'SHARE';
KW_SHOW: 'SHOW';
KW_SIMPLE: 'SIMPLE';
KW_SNAPSHOT: 'SNAPSHOT';
KW_STABLE: 'STABLE';
KW_STANDALONE: 'STANDALONE';
KW_START: 'START';
KW_STATEMENT: 'STATEMENT';
KW_STATISTICS: 'STATISTICS';
KW_STDIN: 'STDIN';
KW_STDOUT: 'STDOUT';
KW_STORAGE: 'STORAGE';
KW_STRICT: 'STRICT';
KW_STRIP: 'STRIP';
KW_SYSID: 'SYSID';
KW_SYSTEM: 'SYSTEM';
KW_TABLES: 'TABLES';
KW_TABLESPACE: 'TABLESPACE';
KW_TEMP: 'TEMP';
KW_TEMPLATE: 'TEMPLATE';
KW_TEMPORARY: 'TEMPORARY';
KW_TEXT: 'TEXT';
KW_TRANSACTION: 'TRANSACTION';
KW_TRIGGER: 'TRIGGER';
KW_TRUNCATE: 'TRUNCATE';
KW_TRUSTED: 'TRUSTED';
KW_TYPE: 'TYPE';
KW_TYPES: 'TYPES';
KW_UNBOUNDED: 'UNBOUNDED';
KW_UNCOMMITTED: 'UNCOMMITTED';
KW_UNENCRYPTED: 'UNENCRYPTED';
KW_UNKNOWN: 'UNKNOWN';
KW_UNLISTEN: 'UNLISTEN';
KW_UNLOGGED: 'UNLOGGED';
KW_UNTIL: 'UNTIL';
KW_UPDATE: 'UPDATE';
KW_VACUUM: 'VACUUM';
KW_VALID: 'VALID';
KW_VALIDATE: 'VALIDATE';
KW_VALIDATOR: 'VALIDATOR';
//VALUE				: 'VALUE;

KW_VARYING: 'VARYING';
KW_VERSION: 'VERSION';
KW_VIEW: 'VIEW';
KW_VOLATILE: 'VOLATILE';
KW_WHITESPACE: 'WHITESPACE';
KW_WITHOUT: 'WITHOUT';
KW_WORK: 'WORK';
KW_WRAPPER: 'WRAPPER';
KW_WRITE: 'WRITE';
KW_XML: 'XML';
KW_YEAR: 'YEAR';
KW_YES: 'YES';
KW_ZONE: 'ZONE';
//

// non-reserved keywords (can not be function or type)

//

KW_BETWEEN: 'BETWEEN';
KW_BIGINT: 'BIGINT';
KW_BIT: 'BIT';
KW_BOOLEAN: 'BOOLEAN';
KW_CHAR: 'CHAR';
KW_CHARACTER: 'CHARACTER';
KW_COALESCE: 'COALESCE';
KW_DEC: 'DEC';
KW_DECIMAL: 'DECIMAL';
KW_EXISTS: 'EXISTS';
KW_EXTRACT: 'EXTRACT';
KW_FLOAT: 'FLOAT';
KW_GREATEST: 'GREATEST';
KW_INOUT: 'INOUT';
KW_INT: 'INT';
KW_INTEGER: 'INTEGER';
KW_INTERVAL: 'INTERVAL';
KW_LEAST: 'LEAST';
KW_NATIONAL: 'NATIONAL';
KW_NCHAR: 'NCHAR';
KW_NONE: 'NONE';
KW_NULLIF: 'NULLIF';
KW_NUMERIC: 'NUMERIC';
KW_OVERLAY: 'OVERLAY';
KW_POSITION: 'POSITION';
KW_PRECISION: 'PRECISION';
KW_REAL: 'REAL';
KW_ROW: 'ROW';
KW_SETOF: 'SETOF';
KW_SMALLINT: 'SMALLINT';
KW_SUBSTRING: 'SUBSTRING';
KW_TIME: 'TIME';
KW_TIMESTAMP: 'TIMESTAMP';
KW_TREAT: 'TREAT';
KW_TRIM: 'TRIM';
KW_VALUES: 'VALUES';
KW_VARCHAR: 'VARCHAR';
KW_XMLATTRIBUTES: 'XMLATTRIBUTES';
KW_XMLCONCAT: 'XMLCONCAT';
KW_XMLELEMENT: 'XMLELEMENT';
KW_XMLEXISTS: 'XMLEXISTS';
KW_XMLFOREST: 'XMLFOREST';
KW_XMLPARSE: 'XMLPARSE';
KW_XMLPI: 'XMLPI';
KW_XMLROOT: 'XMLROOT';
KW_XMLSERIALIZE: 'XMLSERIALIZE';
//MISSED

KW_CALL: 'CALL';
KW_CURRENT: 'CURRENT';
KW_ATTACH: 'ATTACH';
KW_DETACH: 'DETACH';
KW_EXPRESSION: 'EXPRESSION';
KW_GENERATED: 'GENERATED';
KW_LOGGED: 'LOGGED';
KW_STORED: 'STORED';
KW_INCLUDE: 'INCLUDE';
KW_ROUTINE: 'ROUTINE';
KW_TRANSFORM: 'TRANSFORM';
KW_IMPORT: 'IMPORT';
KW_POLICY: 'POLICY';
KW_METHOD: 'METHOD';
KW_REFERENCING: 'REFERENCING';
KW_NEW: 'NEW';
KW_OLD: 'OLD';
KW_VALUE: 'VALUE';
KW_SUBSCRIPTION: 'SUBSCRIPTION';
KW_PUBLICATION: 'PUBLICATION';
KW_OUT: 'OUT';
KW_END: 'END';
KW_ROUTINES: 'ROUTINES';
KW_SCHEMAS: 'SCHEMAS';
KW_PROCEDURES: 'PROCEDURES';
KW_INPUT: 'INPUT';
KW_SUPPORT: 'SUPPORT';
KW_PARALLEL: 'PARALLEL';
KW_SQL: 'SQL';
KW_DEPENDS: 'DEPENDS';
KW_OVERRIDING: 'OVERRIDING';
KW_CONFLICT: 'CONFLICT';
KW_SKIP: 'SKIP';
KW_LOCKED: 'LOCKED';
KW_TIES: 'TIES';
KW_ROLLUP: 'ROLLUP';
KW_CUBE: 'CUBE';
KW_GROUPING: 'GROUPING';
KW_SETS: 'SETS';
KW_TABLESAMPLE: 'TABLESAMPLE';
KW_ORDINALITY: 'ORDINALITY';
KW_XMLTABLE: 'XMLTABLE';
KW_COLUMNS: 'COLUMNS';
KW_XMLNAMESPACES: 'XMLNAMESPACES';
KW_ROWTYPE: 'ROWTYPE';
KW_NORMALIZED: 'NORMALIZED';
KW_WITHIN: 'WITHIN';
KW_FILTER: 'FILTER';
KW_GROUPS: 'GROUPS';
KW_OTHERS: 'OTHERS';
KW_NFC: 'NFC';
KW_NFD: 'NFD';
KW_NFKC: 'NFKC';
KW_NFKD: 'NFKD';
KW_UESCAPE: 'UESCAPE';
KW_VIEWS: 'VIEWS';
KW_NORMALIZE: 'NORMALIZE';
KW_DUMP: 'DUMP';
KW_PRINT_STRICT_PARAMS: 'PRINT_STRICT_PARAMS';
KW_VARIABLE_CONFLICT: 'VARIABLE_CONFLICT';
KW_ERROR: 'ERROR';
KW_USE_VARIABLE: 'USE_VARIABLE';
KW_USE_COLUMN: 'USE_COLUMN';
KW_ALIAS: 'ALIAS';
KW_CONSTANT: 'CONSTANT';
KW_PERFORM: 'PERFORM';
KW_GET: 'GET';
KW_DIAGNOSTICS: 'DIAGNOSTICS';
KW_STACKED: 'STACKED';
KW_ELSIF: 'ELSIF';
KW_WHILE: 'WHILE';
KW_REVERSE: 'REVERSE';
KW_FOREACH: 'FOREACH';
KW_SLICE: 'SLICE';
KW_EXIT: 'EXIT';
KW_RETURN: 'RETURN';
KW_QUERY: 'QUERY';
KW_RAISE: 'RAISE';
KW_SQLSTATE: 'SQLSTATE';
KW_DEBUG: 'DEBUG';
KW_LOG: 'LOG';
KW_INFO: 'INFO';
KW_NOTICE: 'NOTICE';
KW_WARNING: 'WARNING';
KW_EXCEPTION: 'EXCEPTION';
KW_ASSERT: 'ASSERT';
KW_LOOP: 'LOOP';
KW_OPEN: 'OPEN';

//16.x new keywords

KW_PEFERENCES: 'PEFERENCES';
KW_USAGE: 'USAGE';
KW_CONNECT: 'CONNECT';
KW_PUBLIC: 'PUBLIC';
KW_MERGE: 'MERGE';
KW_MATCHED: 'MATCHED';
KW_BREADTH: 'BREADTH';
KW_DEPTH: 'DEPTH';
KW_UNSAFE: 'UNSAFE';
KW_RESTRICTED: 'RESTRICTED';
KW_SAFE: 'SAFE';
KW_FINALIZE: 'FINALIZE';
KW_MODULUS: 'MODULUS';
KW_REMAINDER: 'REMAINDER';
KW_LOGIN: 'LOGIN';
KW_NOLOGIN: 'NOLOGIN';
KW_REPLICATION: 'REPLICATION';
KW_NOREPLICATION: 'NOREPLICATION';
KW_BYPASSRLS: 'BYPASSRLS';
KW_NOBYPASSRLS: 'NOBYPASSRLS';
KW_PERMISSIVE: 'PERMISSIVE';
KW_RESTRICTIVE: 'RESTRICTIVE';
KW_COMPRESSION: 'COMPRESSION';
KW_PLAIN: 'PLAIN';
KW_EXTENDED: 'EXTENDED';
KW_MAIN: 'MAIN';
//

// IDENTIFIERS (4.1.1)

//

Identifier: IdentifierStartChar IdentifierChar*;

fragment IdentifierStartChar: // these are the valid identifier start characters below 0x7F
	[a-zA-Z_]
	| // these are the valid characters from 0x80 to 0xFF
	[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]
	| // these are the letters above 0xFF which only need a single UTF-16 code unit
	[\u0100-\uD7FF\uE000-\uFFFF]
	| // letters which require multiple UTF-16 code units
	[\uD800-\uDBFF] [\uDC00-\uDFFF];

fragment IdentifierChar: StrictIdentifierChar | '$';

fragment StrictIdentifierChar: IdentifierStartChar | [0-9];
/* Quoted Identifiers
 * 
 * These are divided into four separate tokens, allowing distinction of valid quoted identifiers
 * from invalid quoted identifiers without sacrificing the ability of the lexer to reliably recover
 * from lexical errors in the input.
 */

QuotedIdentifier: UnterminatedQuotedIdentifier '"';
// This is a quoted identifier which only contains valid characters but is not terminated

UnterminatedQuotedIdentifier: '"' ('""' | ~ [\u0000"])*;
// This is a quoted identifier which is terminated but contains a \u0000 character

InvalidQuotedIdentifier:
	InvalidUnterminatedQuotedIdentifier '"';
// This is a quoted identifier which is unterminated and contains a \u0000 character

InvalidUnterminatedQuotedIdentifier: '"' ('""' | ~ '"')*;
/* Unicode Quoted Identifiers
 * 
 * These are divided into four separate tokens, allowing distinction of valid Unicode quoted
 * identifiers from invalid Unicode quoted identifiers without sacrificing the ability of the lexer
 * to reliably recover from lexical errors in the input. Note that escape sequences are never
 * checked as part of this determination due to the ability of users to change the escape character
 * with a UESCAPE clause following the Unicode quoted identifier.
 * 
 * TODO: these rules assume "" is still a valid escape sequence within a Unicode quoted identifier.
 */

UnicodeQuotedIdentifier: 'U' '&' QuotedIdentifier;
// This is a Unicode quoted identifier which only contains valid characters but is not terminated

UnterminatedUnicodeQuotedIdentifier:
	'U' '&' UnterminatedQuotedIdentifier;
// This is a Unicode quoted identifier which is terminated but contains a \u0000 character

InvalidUnicodeQuotedIdentifier: 'U' '&' InvalidQuotedIdentifier;
// This is a Unicode quoted identifier which is unterminated and contains a \u0000 character

InvalidUnterminatedUnicodeQuotedIdentifier:
	'U' '&' InvalidUnterminatedQuotedIdentifier;
//

// CONSTANTS (4.1.2)

//

// String Constants (4.1.2.1)

StringConstant: UnterminatedStringConstant '\'';

UnterminatedStringConstant: '\'' ('\'\'' | ~ '\'')*;
// String Constants with C-style Escapes (4.1.2.2)

BeginEscapeStringConstant:
	'E' '\'' -> more, pushMode (EscapeStringConstantMode);
// String Constants with Unicode Escapes (4.1.2.3)

//

//   Note that escape sequences are never checked as part of this token due to the ability of users to change the escape

//   character with a UESCAPE clause following the Unicode string constant.

//

// TODO: these rules assume '' is still a valid escape sequence within a Unicode string constant.

UnicodeEscapeStringConstant:
	UnterminatedUnicodeEscapeStringConstant '\'';

UnterminatedUnicodeEscapeStringConstant:
	'U' '&' UnterminatedStringConstant;
// Dollar-quoted String Constants (4.1.2.4)

BeginDollarStringConstant:
	'$' Tag? '$' -> pushMode (DollarQuotedStringMode);
/* "The tag, if any, of a dollar-quoted string follows the same rules as an unquoted identifier,
 * except that it cannot contain a dollar sign."
 */

fragment Tag: IdentifierStartChar StrictIdentifierChar*;
// Bit-strings Constants (4.1.2.5)

BinaryStringConstant: UnterminatedBinaryStringConstant '\'';

UnterminatedBinaryStringConstant: 'B' '\'' [01]*;

InvalidBinaryStringConstant:
	InvalidUnterminatedBinaryStringConstant '\'';

InvalidUnterminatedBinaryStringConstant:
	'B' UnterminatedStringConstant;

HexadecimalStringConstant:
	UnterminatedHexadecimalStringConstant '\'';

UnterminatedHexadecimalStringConstant: 'X' '\'' [0-9a-fA-F]*;

InvalidHexadecimalStringConstant:
	InvalidUnterminatedHexadecimalStringConstant '\'';

InvalidUnterminatedHexadecimalStringConstant:
	'X' UnterminatedStringConstant;
// Numeric Constants (4.1.2.6)

Integral: Digits;

NumericFail: Digits '..';

Numeric:
	Digits '.' Digits? /*? replaced with + to solve problem with DOT_DOT .. but this surely must be rewriten */
		(
		'E' [+-]? Digits
	)?
	| '.' Digits ('E' [+-]? Digits)?
	| Digits 'E' [+-]? Digits;

fragment Digits: [0-9]+;

PLSQLVARIABLENAME: ':' [a-zA-Z_] [a-zA-Z_0-9$]*;

PLSQLIDENTIFIER: ':"' ('\\' . | '""' | ~ ('"' | '\\'))* '"';
//

// WHITESPACE (4.1)

//

Whitespace: [ \t]+ -> channel (HIDDEN);

Newline: ('\r' '\n'? | '\n') -> channel (HIDDEN);
//

// COMMENTS (4.1.5)

//

LineComment: '--' ~ [\r\n]* -> channel (HIDDEN);

BlockComment: (
		'/*' (
			'/'* BlockComment
			| ~ [/*]
			| '/'+ ~ [/*]
			| '*'+ ~ [/*]
		)* '*'* '*/'
	) -> channel (HIDDEN);

UnterminatedBlockComment:
	'/*' (
		'/'* BlockComment
		| // these characters are not part of special sequences in a block comment
		~ [/*]
		|
		// handle / or * characters which are not part of /* or */ and do not appear at the end of the file
		('/'+ ~ [/*] | '*'+ ~ [/*])
	)*
	// Handle the case of / or * characters at the end of the file, or a nested unterminated block comment
	('/'+ | '*'+ | '/'* UnterminatedBlockComment)?
	// Optional assertion to make sure this rule is working as intended
	;
//

// META-COMMANDS

//

// http://www.postgresql.org/docs/9.3/static/app-psql.html

MetaCommand:
	'\\' (~ [\r\n\\"] | '"' ~ [\r\n"]* '"')* ('"' ~ [\r\n"]*)?;

EndMetaCommand: '\\\\';
//

// ERROR

//

// Any character which does not match one of the above rules will appear in the token stream as an ErrorCharacter token.

// This ensures the lexer itself will never encounter a syntax error, so all error handling may be performed by the

// parser.

ErrorCharacter: .;

mode EscapeStringConstantMode;
EscapeStringConstant:
	EscapeStringText '\'' -> mode (AfterEscapeStringConstantMode);

UnterminatedEscapeStringConstant:
	EscapeStringText
	// Handle a final unmatched \ character appearing at the end of the file
	'\\'? EOF;

fragment EscapeStringText: (
		'\'\''
		| '\\' (
			// two-digit hex escapes are still valid when treated as single-digit escapes
			'x' [0-9a-fA-F]
			| 'u' [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F]
			| 'U' [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F] [0-9a-fA-F]
				[0-9a-fA-F] [0-9a-fA-F]
			|
			// Any character other than the Unicode escapes can follow a backslash. Some have
			// special meaning, but that doesn't affect the syntax.
			~ [xuU]
		)
		| ~ ['\\]
	)*;

InvalidEscapeStringConstant:
	InvalidEscapeStringText '\'' -> mode (AfterEscapeStringConstantMode);

InvalidUnterminatedEscapeStringConstant:
	InvalidEscapeStringText
	// Handle a final unmatched \ character appearing at the end of the file
	'\\'? EOF;

fragment InvalidEscapeStringText: ('\'\'' | '\\' . | ~ ['\\])*;

mode AfterEscapeStringConstantMode;
AfterEscapeStringConstantMode_Whitespace:
	Whitespace -> type (Whitespace), channel (HIDDEN);

AfterEscapeStringConstantMode_Newline:
	Newline -> type (Newline), channel (HIDDEN), mode (AfterEscapeStringConstantWithNewlineMode);
//
// AfterEscapeStringConstantMode_NotContinued: '\\' ~[\r\n] -> skip, popMode;

mode AfterEscapeStringConstantWithNewlineMode;
AfterEscapeStringConstantWithNewlineMode_Whitespace:
	Whitespace -> type (Whitespace), channel (HIDDEN);

AfterEscapeStringConstantWithNewlineMode_Newline:
	Newline -> type (Newline), channel (HIDDEN);

AfterEscapeStringConstantWithNewlineMode_Continued:
	'\'' -> more, mode (EscapeStringConstantMode);

// AfterEscapeStringConstantWithNewlineMode_NotContinued: '\\' ~[\r\n] -> skip, popMode;

mode DollarQuotedStringMode;
DollarText:
	~ '$'+
	//| '$'([0-9])+
	|
	// this alternative improves the efficiency of handling $ characters within a dollar-quoted string which are

	// not part of the ending tag.
	'$' ~ '$'*;

EndDollarStringConstant: ('$' Tag? '$') -> popMode;
