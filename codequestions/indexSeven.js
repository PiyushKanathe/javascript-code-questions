var arr = [1,2,3,4]

// add all values without looping
let x = arr.reduce((a, b)=> {return a+b})
console.log(x)
// filter values grater then 1
arr.filter(val => {return val>1})
// add value at the first index of array
arr.unshift(9)
console.log(arr)

var person = {
    name: 'Alvin',
    mobile: 87647346464,
    email: 'alvin@gmail.com'
}
// No of properties in object
// console.log(len)
let len = Object.keys(person).length
console.log(len)
// Delete object property without delete operator 
const {email, ...newPerson} = person
console.log(person)
console.log(newPerson)

// // promise Chaining 
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//     alert(result); // 1
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 2
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) {
  
//     alert(result); // 4
  
//   });

// for of = Array and for in = object