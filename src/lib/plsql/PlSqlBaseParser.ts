import { Parser } from 'antlr4';

export default class PlSqlBaseParser extends Parser {

    private _isVersion10: boolean = false;
    private _isVersion12: boolean = true;

    public isVersion10(): boolean {
        return this._isVersion10;
    }
    public isVersion12(): boolean {
        return this._isVersion12;
    }
    public setVersion10(value: boolean): void {
        this._isVersion10 = value;
    }
    public setVersion12(value: boolean): void {
        this._isVersion12 = value;
    }
}