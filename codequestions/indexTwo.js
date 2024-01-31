// // OBJECT


// 1) "this" - It is an spacial identifier which is automatically gets defined inside an object and function. 
// In both cases it refers to an object.
// // this referce to the object it is being used inside or the this references the object that is currently calling the function
// // (we can bind the function to different objects with call, bind and apply methods).
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

// // Properties of this keyword
// I) Implicit Binding:
// When a method is called on an object, this refers to the object the method was called on.
// javascript
// Copy code
// let person = {
//   name: 'John',
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };
// person.greet(); // Outputs: Hello, John!

// II) Explicit Binding:
// You can explicitly set the value of this using methods like call(), apply(), or bind().
// javascript
// Copy code
// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }
// let person = {
//   name: 'John'
// };
// greet.call(person); // Outputs: Hello, John!

// III) Constructor Functions:
// When a function is used as a constructor (via the new keyword), this refers to the newly created instance.
// javascript
// Copy code
// function Person(name) {
//   this.name = name;
// }
// let john = new Person('John');
// console.log(john.name); // Outputs: John


// IV) Arrow Functions:
// Arrow functions do not have their own this binding. Instead, they inherit this from the enclosing scope.
// javascript
// Copy code
// let person = {
//   name: 'John',
//   greet: function() {
//     setTimeout(() => {
//       console.log(`Hello, ${this.name}!`);
//     }, 1000);
//   }
// };
// person.greet(); // Outputs: Hello, John! (even after 1 second)

// V) Global Object (or undefined in strict mode):
// In the global scope or in functions not bound to any object, this refers to the global object (window in a browser environment). In strict mode, it is undefined.
// javascript
// Copy code
// console.log(this === window); // Outputs: true (in a browser environment)

// VI) Event Handlers:
// In event handler functions, this typically refers to the DOM element that triggered the event.
// html
// Copy code
// <button onclick="console.log(this)">Click me</button>


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
// // it don’t define its own context since it doesn’t have its own this context. 
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


// // 3)
// /* 
// - Write method findPath
// - Should take two params: - object  - keys separated by dots as string
// - Return value if it exists at that path inside the object, else return undefined
// */

// const findPath = (objVal, str) => {
//     let arr = str.split('.')
//     let obj = objVal
//     var output;

//     for (let i=0; i< arr.length; i++){
//         var key = arr[i];
//         if(typeof obj === "object" && key in obj){
//             output = obj[arr[i]]
//             obj = obj[arr[i]]
//         }
//         else{
//             output = undefined
//         }
//     }

//     return output
// }
// var obj = {
//     a: {
//         b: {
//             c: 12,
//             j: false
//         },
//         k: null
//     }
// };
// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

// // 4)
// // What will be the result
// const parentObject = {
//     g1: `Hay, Im the parent`,
//     childObject: {
//         g2: `Hay, Im the child`,
//         makeAnnouncemnet: function(){
//             console.log(this.g1 + ' and ' + this.g2);
//         }
//     },
//     hello: () => {
//         console.log('g1', this.g1)
//     }
// }

// parentObject.childObject.makeAnnouncemnet()
// parentObject.hello()


// // 5) destructuring
// let a = {
//   prop: "arrow",
//   props: "cab",
//   propss: "dh",
//   kab: {
//     app: "sub",
//     bpp: "dub",
//   },
//   deb: [1, 2, 3, 4],
// };
// let {
//   prop,
//   kab: { app: kappa },
//   deb: [, aa],
// } = a;
// // console.log(prop, kappa, aa);


// // 6) this scope
// const carDetails = {
//   name: "Tomer",
//   getName(){
//      return this.name;
//   },
  
// };
// var name = "Joe";
// var getCarName = carDetails.getName;
// console.log(getCarName());

// // 7)
// var person = {
//     name: 'Alvin',
//     mobile: 87647346464,
//     email: 'alvin@gmail.com'
// }
// // No of properties in object
// let len = Object.keys(person).length
// console.log(len)
// // Delete object property without delete operator 
// const {email, ...newPerson} = person
// console.log(person)
// console.log(newPerson)
