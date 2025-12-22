// map//////
const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);


// filter///////
const number = [1,2,3,4,5,6];
const evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce///////
const nums = [1,2,3,4,5];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);


// map-2
const ajay =[45,65,76,72,43]
const evenNmbers = ajay.reduce(num =>num %2===0);
console.log(evenNumbers);


 const yawar =[9,6,8,3,5,3,5,4]
 const oddNumbers = yawar.filter(num => num%2!=0);
 console.log("odd Number is" , oddNumbers);
  
// check days 

 const op = ["sunday"];
     if(op=="sunday"){
        console.log("beautifull morning");
        
     } 
     else if(day=="Monday"){
        console.log("nice day");

        
     }
     else if( day=="Tuesday"){
        console.log("amazing day");
     }
     else{
        console.log("sorry very good day");
        
     }