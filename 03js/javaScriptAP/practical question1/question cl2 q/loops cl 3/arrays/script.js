//ARRAYS
// let marks_student1 =  97;
// let marks_student2 =



/*let heroes = ["ironman", "hulk", "thor","batman",""];
console.log(heroes);
console.log(heroes.length);*/



/*let marks = [97,82, 75, 64, 36];
console.log(marks);
console.log(marks.length);*/

//looping over an array
//for loop

/*let heroes = ["ironman", "hulk", "thor","batman","vijaythalapati"];
     for(let idx = 0; idx < heroes.length; idx++){//good
        console.log(heroes[idx]);
    //   for(let idx = 1; idx <= heroes.length; idx++){//not good
        // console.log(heroes[idx - 1]);
     }*/

        //for of loop
      /*  let heroes = ["ironman", "hulk", "thor","batman","vijaythalapati"];
        for(let hero of heroes) {
            console.log(hero);
        }*/

            // example2 for of loop

            /*let cities = ["delhi", "gopalganj", "pune","hydrabad"];
            for(let city of cities){
                // console.log(city);
                console.log(city.toUpperCase());
            }*/





                //PRACTICE QUESTION-1(LEC 4 ARRAY)

                /* for a given array with marks of students->[85,97,44,37,76,60]
                find the average marks of the entire class.*/

                 /*let marks=[85,97,44,37,76,60];
                 let sum = 0;
                //  sum =(marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5])/6;
                for (let val of marks){
                    // sum = sum+val;
                    sum+=val;
                }
                let avg = sum/marks.length;
                 console.log(`avg marks of the class = ${avg}`);*/
                 
                 


                 //PRACTICE QUESTION-2(LEC 4)
                 /*for a given array with prices of 5 item->[250,645,300,900,50]
                 all items have an offer of 10% off on them.change the array to store 
                 final price after applying offer.*/

                 /*let items = [250,645,300,900,50];
                 let i = 0;
                 for(let val of items){
                    // console.log(`value at index ${i} = ${val}`);
                    let offer = val / 10;
                    items[i] = items[i] - offer;
                    console.log(`value after offer = ${items[i]}`);
                    i++;

                 }*/
                //second rule
                /*let items = [250,645,300,900,50];
                for(let i = 0; i < items.length; i++) {
                    let offer = items[i] / 10;
                    items[i] -= offer;
                } 
                console.log(items);*/



                //ARRAY METHODS
                /* let foodItems =["potato","apple","litchi","tomato"];
                 foodItems.push("chips","banana","panne");
                 console.log(foodItems);*/

                //  pop methods
                
                let foodItems =["potato","apple","litchi","tomato"];
                 console.log(foodItems);
                 let deletedItem = foodItems.pop();
                
                 console.log(foodItems);
                 console.log("deleted",deletedItem);
               
                


                 
            