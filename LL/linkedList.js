class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFront(value) {
        const newNode = new Node(value)
        if(this.head === null) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    insertBack(value) {
        const newNode = new Node(value)
        if(this.head === null) {
            this.head = newNode
        } else {
            let currentNode = this.head
            while(currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    }

    printList() {
        let currentNode = this.head
        while(currentNode !== null) {
            console.log(currentNode.value)
            console.log("->");
            
            currentNode = currentNode.next
        }
    }
}

function main() {
    const LL = new LinkedList()
    LL.insertFront(1)
    console.log(LL)
    
    LL.insertFront(2)
    console.log(LL)

    LL.insertFront(3)
    console.log(LL)

    LL.insertBack(4)
    console.log(LL)

    LL.insertBack(5)
    console.log(LL)

    LL.printList()
}

main()