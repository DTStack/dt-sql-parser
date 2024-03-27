import { Lexer } from "antlr4ng";

export abstract class PlSqlBaseLexer extends Lexer {

    _interp: any;

    IsNewlineAtPos(pos: number): boolean {
        const la = this._input.LA(pos);
        return la == -1 || String.fromCharCode(la) == '\n';
    }
}
