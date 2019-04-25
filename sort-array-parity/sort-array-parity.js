var sortArrayByParity = function(A) {
   
    if(A === null || A.length < 1){
        return null;
    } else if (A.length === 1){
        return A;
    } else {
        let sortedArray = [];
        A.forEach(el => {
            if(el %2 === 0){
                sortedArray.unshift(el)
            } else {
                sortedArray.push(el)
            }
        })
        return sortedArray
    }
};