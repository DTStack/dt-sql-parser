import { Token } from 'antlr4ts';
import { CaretPosition } from './basic-parser-types';

/**
 * find token index via caret position (cursor position)
 * @param caretPosition
 * @param allTokens all the tokens
 * @returns caretTokenIndex
 */
export function findCaretTokenIndex(caretPosition: CaretPosition, allTokens: Token[]) {
    const { lineNumber: caretLine, column: caretCol } = caretPosition;
    let left = 0;
    let right = allTokens.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const token = allTokens[mid];
        if (
            token.line > caretLine ||
            (token.line === caretLine && token.charPositionInLine + 1 >= caretCol)
        ) {
            right = mid - 1;
        } else if (
            token.line < caretLine ||
            (token.line === caretLine &&
                token.charPositionInLine + token.text.length + 1 < caretCol)
        ) {
            left = mid + 1;
        } else {
            return allTokens[mid].tokenIndex;
        }
    }
    return null;
}
