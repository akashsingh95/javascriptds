class Node {
    constructor(priority, value) {
        this.priority = priority;
        this.value = value;

    }

}

class PriorityQueue {
    constructor() {
        this.heap = []
    }

    insert(priority, value) {
        const newNode = new Node(priority, value);
        this.heap.push(newNode);
        let currentNodeIndex = this.heap.length - 1;
        let parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2);
        while (this.heap[parentNodeIndex] && this.heap[currentNodeIndex].priority > this.heap[parentNodeIndex].priority) {
            let temp = this.heap[parentNodeIndex];
            this.heap[parentNodeIndex] = this.heap[currentNodeIndex];
            this.heap[currentNodeIndex] = temp;
            currentNodeIndex = parentNodeIndex;
            parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2);
        }
    }

    remove() {
        if (this.heap.length > 2) {
            const result = this.heap[0];
            if (this.heap.length === 3) {
                if (this.heap[1].priority > this.heap[2].priority) {
                    this.heap[0] = this.heap[1];
                    this.heap[1] = this.heap[2];
                }
                else {
                    this.heap[0] = this.heap[2]
                }
                this.heap.pop()
                return result

            }


            this.heap[0] = this.heap.pop();
            let currentNodeIndex = 0;
            let rigthChildIndex = 2 * currentNodeIndex + 2;
            let leftChildIndex = 2 * currentNodeIndex + 1;

            while ((this.heap[rigthChildIndex] && this.heap[currentNodeIndex].priority < this.heap[rigthChildIndex].priority) ||
                (this.heap[leftChildIndex] && this.heap[leftChildIndex].priority > this.heap[currentNodeIndex].priority)) {

                if (this.heap[rigthChildIndex] && this.heap[leftChildIndex].priority < this.heap[rigthChildIndex].priority) {
                    this.swap(rigthChildIndex, currentNodeIndex)
                    currentNodeIndex = rigthChildIndex;
                    rigthChildIndex = (2 * currentNodeIndex) + 2;
                    leftChildIndex = (2 * currentNodeIndex) + 1;
                }
                else {
                    this.swap(leftChildIndex, currentNodeIndex)
                    currentNodeIndex = leftChildIndex;
                    rigthChildIndex = (2 * currentNodeIndex) + 2;
                    leftChildIndex = (2 * currentNodeIndex) + 1;
                }

            }
            return

        }
        if (this.heap.length == 2) {
            this.heap[0] = this.heap.pop()

        }
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp;
    }

    print() { console.log("##########", this.heap) }
}

var akash = new PriorityQueue();
akash.insert(2, 10);
akash.insert(1, 30);
akash.insert(11, 5);
akash.insert(3, 5);
akash.insert(4, 67);
akash.insert(5, 23);
akash.insert(7, 34)
akash.print();
akash.remove();
akash.print();