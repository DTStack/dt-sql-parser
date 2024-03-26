import FlinkSQL from 'src/parser/flink';
import {
    readSQL,
    benchmark,
    getReportTableHeader,
    getReportTableRow,
    exportReportTable,
} from 'test/helper';

const features = {
    selectTable: readSQL(__dirname, 'selectTable.sql'),
    createTable: readSQL(__dirname, 'createTable.sql'),
    insertTable: readSQL(__dirname, 'insertTable.sql'),
};

describe('FlinkSQL benchmark tests', () => {
    const parser = new FlinkSQL();
    let reportsHeader = getReportTableHeader('FlinkSQL Benchmark');
    const reportData: string[] = [];

    test('createTable Over 100 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('CreateTable Over 100 Rows', () => {
            const testSQL = features.createTable[0];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('CreateTable', 100, 1, totalTimes, averageTimes));
    });

    test('createTable Over 1000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('CreateTable Over 1000 Rows', () => {
            const testSQL = features.createTable[1];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('CreateTable', 1000, 1, totalTimes, averageTimes));
    });

    test('createTable Over 5000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('CreateTable Over 5000 Rows', () => {
            const testSQL = features.createTable[2];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('CreateTable', 5000, 1, totalTimes, averageTimes));
    });

    test('selectTable Over 100 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('SelectTable Over 100 Rows', () => {
            const testSQL = features.selectTable[0];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('SelectTable', 100, 1, totalTimes, averageTimes));
    });

    test('selectTable Over 1000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('SelectTable Over 1000 Rows', () => {
            const testSQL = features.selectTable[1];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('SelectTable', 1000, 1, totalTimes, averageTimes));
    });

    test('selectTable Over 5000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('SelectTable Over 5000 Rows', () => {
            const testSQL = features.selectTable[2];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('SelectTable', 5000, 1, totalTimes, averageTimes));
    });

    test('insertTable Over 100 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('InsertTable Over 100 Rows', () => {
            const testSQL = features.insertTable[0];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('InsertTable', 100, 1, totalTimes, averageTimes));
    });

    test('insertTable Over 1000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('InsertTable Over 1000 Rows', () => {
            const testSQL = features.insertTable[1];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('InsertTable', 1000, 1, totalTimes, averageTimes));
    });

    test('insertTable Over 5000 Rows', async () => {
        const [totalTimes, averageTimes, msg] = benchmark('InsertTable Over 5000 Rows', () => {
            const testSQL = features.insertTable[2];
            const res = parser.validate(testSQL);
            expect(res).toEqual([]);
        });
        reportData.push(getReportTableRow('InsertTable', 5000, 1, totalTimes, averageTimes));
    });

    afterAll(() => {
        exportReportTable(reportsHeader + reportData.join('\n'), __dirname);
    });
});
