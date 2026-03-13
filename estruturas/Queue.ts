export class Queue<Type> {
    private queueData: Array<Type> = [];

    enqueue(dataItem: Type): void {
        this.queueData.push(dataItem);
    }

    dequeue(): void {
        this.queueData.shift();
    }

    isEmpty(): boolean {
        return this.queueData.length === 0;
    }

    printQueue(): void {
        for (let item of this.queueData) {
            console.log(item);
        }
    }
}