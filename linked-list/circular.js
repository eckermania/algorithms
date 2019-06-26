// Write an algorithm to determine if a linkedlist is circular. FOLLOW UP: Determine where the circle meets.
function isCircular(head){
    let fast = head;
    let slow = head;
    while(fast !== null && fast !== slow){
        fast = fast.next.next;
        slow  = slow.next;
    }
    slow = head;
    while(fast !== slow){
        fast = fast.next;
        slow =  slow.next
    }
    return  slow;
}

