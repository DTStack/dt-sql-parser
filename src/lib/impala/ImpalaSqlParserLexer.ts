// Generated from /Users/shuangxu/Documents/workspace/dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ImpalaSqlParserLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'-- +SHUFFLE'", "'-- +NOSHUFFLE -- +CLUSTERED'", "'/* +SHUFFLE */'", 
		"'/* +NOSHUFFLE */'", "'/* +CLUSTERED */'", "'[SHUFFLE]'", "'[NOSHUFFLE]'", 
		"'->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ImpalaSqlParserLexer._LITERAL_NAMES, ImpalaSqlParserLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ImpalaSqlParserLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ImpalaSqlParserLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ImpalaSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ImpalaSqlParserLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ImpalaSqlParserLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ImpalaSqlParserLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ImpalaSqlParserLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n\x85\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x02\x02\x02\n\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x03\x02\x02\x02\x84\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x03\x13\x03\x02\x02\x02\x05\x1F\x03\x02\x02\x02\x07;\x03\x02\x02\x02" +
		"\tJ\x03\x02\x02\x02\v[\x03\x02\x02\x02\rl\x03\x02\x02\x02\x0Fv\x03\x02" +
		"\x02\x02\x11\x82\x03\x02\x02\x02\x13\x14\x07/\x02\x02\x14\x15\x07/\x02" +
		"\x02\x15\x16\x07\"\x02\x02\x16\x17\x07-\x02\x02\x17\x18\x07U\x02\x02\x18" +
		"\x19\x07J\x02\x02\x19\x1A\x07W\x02\x02\x1A\x1B\x07H\x02\x02\x1B\x1C\x07" +
		"H\x02\x02\x1C\x1D\x07N\x02\x02\x1D\x1E\x07G\x02\x02\x1E\x04\x03\x02\x02" +
		"\x02\x1F \x07/\x02\x02 !\x07/\x02\x02!\"\x07\"\x02\x02\"#\x07-\x02\x02" +
		"#$\x07P\x02\x02$%\x07Q\x02\x02%&\x07U\x02\x02&\'\x07J\x02\x02\'(\x07W" +
		"\x02\x02()\x07H\x02\x02)*\x07H\x02\x02*+\x07N\x02\x02+,\x07G\x02\x02," +
		"-\x07\"\x02\x02-.\x07/\x02\x02./\x07/\x02\x02/0\x07\"\x02\x0201\x07-\x02" +
		"\x0212\x07E\x02\x0223\x07N\x02\x0234\x07W\x02\x0245\x07U\x02\x0256\x07" +
		"V\x02\x0267\x07G\x02\x0278\x07T\x02\x0289\x07G\x02\x029:\x07F\x02\x02" +
		":\x06\x03\x02\x02\x02;<\x071\x02\x02<=\x07,\x02\x02=>\x07\"\x02\x02>?" +
		"\x07-\x02\x02?@\x07U\x02\x02@A\x07J\x02\x02AB\x07W\x02\x02BC\x07H\x02" +
		"\x02CD\x07H\x02\x02DE\x07N\x02\x02EF\x07G\x02\x02FG\x07\"\x02\x02GH\x07" +
		",\x02\x02HI\x071\x02\x02I\b\x03\x02\x02\x02JK\x071\x02\x02KL\x07,\x02" +
		"\x02LM\x07\"\x02\x02MN\x07-\x02\x02NO\x07P\x02\x02OP\x07Q\x02\x02PQ\x07" +
		"U\x02\x02QR\x07J\x02\x02RS\x07W\x02\x02ST\x07H\x02\x02TU\x07H\x02\x02" +
		"UV\x07N\x02\x02VW\x07G\x02\x02WX\x07\"\x02\x02XY\x07,\x02\x02YZ\x071\x02" +
		"\x02Z\n\x03\x02\x02\x02[\\\x071\x02\x02\\]\x07,\x02\x02]^\x07\"\x02\x02" +
		"^_\x07-\x02\x02_`\x07E\x02\x02`a\x07N\x02\x02ab\x07W\x02\x02bc\x07U\x02" +
		"\x02cd\x07V\x02\x02de\x07G\x02\x02ef\x07T\x02\x02fg\x07G\x02\x02gh\x07" +
		"F\x02\x02hi\x07\"\x02\x02ij\x07,\x02\x02jk\x071\x02\x02k\f\x03\x02\x02" +
		"\x02lm\x07]\x02\x02mn\x07U\x02\x02no\x07J\x02\x02op\x07W\x02\x02pq\x07" +
		"H\x02\x02qr\x07H\x02\x02rs\x07N\x02\x02st\x07G\x02\x02tu\x07_\x02\x02" +
		"u\x0E\x03\x02\x02\x02vw\x07]\x02\x02wx\x07P\x02\x02xy\x07Q\x02\x02yz\x07" +
		"U\x02\x02z{\x07J\x02\x02{|\x07W\x02\x02|}\x07H\x02\x02}~\x07H\x02\x02" +
		"~\x7F\x07N\x02\x02\x7F\x80\x07G\x02\x02\x80\x81\x07_\x02\x02\x81\x10\x03" +
		"\x02\x02\x02\x82\x83\x07/\x02\x02\x83\x84\x07@\x02\x02\x84\x12\x03\x02" +
		"\x02\x02\x03\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ImpalaSqlParserLexer.__ATN) {
			ImpalaSqlParserLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ImpalaSqlParserLexer._serializedATN));
		}

		return ImpalaSqlParserLexer.__ATN;
	}

}
