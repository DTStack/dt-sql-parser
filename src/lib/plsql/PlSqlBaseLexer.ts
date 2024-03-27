import { Lexer } from "antlr4ng";

export abstract class PlSqlBaseLexer extends Lexer {
    IsNewlineAtPos(pos: number): boolean {
        const la = this._input.LA(pos);
        return la == -1 || String.fromCharCode(la) == '\n';
    }
}
