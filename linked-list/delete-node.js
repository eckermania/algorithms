// Implement an algorithm to delete a node a singly linked list, given only access to that node.

function deleteNode(node){
    if(node.next === null){
        node = null;
    }
    let tempNode =  node.next;
    node.next.next = node.next;
    node = tempNode;

    return node;

}