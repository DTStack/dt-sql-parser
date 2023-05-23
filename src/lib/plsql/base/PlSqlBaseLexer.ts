import { Lexer } from "antlr4ts/Lexer";

export default abstract class PlSqlBaseLexer extends Lexer {

    _interp: any;

    IsNewlineAtPos(pos: number): boolean {
        const la = this._input.LA(pos);
        return la == -1;
    }
}
