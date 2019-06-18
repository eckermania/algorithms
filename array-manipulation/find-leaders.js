// Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.

function findLeaders(array){
    let currMax = 0;
    let leaders=[];
    for(let i=array.length-1; i>0; i--){
      if(array[i]>currMax){
        leaders.unshift(array[i]);
        currMax=array[i]
      }
    }
    return leaders
}