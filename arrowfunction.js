let fun = () => {
    console.log("This is an arrow function");
}
fun();
let single = ()=> console.log("Single line arrow function");
single();
// Example with parameters addition
let add = (a, b) => a + b;
console.log(add(5, 10));
// Example with single parameter
let greet = name => `Hello, ${name}!`;
console.log(greet("Alice"));
// Example with no parameters
let getCurrentTime = () => new Date().toLocaleTimeString();
console.log(getCurrentTime());
// Example with multiple statements
let multiply = (x, y) => {
    let result = x * y;
    return result;
};
console.log(multiply(4, 6));
// Example returning an object
let createPerson = (name, age) => ({ name: name, age: age });
console.log(createPerson("Bob", 30));
// Example with default parameters
let power = (base, exponent = 2) => Math.pow(base, exponent);
console.log(power(3));
//example subtraction
let subtract = (e,y)=> e-y;
 console.log(subtract(43,65));




//  only function
let functionExample = function() {  
    console.log("This is a regular function");
}
 