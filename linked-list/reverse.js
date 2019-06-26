// Reverse a linked list – iteratively and recursively

function reverse(head){
    if (!head || !head.next) {
        return head;
      }
      let temp = reverse(head.next);
      head.next.next = head;
      head.next = undefined;
      return temp;
}