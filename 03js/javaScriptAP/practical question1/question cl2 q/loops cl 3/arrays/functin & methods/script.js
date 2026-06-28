// !function 
/*function myFunction() {
    console.log("Welcome to rlarchu");
    console.log("Weare learning javaScript :");
}
myFunction();*/



// function parameter
/*function myFunction(msg){
    //parameter --> input
    console.log(msg);
}
myFunction("I LOUVE JS");//argument */



//NaN Not a Number
/*function myFunction(msg,n){
    console.log(msg * n);
}
myFunction("i love js",100);*/


// sum function
// function -> numbers, sum


// [1]
  /*function sum(x,y){
    console.log(x+y);
}
// sum(800,600);
sum(8,60); */


// [2]

function sum(x,y){
    //local variable -> scope
   let s= x+y;
    return s;
}
let val = sum(3,4);
console.log(val);
