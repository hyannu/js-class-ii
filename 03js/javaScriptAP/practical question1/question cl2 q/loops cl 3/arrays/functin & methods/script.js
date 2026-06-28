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

/*function sum(x,y){
    //local variable -> scope
   let s= x+y;
    return s;
}
let val = sum(3,4);
console.log(val);*/



/*//Arrowsum function
function sum(a,b) {
    console.log(a+b);
};
//multiplication function

function mul(a,b){
    return a*b;
}
sum(23,45);
console.log(mul(3,9));*/

//arrow multiplication function

/*function sum(a,b) {
    console.log(a+b);
};
//multiplication function

function mul(a,b){
    return a*b;
}
const arrowMul = (a,b) =>{
    return a*b;
};
console.log(const arrowMul);
sum(2,5);
console.log(mul(45,5));
console.log(arrowMul(5,6 ));*/






//PRACTICE QUESTION
/*Create a function using the "function" keyword 
that takes a string as an argument & return the 
number of vowels in the string.*/

/*function countVowels(str){
    for (const char of str){
        console.log(char);
    }
}
countVowels("apnacollege");*/


/*function countVowels(str){
    let count = 0;
    for(const char of str){
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" ||  
            char === "u") 
            {   
           count++;
        }
    }
    console.log(count);
}
// countVowels("apnacollege");
countVowels("bdrty");*/


//question [2]

// create an arrow function to perform the same Task.
 /*const countVow=(str) => {
    let count = 0;
     for(const char of str){
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" ||  
            char === "u") 
            {   
           count++;
        }
    }
    console.log(count);
}
countVow("educations");*/


// forEach loop in arrays

/*let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit.toUppercase());
});*/


//arrow function use in forEach loop
// example1
/*let arr =[1,2,3,4,5,6,7,8,2];
arr.forEach((val) => {
    console.log(val);
});

// example2
let numbers = [10, 20, 30];

numbers.forEach((value, index) => {
    console.log(index, value);
}); */


//forEach callBack function
/*let arr = [100, 200, 300];

arr.forEach((element, index, array) => {
    // console.log(element, index, array);
    
    console.log(element); // Current value
    console.log(index);   // Current index
    console.log(array);   // Original array
});*/





