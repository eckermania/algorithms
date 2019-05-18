function findMagic(arr){
    let magicNums=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === i){
            magicNums.push(i);
        }
    }
    return magicNums;
}