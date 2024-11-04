import { ErrorNode, ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import { findCaretTokenIndex } from '../common/findCaretTokenIndex';
import { CaretPosition, SemanticContext } from '../common/types';

export const SQL_SPLIT_SYMBOL_TEXT = ';';

abstract class SemanticContextCollector {
    constructor(_input: string, caretPosition: CaretPosition, allTokens: Token[]) {
        // If caretPosition is whiteSpace, tokenIndex may be undefined.
        const tokenIndex = findCaretTokenIndex(caretPosition, allTokens);

        if (tokenIndex !== undefined) {
            this._tokenIndex = tokenIndex;
        }
        this._allTokens = allTokens;

        if (allTokens?.length) {
            let i = tokenIndex ? tokenIndex - 1 : allTokens.length - 1;
            /**
             * Find the previous no-hidden token.
             * If can't find tokenIndex or current token is whiteSpace at caretPosition,
             * prevTokenIndex is useful to help us determine if it is new statement.
             */
            while (i >= 0) {
                if (
                    allTokens[i].channel !== Token.HIDDEN_CHANNEL &&
                    (allTokens[i].line < caretPosition?.lineNumber ||
                        (allTokens[i].line === caretPosition.lineNumber &&
                            allTokens[i].column < caretPosition.column))
                ) {
                    this._prevTokenIndex = allTokens[i].tokenIndex;
                    break;
                }
                i--;
            }

            // Current token is the first token of tokenStream or the previous token is semicolon
            if (
                tokenIndex === 0 ||
                i === -1 ||
                (this._prevTokenIndex &&
                    this._allTokens[this._prevTokenIndex].text === SQL_SPLIT_SYMBOL_TEXT)
            ) {
                this._isNewStatement = true;
            }
        }
    }

    private _tokenIndex: number;
    private _allTokens: Token[] = [];
    private _isNewStatement: boolean = false;

    /**
     * Prev tokenIndex that not white space before current tokenIndex or cart position
     */
    private _prevTokenIndex: number;

    public get semanticContext(): SemanticContext {
        return {
            isNewStatement: this._isNewStatement,
        };
    }

    abstract getWhiteSpaceRuleType(): number;

    abstract getStatementRuleType(): number;

    private previousStatementHasError(node: TerminalNode | ErrorNode | ParserRuleContext) {
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
     * Most root rules is program.
     */
    private getIsRootRuleNode(node: TerminalNode | ErrorNode | ParserRuleContext) {
        return node instanceof ParserRuleContext && node?.parent === null;
    }

    /**
     * Caret position is white space, so it will not visited as terminal node or error node.
     * We can find the first previous no-white-space token,
     * and if previous token is the last leaf node of the statement,
     * it can be considered as being in the context of new statement
     */
    protected statementVisitor(ctx: ParserRuleContext) {
        const isWhiteSpaceToken =
            this._tokenIndex === undefined ||
            this._allTokens[this._tokenIndex]?.type === this.getWhiteSpaceRuleType() ||
            // PostgreSQL whiteSpace not inlcudes '\n' symbol
            this._allTokens[this._tokenIndex]?.text === '\n';

        const isPrevTokenEndOfStatement =
            this._prevTokenIndex && ctx.stop?.tokenIndex === this._prevTokenIndex;

        if (isWhiteSpaceToken && isPrevTokenEndOfStatement && ctx.exception === null) {
            this._isNewStatement = !this.previousStatementHasError(ctx)
                ? true
                : this._isNewStatement;
        }
    }

    /**
     * Uncomplete keyword will be error node
     */
    visitErrorNode(node: ErrorNode): void {
        if (node.symbol.tokenIndex !== this._tokenIndex || this._isNewStatement) return;

        let parent: ParserRuleContext | null = node.parent as ParserRuleContext;
        let currentNode: TerminalNode | ParserRuleContext = node;

        /**
         * The error node is a direct child node of the program node
         */
        if (this.getIsRootRuleNode(parent)) {
            this._isNewStatement = !this.previousStatementHasError(currentNode);
            return;
        }

        /**
         * Error node must be the first leaf node of the statement parse tree.
         **/
        while (parent !== null && parent.ruleIndex !== this.getStatementRuleType()) {
            if (parent.children?.[0] !== currentNode) {
                this._isNewStatement = false;
                return;
            }

            currentNode = parent;
            parent = currentNode.parent;
        }

        let isNewStatement = true;

        /**
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
                isNewStatement =
                    this.previousStatementHasError(parent) && !isStatementEOF
                        ? false
                        : isNewStatement;
            }
        }

        this._isNewStatement = isNewStatement;
    }

    visitTerminal(node: TerminalNode): void {
        if (node.symbol.tokenIndex !== this._tokenIndex || this._isNewStatement) return;

        let currentNode: TerminalNode | ParserRuleContext = node;
        let parent = node.parent as ParserRuleContext | null;

        /**
         * Current terminal node must be the first leaf node of the statement parse tree.
         **/
        while (parent !== null && parent.ruleIndex !== this.getStatementRuleType()) {
            if (parent.children?.[0] !== currentNode) {
                this._isNewStatement = false;
                return;
            }

            currentNode = parent;
            parent = currentNode.parent!;
        }

        let isNewStatement = true;

        if (parent?.ruleIndex === this.getStatementRuleType()) {
            const programRule = parent.parent;
            const currentStatementRuleIndex =
                programRule?.children?.findIndex((node) => node === parent) || -1;
            if (currentStatementRuleIndex > 0) {
                isNewStatement = this.previousStatementHasError(parent) ? false : isNewStatement;
            }
        }

        this._isNewStatement = isNewStatement;
    }

    enterEveryRule(_node: ParserRuleContext): void {}
    exitEveryRule(_node: ParserRuleContext): void {}
}

export default SemanticContextCollector;
