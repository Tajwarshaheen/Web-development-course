function factorial(n) {
    if (n < 0) {
        return -1; // Factorial is not defined for negative numbers
    } else if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

console.log(factorial(4));



function tajuwar(t) {
    if(t<0){
        return -1;
    }
    else if(t===0){
        return 1 ;
        
    }
    else{
        return t * tajuwar(t-1);
    }
}
console.log(tajuwar(6));