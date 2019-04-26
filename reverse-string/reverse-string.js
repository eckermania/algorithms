var reverseString = function(s) {
    if(s === null){
        return null;
    } else if (s.length <= 1){
        return s;
    } else {
        let i = 0;
        let j = s.length -1;
        while (i != j) {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
        return s;
    }
};