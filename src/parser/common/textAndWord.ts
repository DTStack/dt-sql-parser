import type { ParserRuleContext, Token } from 'antlr4ng';

export interface WordPosition {
    /** start at 0 */
    readonly startIndex: number;
    /** end at ..n-1 */
    readonly endIndex: number;
    /** start at 1 */
    readonly line: number;
    /** start at 1 */
    readonly startColumn: number;
    /** end at ..n + 1 */
    readonly endColumn: number;
    /** start at 0 */
    readonly startTokenIndex: number;
    /** end at ..n-1 */
    readonly endTokenIndex: number;
}

export interface WordRange extends Omit<WordPosition, 'startTokenIndex' | 'endTokenIndex'> {
    /** content of word */
    readonly text: string;
}

export interface TextPosition {
    /** start at 0 */
    readonly startIndex: number;
    /** end at ..n-1 */
    readonly endIndex: number;
    /** start at 1 */
    readonly startLine: number;
    /** end at ..n */
    readonly endLine: number;
    /** start at 1 */
    readonly startColumn: number;
    /** end at ..n + 1 */
    readonly endColumn: number;
    /** start at 0 */
    readonly startTokenIndex: number;
    /** end at ..n-1 */
    readonly endTokenIndex: number;
}

export interface TextSlice extends TextPosition {
    readonly text: string;
}

/**
 * Convert Token to Word
 */
export function tokenToWord(token: Token, input: string): WordRange {
    const startIndex = token.start;
    const endIndex = token.stop;
    const text = token.text ?? '';
    return {
        text,
        line: token.line,
        startIndex,
        endIndex,
        startColumn: token.column + 1,
        endColumn: token.column + 1 + text.length,
    };
}

/**
 * Convert ParserRuleContext to Text
 */
export function ctxToText(
    ctx: ParserRuleContext,
    input: string
): (TextPosition & { text: string }) | null {
    if (!ctx.start || !ctx.stop) {
        return null;
    }
    const startIndex = ctx.start.start;
    const endIndex = ctx.stop.stop;
    const text = input.slice(startIndex, endIndex + 1);
    return {
        text,
        startLine: ctx.start.line,
        endLine: ctx.stop.line,
        startIndex,
        endIndex,
        startColumn: ctx.start.column + 1,
        endColumn: ctx.stop.column + 1 + (ctx.stop.text?.length ?? 0),
        startTokenIndex: ctx.start.tokenIndex,
        endTokenIndex: ctx.stop.tokenIndex,
    };
}

/**
 * judge whether the context is a WordRange
 * @param textOrWord TextSlice or WordRange object
 * */
export function isWordRange(textOrWord: TextSlice | WordRange): textOrWord is WordRange {
    if (!textOrWord) return false;
    return 'line' in textOrWord;
}
