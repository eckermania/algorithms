// Clone a linked list with a random pointer.

function cloneList(head){
    let tempList = [];
    function Node(node){
        this.value = node.value;
        this.next = node.next;
        this.random = node.random;
    }
    while (head.next !== null){
        let tempNode = Node(head);
        tempList.push(tempNode);
        head = head.next;
    }

    class LinkedList {
        constructor(value) {
            this.head = null;
            this.random = null;
            this.addToHead(value);
        }
        
        addToHead(value) {
            const newNode = { value };
            newNode.next = this.head;  
            this.head = newNode;       
            this.length++;
            return this;
        }
    }

    let newList = new LinkedList(tempList[0].value);
    for(let i = 1; i<tempList.length; i++){
        newList.addToHead(tempList[i])
    }

    return newList
}