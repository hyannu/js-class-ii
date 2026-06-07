// console.log('Good morning everyone');

//object create
let rectangle = {
  lenght: 1,
  breath: 2,

  draw: function () {
    console.log("This is a draw function");
  },
};

// let Annu = {
//   city: "GopalGanj",
//   State: "Bihar",
//   Hair: "Black",
//   age: 23,
//   University: "Inverties",
//   rao: {
//     greet: "Ram Ram",
//   },
// };

// console.log(Annu);
// console.log(Annu.rao);
// console.log(Annu.rao.greet);

// console.log("The length is: ",rectangle.lenght);
// console.log("The breath is: ",rectangle.breath);

// rectangle.draw();
// let collage = {
//   branch: "cse",
//   pin: "841436",
//   dp: "cse",
//   vishalguru: {
//     age: 45,
//     address: {
//       new: "bareilly",
//     },
//   },
// };
// console.log(collage.vishalguru.address.new);

function createRectangle(){
  return rectangle= {
    length:1,
  breadth: 2,
  draw(){
    console.log('drawing rectangle');

  }
  }; 
}
let rectangleObj1= createRectangle();
console.log(rectangleObj1);

kya hua