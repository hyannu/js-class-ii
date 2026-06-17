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
            let str ="hello";
            console.log(str.slice(0,4));

