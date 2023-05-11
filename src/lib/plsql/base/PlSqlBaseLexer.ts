import { Lexer } from "antlr4";

export default class PlSqlBaseLexer extends Lexer {

    IsNewlineAtPos(pos: number): boolean {
        const la = this._input.LA(pos);
        return la == -1;
    }
}
