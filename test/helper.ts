import fs from 'fs';
import path from 'path';

export const readSQL = (dirname: string, fileName: string) => {
    const content = fs.readFileSync(path.join(dirname, 'fixtures', fileName), 'utf-8');
    const result: string[] = [];
    let tmp = '';

    for (let index = 0; index < content.length; index++) {
        const char = content[index];
        tmp += char;

        const isMulti = tmp.includes('EXECUTE STATEMENT SET') || tmp.includes('BEGIN STATEMENT SET;');

        if (!isMulti) {
            // 非批量的先简单按照分号切割
            if (tmp.endsWith(';')) {
                result.push(tmp.trim());
                tmp = '';
            }
        } else {
            if (tmp.endsWith('END;')) {
                result.push(tmp.trim());
                tmp = '';
            }
        }
    }

    return result;
};

/**
 * Benchmark for a function.
 * @param name 
 * @param fn 
 * @param times , default 1
 * @returns [ totalTime, averageTime, msg ]
 */
export function benchmark(name: string, fn: Function, times: number = 1): [number, number, string] {
    const start = performance.now();
    
    for (let i = 0; i < times; i++) {
        fn();
    }
    const end = performance.now();
    const totalTime = end - start;
    const averageTime = totalTime / times;

    const msg = `Benchmark: ${name} executed ${times} times. Total time: ${totalTime.toFixed(2)}ms. Average time: ${averageTime.toFixed(2)}ms`;
    console.log(msg)
    
    return [totalTime, averageTime, msg];
}


export function getReportTableRow(name, rows, times, totalTime, averageTime) {
    return `| ${name} | ${rows} | ${times} | ${totalTime.toFixed(2)} | ${averageTime.toFixed(2)} |`;
}

export function getReportTableHeader(title: string) {
    return `# ${title}
| Name | Rows | Times | Total Time(ms) | Average Time(ms) |
| ---- | ---- | ---- | ---- | ---- |\n`;
}

export function exportReportTable(markdown: string, output: string) {
    fs.writeFileSync(path.join(output, 'benchmark.md'), markdown);
}