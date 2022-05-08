// 1) "this"
// // this referce to the object it is being used inside or the this references the object that is currently calling the function(we can bind the function to different objects with call, bind and apply methods).
// let counter = {
//     count: 0,
//     next: function () {
//       console.log( ++this.count )
//     },
//   };
  
//   counter.next();
// // A line of code written outside a function is said to belong to the global context and the value of this in this global context is the same as the global object.
// // this of a function referce to the object they are in. in this context it, this of below function will refer to global object which have value = 10 
// var value = 10;
// function x(i, j){
//     var value = 41;
//     console.log("Normal function " + this.value + " " + value)
//     function y (){
//         console.log("innner function " + this.value + " " + value)
//     }
//     y()
// }
// x(10, 10);

// // writing like below will add a property to global object
// function addToGlobal(){
//     this.newPropery = "New Property Value"
// }
// addToGlobal()
// console.log(window.newPropery)

//// 2) call bind apply
// let obj = {
//     value: 21
// }
// let a = x.bind(obj, 10, 10);
// a()
// let b = x.call(obj, 10, 10);
// console.log(b)
// let c = x.apply(obj, [10, 10]);
// console.log(c)

// const y = () => {
//     var value = 11
//     console.log("arrow function" + " " + this.value + " " + value)
// }
// // y()

// // Arrow function behavior with this -  Arrow functions treat this keyword differently. 
// // They don’t define their own context since it doesn’t have its own this context. 
// // They inherit that from the parent scope whenever you call this.
// // in the arrow function, this has nothing to do with the caller object of the function. 
// // It refers to the scope where the function (the enclosing context) is present. thats why below arrow function will print "My name is xyz"
// // It referes to the scope its been called in.
// var name = "xyz"
// let me = {
//   name: "Ashutosh Verma",
//   thisInRegular: function () {
//     console.log("My name is " + this.name); // 'this' binding works here
//   },
//   thisInArrow: () => {
//     console.log("My name is " + this.name); // no 'this' binding here
//   },
// };
// me.thisInRegular();
// me.thisInArrow();

