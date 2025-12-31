// hell function  in js
function father(){
    console.log("hello child");
 child()    

}
function child(){
    console.log("Hello Father");
}
father();


function other(){
    console.log("other  function is running");  
    suther();  
}
function suther(){
    console.log("suther function is running");
}
other();


let promise = new Promise((resolve, reject) => {
    let a = 9;
    if (a%2==0) {
        resolve()
                console.log("resolve");
        
    } else {
        reject();
        console.log("reject");
        

    }
})

// let submit = new Promise((resolve, reject) => {
//     let   submit = 23;
//     if (submit ==0){
//         console.log("your data is resolve");
//         resolve();
//     }
//     else{
//         console.log("your data is reject");
//         reject();
        
//     }
// })