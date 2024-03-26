export class SimpleStack<T> {
    constructor() {
        this.stack = [];
    }
    private stack: T[];

    push(item: T) {
        this.stack.push(item);
    }

    pop(): T {
        return this.stack.pop();
    }

    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    clear() {
        this.stack = [];
    }

    size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}
