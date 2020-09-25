class ArrayRotator {
    rotateLeft(arr, n){
       
    let i = 0;
    while(i < n){
        arr.unshift(arr.pop());
        i++;
       
    }
        return arr;
    }
}

module.exports = ArrayRotator;