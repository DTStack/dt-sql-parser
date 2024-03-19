import fs from 'fs';

export class MarkdownWritter {
    constructor(writePath: string) {
        this.writePath = writePath;
    }

    public writePath: string = '';

    public markdown: string = '';

    private _MIN_TABLE_PAD_LENGTH = 8;

    /**
     * Fill string to maxLength.
     */
    private padWith(str: string, char: string, maxLength: number = this._MIN_TABLE_PAD_LENGTH) {
        if (str.length >= maxLength) return str;
        const diff = maxLength - str.length;
        const leftPadLength = Math.ceil(diff / 2);
        return str.padStart(str.length + leftPadLength, char).padEnd(maxLength, char);
    }

    writeHeader(text: string, level: number = 1) {
        const header = `${new Array(level).fill('#').join('')} ${text}`;
        this.markdown += header;
        this.writeLine();
    }

    writeText(text: string) {
        this.markdown += text;
        this.writeLine();
    }

    writeLine() {
        this.markdown += '\r\n';
    }

    writeTable(columns: { name: string; title: string }[], data: any[]) {
        let tableHeader = '';
        let tableBody = '';
        const colLengthMap = new Map<string, number>();

        if (!columns.length) return;

        // Calculate column width
        columns.forEach(({ title, name }) => {
            let max = title.length;
            data.forEach((item) => {
                max = Math.max(max, item[name]?.length || 0);
            });
            max = Math.max(max, this._MIN_TABLE_PAD_LENGTH);
            colLengthMap.set(name, max);
        });

        columns.forEach(({ title, name }) => {
            tableHeader += '|' + this.padWith(title, ' ', colLengthMap.get(name));
        });
        tableHeader += '| \n';

        columns.forEach(({ name }) => {
            tableHeader += '|' + this.padWith('-', '-', colLengthMap.get(name));
        });
        tableHeader += '| \n';

        data.forEach((item) => {
            columns.forEach(({ name }) => {
                const text = item[name] || '';
                tableBody += '|' + this.padWith(text.toString(), ' ', colLengthMap.get(name));
            });
            tableBody += '| \n';
        });
        this.markdown += tableHeader + tableBody;

        this.writeLine();
    }

    writeHiddenInput(data: any) {
        const dataStr = JSON.stringify(data);
        this.markdown += `<input type="hidden" value='${dataStr}'/>`;
        this.writeLine();
    }

    save() {
        fs.writeFileSync(this.writePath, this.markdown, { encoding: 'utf-8' });
    }
}
