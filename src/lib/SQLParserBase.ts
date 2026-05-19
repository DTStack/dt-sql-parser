import * as antlr from "antlr4ng";
export abstract class SQLParserBase<T = antlr.ParserRuleContext> extends antlr.Parser{
    public constructor(input: antlr.TokenStream) {
        super(input);
    }

    public abstract program(): T;

    public caretTokenIndex = -1;

    public entityCollecting = false;

    /**
     * Semantic predicate to determine whether to match empty column.
     * 
     * Key design:
     * 1. Only match empty column in entityCollecting mode
     * 2. Check if caret position is at the empty column position
     * 3. In validate mode (entityCollecting=false), this predicate returns false
     *    and reports an error to ensure incomplete SQL is caught
     * 
     * IMPORTANT: This predicate should be used carefully to avoid affecting
     * prediction in non-entity-collecting contexts.
     */
    public shouldMatchEmpty (ruleName?: string) {
        // Only match in entityCollecting mode or when caret position is specified (suggestion mode)
        if (this.entityCollecting || this.caretTokenIndex >= 0) {
            // If no caret position specified, match all empty columns
            if (this.caretTokenIndex < 0) {
                return true;
            }
            
            // Check if caret is at the position where empty column would be
            const prevTokenIndex = this.tokenStream.LT(-1)?.tokenIndex;
            const nextTokenIndex = this.tokenStream.LT(1)?.tokenIndex;

            // Match if caret is between previous and next token
            if (prevTokenIndex !== undefined && nextTokenIndex !== undefined) {
                return prevTokenIndex <= this.caretTokenIndex && nextTokenIndex >= this.caretTokenIndex;
            }
            
            // If only previous token exists, match if caret is after it
            if (prevTokenIndex !== undefined) {
                return prevTokenIndex <= this.caretTokenIndex;
            }
            
            // If only next token exists, match if caret is before it
            if (nextTokenIndex !== undefined) {
                return nextTokenIndex >= this.caretTokenIndex;
            }
            
            return false;
        }
        
        // In pure validate mode, don't match empty columns
        // This allows ANTLR to report errors naturally
        return false;
    }
}
