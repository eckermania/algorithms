//Linked List constructor
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
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

let list = new LinkedList('k');
list.addToHead('a');
list.addToHead('y');
list.addToHead('a');
list.addToHead('k');


// check if a linked list is a palindrome

function isPalindrome(head) {
    let array = []
    let node = head
    while(node != null){
        array.push(node.val)
        node = node.next
    }
    while(head != null){
        if(head.val != array.pop()){
            return false
        }
        head = head.next
    }
    return true
};

isPalindrome(list);
