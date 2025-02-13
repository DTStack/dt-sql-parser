import { ErrorNode, ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import { findCaretTokenIndex } from '../common/findCaretTokenIndex';
import {
    CaretPosition,
    SemanticCollectOptions,
    SemanticContext,
    SqlSplitStrategy,
} from '../common/types';

export const SQL_SPLIT_SYMBOL_TEXT = ';';

abstract class SemanticContextCollector {
    constructor(
        _input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        // If caretPosition token is whiteSpace, tokenIndex may be undefined.
        const tokenIndex = findCaretTokenIndex(caretPosition, allTokens);

        if (tokenIndex !== undefined) {
            this._tokenIndex = tokenIndex;
        }
        this._allTokens = allTokens;
        this.options = {
            ...this.options,
            ...options,
        };

        if (allTokens?.length) {
            let i = tokenIndex ? tokenIndex - 1 : allTokens.length - 1;
            /**
             * Link to @case4 and @case5
             * Find the previous unhidden token.
             * If can't find tokenIndex or current token is whiteSpace at caretPosition,
             * prevTokenIndex is useful to help us determine if it is beginning of statement.
             */
            while (i >= 0) {
                if (
                    allTokens[i].channel !== Token.HIDDEN_CHANNEL &&
                    (allTokens[i].line < caretPosition.lineNumber ||
                        (allTokens[i].line === caretPosition.lineNumber &&
                            allTokens[i].column < caretPosition.column))
                ) {
                    this._prevTokenIndex = allTokens[i].tokenIndex;
                    break;
                }
                i--;
            }

            /**
             * We can directly conclude beginning of statement semantics when current token is
             * the first token of tokenStream or the previous token is semicolon
             */
            if (
                tokenIndex === 0 ||
                i === -1 ||
                (this._prevTokenIndex &&
                    this._allTokens[this._prevTokenIndex].text === SQL_SPLIT_SYMBOL_TEXT)
            ) {
                this._isStatementBeginning = true;
            }
        }
    }

    public readonly options: SemanticCollectOptions = {
        sqlSplitStrategy: SqlSplitStrategy.STRICT,
    };

    private _tokenIndex: number;
    private _allTokens: Token[] = [];

    /**
     * If current caret position is in a beginning of statement semantics, it needs to follow some cases:
     * @case1 there is no statement node with an error before the current statement in the parse tree;
     *
     * @case2 if it is an uncomplete keyword, it will be parsed as an `ErrorNode`
     * and need be a direct child node of `program`;
     *
     * @case3 if it is a complete keyword, the parsed TerminalNode or ErrorNode should be
     * the first leaf node of current statement rule;
     *
     * @case4 if it is whiteSpace in caret position, we can't visit it in antlr4 listener,
     * so we find the first unhidden token before the whiteSpace token, and the unhidden token
     * should be the last leaf node of statement its belongs to;
     *
     * @case5 if the previous token is split symbol like `;`, ignore case1 and forcefully judged as beginning of statement.
     */
    private _isStatementBeginning: boolean = false;

    /**
     * Prev tokenIndex that not white space before current tokenIndex or caret position
     */
    private _prevTokenIndex: number;

    public get semanticContext(): SemanticContext {
        return {
            isStatementBeginning: this._isStatementBeginning,
        };
    }

    abstract getWhiteSpaceRuleType(): number;

    abstract getStatementRuleType(): number;

    private prevStatementHasError(node: TerminalNode | ErrorNode | ParserRuleContext) {
        let parent = node.parent as ParserRuleContext;
        if (!parent) return false;

        const currentNodeIndex = parent.children!.findIndex((child) => child === node);
        if (currentNodeIndex <= 0) return false;

        for (let i = currentNodeIndex - 1; i >= 0; i--) {
            const prevNode = parent.children![i];
            if (
                prevNode instanceof ErrorNode ||
                (prevNode instanceof ParserRuleContext && prevNode.exception !== null)
            )
                return true;
        }

        return false;
    }

    /**
     * Most root rule is `program`.
     */
    private isRootRule(node: TerminalNode | ErrorNode | ParserRuleContext) {
        return node instanceof ParserRuleContext && node?.parent === null;
    }

    /**
     * link to @case4
     * It should be called in each language's own `enterStatement`.
     */
    protected visitStatement(ctx: ParserRuleContext) {
        if (this.options.sqlSplitStrategy === SqlSplitStrategy.STRICT) return;

        const isWhiteSpaceToken =
            this._tokenIndex === undefined ||
            this._allTokens[this._tokenIndex]?.type === this.getWhiteSpaceRuleType() ||
            // PostgreSQL whiteSpace not inlcudes '\n' symbol
            this._allTokens[this._tokenIndex]?.text === '\n';

        const isPrevTokenEndOfStatement =
            this._prevTokenIndex && ctx.stop?.tokenIndex === this._prevTokenIndex;

        if (isWhiteSpaceToken && isPrevTokenEndOfStatement && ctx.exception === null) {
            this._isStatementBeginning = !this.prevStatementHasError(ctx)
                ? true
                : this._isStatementBeginning;
        }
    }

    /**
     * Uncomplete keyword will be error node
     */
    visitErrorNode(node: ErrorNode): void {
        if (
            node.symbol.tokenIndex !== this._tokenIndex ||
            this._isStatementBeginning ||
            this.options.sqlSplitStrategy === SqlSplitStrategy.STRICT
        )
            return;

        let parent: ParserRuleContext | null = node.parent as ParserRuleContext;
        let currentNode: TerminalNode | ParserRuleContext = node;

        /**
         * Link to @case2
         * The error node is a direct child node of the program node
         */
        if (this.isRootRule(parent)) {
            this._isStatementBeginning = !this.prevStatementHasError(currentNode);
            return;
        }

        /**
         * Link to @case3
         * Error node must be the first leaf node of the statement parse tree.
         **/
        while (parent !== null && parent.ruleIndex !== this.getStatementRuleType()) {
            if (parent.children?.[0] !== currentNode) {
                this._isStatementBeginning = false;
                return;
            }

            currentNode = parent;
            parent = currentNode.parent;
        }

        let isStatementBeginning = true;

        /**
         * Link to @case1
         * Previous statement must have no exception
         */
        if (parent?.ruleIndex === this.getStatementRuleType()) {
            const programRule = parent.parent;
            const currentStatementRuleIndex =
                programRule?.children?.findIndex((node) => node === parent) || -1;
            if (currentStatementRuleIndex > 0) {
                /**
                 * When you typed a keyword and doesn't match any rule, you will get a EOF error,
                 * For example, just typed 'CREATE', 'INSERT'.
                 */
                const isStatementEOF = parent.exception?.offendingToken?.text === '<EOF>';
                isStatementBeginning =
                    this.prevStatementHasError(parent) && !isStatementEOF
                        ? false
                        : isStatementBeginning;
            }
        }

        this._isStatementBeginning = isStatementBeginning;
    }

    visitTerminal(node: TerminalNode): void {
        if (
            node.symbol.tokenIndex !== this._tokenIndex ||
            this._isStatementBeginning ||
            this.options.sqlSplitStrategy === SqlSplitStrategy.STRICT
        )
            return;

        let currentNode: TerminalNode | ParserRuleContext = node;
        let parent = node.parent as ParserRuleContext | null;

        /**
         * Link to @case3
         * Current terminal node must be the first leaf node of the statement parse tree.
         **/
        while (parent !== null && parent.ruleIndex !== this.getStatementRuleType()) {
            if (parent.children?.[0] !== currentNode) {
                this._isStatementBeginning = false;
                return;
            }

            currentNode = parent;
            parent = currentNode.parent!;
        }

        let isStatementBeginning = true;

        /**
         * Link to @case1
         * Previous statement must have no exception
         */
        if (parent?.ruleIndex === this.getStatementRuleType()) {
            const programRule = parent.parent;
            const currentStatementRuleIndex =
                programRule?.children?.findIndex((node) => node === parent) || -1;
            if (currentStatementRuleIndex > 0) {
                isStatementBeginning = this.prevStatementHasError(parent)
                    ? false
                    : isStatementBeginning;
            }
        }

        this._isStatementBeginning = isStatementBeginning;
    }

    enterEveryRule(_node: ParserRuleContext): void {}
    exitEveryRule(_node: ParserRuleContext): void {}
}

export default SemanticContextCollector;
