abstract class SplitListener<T> {
    protected _statementsContext: T[] = [];

    visitTerminal() {}

    visitErrorNode() {}

    enterEveryRule() {}

    exitEveryRule() {}

    get statementsContext() {
        return this._statementsContext;
    }
}

export default SplitListener;
