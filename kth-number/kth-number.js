var findKthNumber = function(n, k) {
    // generate array that covers all integers between 1 and n
    let lexiArray = [1];
    let newInt = 1;
    while(newInt < n){
        newInt++;
        lexiArray.push(newInt);
    }
    // sort array into lexicographical order
    for(let i = 0; i < lexiArray; i++){

    };
};


findKthNumber(13, 3);