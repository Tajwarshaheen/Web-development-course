
let count = 5;
function counting() {
 switch (count) {
    case 5:
        console.log(" count is Five");
        break;
    case 4:
        console.log(" count is Four");    
        break;
    case 3:
        console.log(" count is Three");    
        break;
    case 2:
        console.log(" count is Two");
        break;
    case 1:
        console.log(" count is One");
        break;
 } 
 for(i=0; i<5; i++){
    count--;
 }
    

 
    setTimeout(counting, 1000);
}
counting();