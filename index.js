const pre=65;
   if(pre>90){
       console.log("A");
   }
   else if(pre>=80){
       console.log("A-");
   }
   else if(pre>=70){
       console.log("B+");
   }
   else if(pre>=60){
       console.log("B");
   }    
   else if(pre>=50){
       console.log("C");
   }
   else if(pre>=40){
       console.log("D");
   }

   else{
       console.log("Fail");
   }
//    for loop
   for(let i=1;i<=5;i++){
       console.log("Hello World",i);
   }
//    while loop
 console.log("while Loop");
 
   let j=1;
    while(j<=5){
        console.log("Hello World",j);
        j++;
    }
//    do while loop
    console.log("do while Loop");
    let k=1;
    do{
        console.log("Hello World",k);
        k++;
    }while(k<=5);
//    switch case
    let day=3;
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
        case 6:
            console.log("Saturday");
            break;      
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Day");
        }
        