import { ParserRuleContext } from 'antlr4ts';
import type {
    ColumnCreateTableContext,
    ColumnNameCreateContext,
    CopyCreateTableContext,
    CreateTableContext,
    CreateViewContext,
    DatabaseNameContext,
    DatabaseNameCreateContext,
    FunctionNameCreateContext,
    InsertStatementContext,
    QueryCreateTableContext,
    SelectStatementContext,
    SingleStatementContext,
    TableNameContext,
    TableNameCreateContext,
    ViewNameContext,
    ViewNameCreateContext,
} from '../lib/mysql/MySqlParser';
import type { MySqlParserListener } from '../lib/mysql/MySqlParserListener';
import { SyntaxContextType, WordPosition, TextPosition } from './common/basic-parser-types';
import { ctxToText, ctxToWord } from './common/utils/textAndWord';

export enum StmtContextType {
    /** A self-contained and complete statement */
    COMMON_STMT = 'commonStmt',
    CREATE_TABLE_STMT = 'createTableStmt',
    CREATE_VIEW_STMT = 'createViewStmt',
    SELECT_STMT = 'selectStmt',
    INSERT_STMT = 'insertStmt',
}

interface StmtContext {
    readonly stmtContextType: StmtContextType;
    readonly position: TextPosition;
    readonly rootStmt?: StmtContext | null;
    readonly parentStmt?: StmtContext | null;
}

function toStmtContext(
    ctx: ParserRuleContext,
    type: StmtContextType,
    input: string,
    rootStmt: StmtContext | null,
    parentStmt: StmtContext | null
): StmtContext {
    const { text: _, ...position } = ctxToText(ctx, input);
    return {
        stmtContextType: type,
        position,
        rootStmt: rootStmt ?? null,
        parentStmt: parentStmt ?? null,
    };
}

interface EntityContext {
    readonly syntaxContextType: SyntaxContextType;
    readonly text: string;
    readonly position: WordPosition;
    readonly belongStmt: StmtContext;
    relatedEntities?: EntityContext[];
    columns?: EntityContext[];
}

function toEntityContext(
    ctx: ParserRuleContext,
    type: SyntaxContextType,
    input: string,
    belongStmt: StmtContext
): EntityContext {
    const { text, ...position } = ctxToWord(ctx, input);
    return {
        syntaxContextType: type,
        text,
        position,
        belongStmt,
    };
}

class SimpleStack<T> {
    constructor() {
        this.stack = [];
    }
    private stack: T[];

    push(item: T) {
        this.stack.push(item);
    }

    batchPush(items: T[]) {
        this.stack.push(...items);
    }

    pop(): T {
        return this.stack.pop();
    }

    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    clear() {
        this.stack = [];
    }

    size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}

export class MySqlCollectListener implements MySqlParserListener {
    constructor(input: string) {
        this._input = input;
        this._results = new Set();
        this._stmtStack = new SimpleStack();
        this._entityStack = new SimpleStack();
        this._rootStmt = null;
    }
    private readonly _input: string;
    private readonly _results: Set<EntityContext>;
    /** Staging statements that have already entered. */
    private readonly _stmtStack: SimpleStack<StmtContext>;
    /** Staging entities inside a single statement or clause. */
    private readonly _entityStack: SimpleStack<EntityContext>;
    /**
     * Always point to the first non-commonStmt at the bottom of the _stmtStack,
     * unless there are only commonStmts in the _stmtStack.
     * */
    private _rootStmt: StmtContext;

    get results() {
        return Array.from(this._results);
    }

    enterProgram() {
        this._results.clear();
        this._stmtStack.clear();
        this._entityStack.clear();
        this._rootStmt = null;
    }

    private pushStmt(ctx: ParserRuleContext, type: StmtContextType) {
        const stmtContext = toStmtContext(
            ctx,
            type,
            this._input,
            this._rootStmt,
            this._stmtStack.peek()
        );
        if (
            this._stmtStack.isEmpty() ||
            this._stmtStack.peek()?.stmtContextType === StmtContextType.COMMON_STMT
        ) {
            this._rootStmt = stmtContext;
        }
        this._stmtStack.push(stmtContext);
    }

    private popStmt() {
        const stmtContext = this._stmtStack.pop();
        if (this._rootStmt === stmtContext) {
            this._rootStmt = this._stmtStack.peek();
            if (!this._entityStack.isEmpty()) {
                this.combineEntitiesAndAdd(stmtContext);
            }
        }
        return stmtContext;
    }

    private pushEntity(ctx: ParserRuleContext, type: SyntaxContextType) {
        const entityContext = toEntityContext(ctx, type, this._input, this._stmtStack.peek());
        if (this._stmtStack.isEmpty()) {
            this._results.add(entityContext);
        } else {
            // If is inside a statement
            this._entityStack.push(entityContext);
        }
    }

    /**
     * Combine entities that inside a single statement.
     * e.g. combine tableName and column if they are inside a same createTableStatement.
     * Then add combined entities into result.
     */
    combineEntitiesAndAdd(stmtContext: StmtContext) {
        const entitiesInsideStmt: EntityContext[] = [];
        while (
            !this._entityStack.isEmpty() &&
            (this._entityStack.peek().belongStmt === stmtContext ||
                this._entityStack.peek().belongStmt.rootStmt === stmtContext)
        ) {
            entitiesInsideStmt.unshift(this._entityStack.pop());
        }

        let tmpResults = entitiesInsideStmt;

        if (stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT) {
            tmpResults = this.combineCreateStmtEntities(stmtContext, entitiesInsideStmt);
        }

        while (tmpResults.length) {
            this._results.add(tmpResults.shift());
        }
    }

    combineCreateStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        const columns: EntityContext[] = [];
        const relatedEntities: EntityContext[] = [];
        return entitiesInsideStmt.reduce((result, entity) => {
            if (entity.belongStmt !== stmtContext) {
                // entity inside a clause
                relatedEntities.push(entity);
                if (
                    entity.syntaxContextType !== SyntaxContextType.COLUMN &&
                    entity.syntaxContextType !== SyntaxContextType.COLUMN_CREATE
                ) {
                    result.push(entity);
                }
                return result;
            }
            if (entity.syntaxContextType === SyntaxContextType.COLUMN_CREATE) {
                columns.push(entity);
            } else if (entity.syntaxContextType === SyntaxContextType.TABLE_CREATE) {
                entity.columns = columns;
                entity.relatedEntities = relatedEntities;
                result.push(entity);
                return result;
            }
            return result;
        }, []);
    }

    /** ====== Entity Begin */
    exitDatabaseName(ctx: DatabaseNameContext) {
        this.pushEntity(ctx, SyntaxContextType.DATABASE);
    }

    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
        this.pushEntity(ctx, SyntaxContextType.DATABASE_CREATE);
    }

    exitTableName(ctx: TableNameContext) {
        this.pushEntity(ctx, SyntaxContextType.TABLE);
    }

    exitTableNameCreate(ctx: TableNameCreateContext) {
        this.pushEntity(ctx, SyntaxContextType.TABLE_CREATE);
    }

    exitViewName(ctx: ViewNameContext) {
        this.pushEntity(ctx, SyntaxContextType.VIEW);
    }

    exitViewNameCreate(ctx: ViewNameCreateContext) {
        this.pushEntity(ctx, SyntaxContextType.VIEW_CREATE);
    }

    exitFunctionNameCreate(ctx: FunctionNameCreateContext) {
        this.pushEntity(ctx, SyntaxContextType.FUNCTION_CREATE);
    }

    exitColumnNameCreate(ctx: ColumnNameCreateContext) {
        this.pushEntity(ctx, SyntaxContextType.COLUMN_CREATE);
    }

    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateTable(ctx: CreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    enterQueryCreateTable(ctx: QueryCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitQueryCreateTable(ctx: QueryCreateTableContext) {
        this.popStmt();
    }

    enterColumnCreateTable(ctx: ColumnCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitColumnCreateTable(ctx: ColumnCreateTableContext) {
        this.popStmt();
    }

    enterCopyCreateTable(ctx: CopyCreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCopyCreateTable(ctx: CopyCreateTableContext) {
        this.popStmt();
    }

    enterCreateView(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateView(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterSimpleSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSimpleSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterParenthesisSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitParenthesisSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterUnionSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitUnionSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterParenthesisUnionSelect(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitParenthesisUnionSelect(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterWithLateralStatement(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitWithLateralStatement(ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(ctx: InsertStatementContext) {
        this.popStmt();
    }
}
