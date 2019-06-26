// Write code to remove duplicates from an unsorted linked list. Follow up: How would you solve it if temporary buffer is not allowed?

function removeDupes(head){
    let nums = [];
    let currNode = head;

    while(currNode.next !== null){
        if(nums.indexOf(currNode.next.value) !== -1){
            nums.push(currNode.next.value);
        } else {
            let tempNext = currNode.next.next;
            currNode.next = tempNext;
        }
        currNode = currNode.next;
    }
    return head
}