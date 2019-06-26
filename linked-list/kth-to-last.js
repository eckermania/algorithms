// Implement an algorithm to find the kth to the last element of a singly linked list

function kthToLast(head){
    let length = 0;
    let temp = head;
    while(temp !== null){
        length ++;
        temp = temp.next
    }
    temp = head;
    let value;
    for (let i = length; i > 0; i--){
        value =  temp.value;
        temp = temp.next;
    }
    return value
}