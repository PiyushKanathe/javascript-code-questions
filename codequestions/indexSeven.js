// // ASYNC - learn about "EVENT LOOPING"


// // 1)
// // promise Chaining 
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   }).then(function(result) {
//     console.log(result); // 1
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   }).then(function(result) { // (**)
//     console.log(result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   }).then(function(result) {
//     console.log(result); // 4
//   });


// // 2)
//   functionOne = function () {
//     console.info("First");
//     setTimeout(() => {
//       console.info("After");
//     }, 5000);
//     console.info("waiting..");
//   };
//   functionTwo = function () {
//     console.info("second");
//   };
//   functionOne();
//   functionTwo();
  // // output
  // First
  // waiting..
  // second
  // After
