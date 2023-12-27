import type { WordPosition, TextPosition } from '../basic-parser-types';
import type { ParserRuleContext, Token } from 'antlr4ts';

/**
 * Convert Token to Word
 */
export function tokenToWord(token: Token, input: string): WordPosition & { text: string } {
    const startIndex = token.startIndex;
    const endIndex = token.stopIndex;
    const text = input.slice(startIndex, endIndex + 1);
    return {
        text,
        line: token.line,
        startIndex,
        endIndex,
        startColumn: token.charPositionInLine + 1,
        endColumn: token.charPositionInLine + 1 + text.length,
    };
}

/**
 * Convert ParserRuleContext to Word
 */
export function ctxToWord(ctx: ParserRuleContext, input: string): WordPosition & { text: string } {
    const startIndex = ctx.start.startIndex;
    const endIndex = ctx.stop.stopIndex;
    const text = input.slice(startIndex, endIndex + 1);
    return {
        text,
        line: ctx.start.line,
        startIndex,
        endIndex,
        startColumn: ctx.start.charPositionInLine + 1,
        endColumn: ctx.stop.charPositionInLine + 1 + ctx.stop.text.length,
    };
}

/**
 * Convert ParserRuleContext to Text
 */
export function ctxToText(ctx: ParserRuleContext, input: string): TextPosition & { text: string } {
    const startIndex = ctx.start.startIndex;
    const endIndex = ctx.stop.stopIndex;
    const text = input.slice(startIndex, endIndex + 1);
    return {
        text,
        startLine: ctx.start.line,
        endLine: ctx.stop.line,
        startIndex,
        endIndex,
        startColumn: ctx.start.charPositionInLine + 1,
        endColumn: ctx.stop.charPositionInLine + 1 + ctx.stop.text.length,
    };
}
