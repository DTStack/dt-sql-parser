import { Language } from './sqlBenchmark';

type TestFile = {
    /** Benchmark Name */
    name: string;
    /** Test sql name */
    sqlFileName: string;
    /** Test run times */
    loopTimes?: number;
    /** Test method name of parser */
    testTypes: string[];
    /** Exclude languages */
    excludes?: Language[];
    /** Include languages */
    includes?: Language[];
};

const testFiles: TestFile[] = [
    {
        name: 'Query Collection',
        sqlFileName: 'select.sql',
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Update Table',
        sqlFileName: 'update.sql',
        excludes: ['flink'],
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Insert Columns',
        sqlFileName: 'insert.sql',
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Create Table',
        sqlFileName: 'create.sql',
        excludes: ['flink'],
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Create Table',
        sqlFileName: 'create_flink.sql',
        includes: ['flink'],
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Split SQL',
        sqlFileName: 'split.sql',
        excludes: ['flink'],
        testTypes: ['splitSQLByStatement'],
    },
    {
        name: 'Split SQL',
        sqlFileName: 'split_flink.sql',
        includes: ['flink'],
        testTypes: ['splitSQLByStatement'],
    },
    {
        name: 'Collect Entities',
        sqlFileName: 'suggestion.sql',
        excludes: ['flink'],
        testTypes: ['getAllEntities'],
    },
    {
        name: 'Collect Entities',
        sqlFileName: 'suggestion_flink.sql',
        includes: ['flink'],
        testTypes: ['getAllEntities'],
    },
    {
        name: 'Suggestion',
        sqlFileName: 'suggestion.sql',
        excludes: ['flink'],
        testTypes: ['getSuggestionAtCaretPosition'],
    },
    {
        name: 'Suggestion',
        sqlFileName: 'suggestion_flink.sql',
        includes: ['flink'],
        testTypes: ['getSuggestionAtCaretPosition'],
    },
    {
        name: 'Collect Semantics',
        sqlFileName: 'select.sql',
        testTypes: ['getSemanticContextAtCaretPosition'],
    },
];

export default {
    testFiles,
};
