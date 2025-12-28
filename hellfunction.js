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