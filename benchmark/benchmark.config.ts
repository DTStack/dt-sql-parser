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
        testTypes: ['getAllTokens', 'validate'],
    },
    {
        name: 'Split SQL',
        sqlFileName: 'split.sql',
        testTypes: ['splitSQLByStatement'],
    },
    {
        name: 'Collect Entities',
        sqlFileName: 'suggestion.sql',
        testTypes: ['getAllEntities'],
    },
    {
        name: 'Suggestion',
        sqlFileName: 'suggestion.sql',
        testTypes: ['getSuggestionAtCaretPosition'],
    },
];

export default {
    testFiles,
};
