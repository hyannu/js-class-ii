// Print all even numbers from 0 to 100.


// for(let num = 0; num<=100; num++){
//     console.log("num = ", num);
// }

// EVEN NUMBER
// for(let num = 0; num <= 50; num++){
//     if(num%2 === 0){//even number
//         console.log("num = ", num);
//     }
// }

//ODD NUMBER
// for(let num = 0; num <= 50; num++){
//     if(num %2 !== 0){
//         console.log("num= ", num);
//     }
// }

// QUESTION 2.

/* Create a game where you start with any random game number. Ask the user to keep  
guessing the game number until the user enters correct value.*/

// let gameNum = 25;
// let userNum = 21;
//  while(userNum !== gameNum){//game
//     console.log("Wrong guess");
//     break;
// }
// console.log("congatualtions,you entered the righr number");


// let gameNum = 25;
// let usernum = prompt("Guess the game number : ");

// while (userNum !=gameNum){
//     userNum = prompt("You entered wrong number. Guess again : ");
// }
// console.log("congratulations, you entered the right number");








        //STRING
        // let str = "archana rao annu";
        // console.log(str[8]+ " " + str.length);


// let obj = {
//     item: "pen",
//     price:10,
// };
// let output =`the cost of ${obj.item} is ${obj.price} rupees`;
// // console.log("the cost of", obj.item,"is", obj.price, "rupees");
// console.log(output);






        // //template literals
        // let specialString = `This is a template literal`;
        // // console.log(specialString);
        // console.log(typeof specialString);



        //STRING METHOD

             //toUpperCase methods
         /*let str ="Archana Rao";
         let newStr = str.toUpperCase();
         console.log(str);
         console.log(newStr);*/

              //toLowerCase methods
         /*let str ="Archana Rao";
        let newStr = str.toLowerCase();
        console.log(str);
        console.log(newStr);*/

              //trim methods

              /*let str ="          Archana rao js     ";
              console.log(str.toUpperCase(),str.trim());*/

            //str.slice

            // let str =" 01234567";
            /*let str ="hello";
            console.log(str.slice(0,4));*/

            //str1.concat(str2) join str2 with str1
               /*let str1 = "Archana";
               let str2 = "Rao";

            //    let res =str1.concat(str2);
            //   let res =str2.concat(str1);
            // let res = str1 + str2;
              let res ="my name is " + str1.concat(str2);
               console.log(res);*/


        //        let text = "Hello World";
        //       console.log(text.includes("World")); // true
             
//           let text = "apple,banana,mango";
//          console.log(text.split(","));
// // ["apple", "banana", "mango"]


         // indexOf() methods

//          let str = "banana";
// console.log(str.indexOf("a"));//1 //
// 


// chartAt()
/*let str = "Hello";
console.log(str.charAt(1)); // e */

//toLocaleUpperCase()
//1.
    /* let text = "hello world";

console.log(text.toLocaleUpperCase());
// HELLO WORLD */


//2 example

// let str = "istanbul";

// console.log(str.toUpperCase());         // ISTANBUL
// console.log(str.toLocaleUpperCase("tr")); // İSTANBUL


   //replaceall methods

// const arr = ["apple", "banana", "apple"];

// // Using map()
// const result = arr.map(item => item === "apple" ? "orange" : item);

// console.log(result);
// // ["orange", "banana", "orange"]

 //chartAt methods

// public class Main {
//     public static void main(String[] args) {
//         String text = "Hello";

//         char ch = text.charAt(1);

//         System.out.println(ch);
//     }
// }

// trim methods

/*let str ="     archana    rao         ";
// console.log(str.trim());
console.log(str.trim()); */


//str.slice(start,end?)//returns part of string

/* let str ="hello archana rao"
let str =" 012345678";
// console.log(str.slice(start,end?))
 console.log(str.slice(3,6)); */

 //  str1.concat(str2)//  joins str2 with str1

 let str1 ="archana rao";
 let str = "annu";
//  let res =  "hello"  + 123;
let res =str1 + str2;
 console.log(res);











    // STR METHODS

   /* let str ="i loveJS";
    str[0] ="S";
    console.log(str); */

   





//  QUERSTION CL 3 
/*Prompt the user to enter their full name. Generate a username for them based on the InputDeviceInfo.
start username with @AbortController, follwed by their full name and ending with the fullname length.

eg: user name="archanarao", username should be "@archana" */

/*fullName = prompt("enter your fullname without spaces");
let username ="@" + fullName;
console.log(username); */


// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your full name: ", (fullName) => {
//   const cleanedName = fullName.replace(/\s+/g, "").toLowerCase();
//   const username = `@archanarao${cleanedName}${cleanedName.length}`;

//   console.log("Username:", username);

//   rl.close();
// });







