export class Stack<Type> {
    private stackData: Array<Type> = [];

    push(dataItem: Type): void {
        this.stackData.push(dataItem);
    }

    pop(): void {
        this.stackData.pop();
    }

    isEmpty(): boolean {
        return this.stackData.length === 0;
    }

    printStack(): void {
        for (let i = this.stackData.length - 1; i >= 0; i--) {
            console.log(this.stackData[i]);
        }
    }
}