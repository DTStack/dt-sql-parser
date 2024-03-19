import { TokenStream } from "antlr4ng";
import SQLParserBase from "../SQLParserBase";
export default abstract class PlSqlBaseParser extends SQLParserBase {

    private _isVersion10: boolean = false;
    private _isVersion12: boolean = true;

    constructor(input: TokenStream) {
        super(input);
        this._isVersion10 = false;
        this._isVersion12 = true;
    }
    
      isVersion10(): boolean {
        return this._isVersion10;
      }
    
      isVersion12(): boolean {
        return this._isVersion12;
      }
    
      setVersion10(value: boolean): void {
        this._isVersion10 = value;
      }
    
      setVersion12(value: boolean): void {
        this._isVersion12 = value;
      }
}