// Given a singly linked list which has data sorted in ascending order, construct a balanced BST.

function constructBST(head){
    if(!head) return null;
    
    const sorted = [];
    
    let cur = head;
    
    while(cur) {
        sorted.push(cur.val);
        
        cur = cur.next;
    }
    
    const generate = (l, r) => {
        if(l > r) return null;
        
        const mid = Math.floor((r+l)/2);
    
        let val = sorted[mid];
        
        const node = new TreeNode(val);

        node.left = generate(l, mid-1);
        node.right = generate(mid + 1, r);
        
        return node;
    };
    
    return generate(0, sorted.length-1);
}