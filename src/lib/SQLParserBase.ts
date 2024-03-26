import * as antlr from "antlr4ng";
export abstract class SQLParserBase<T = antlr.ParserRuleContext> extends antlr.Parser{
    public constructor(input: antlr.TokenStream) {
        super(input);
    }

    public abstract program(): T;

    public caretTokenIndex = -1;

    public entityCollecting = false;

    public shouldMatchEmpty () {
        return this.entityCollecting
            && this.tokenStream.LT(-1).tokenIndex <= this.caretTokenIndex
            && this.tokenStream.LT(1).tokenIndex >= this.caretTokenIndex
    }
}