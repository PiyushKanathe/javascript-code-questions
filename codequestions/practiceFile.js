// function sun(a, b, c){
//     return a + b + c;
// }

// sum(a, b, c)

// function sumCurrying (a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// function curryAddition(sum = 0) {
//   function curry(nextArg) {
//     if (nextArg === undefined) {
//       return sum;
//     } else {
//       return curryAddition(sum + nextArg);
//     }
//   }
//   curry.valueOf = function () {
//     return sum;
//   };
//   return curry;
// }

// let sum = curryAddition(2)(3)();
// console.log(sum.valueOf());

// let Arr = [
//   {
//     id: 1,
//     name: "Ketan",
//   },
//   {
//     id: 2,
//     name: "Amit",
//   },
// ];

// const newArr = Arr.sort((a, b) => {
//   if(a.name > b.name){
//     return 1
//   }
//   else if(a.name < b.name){
//     return -1
//   }
//   return 0
// })

// console.log(newArr)

var name = "xyz"
let me = {
  name: "Ashutosh Verma",
  thisInRegular: function () {
    console.log("My name is " + this.name); // 'this' binding works here
  },
  thisInArrow: () => {
    console.log("My name is " + this.name); // no 'this' binding here
  },
};
me.thisInRegular();
me.thisInArrow();
