
// // ARRAY

// //// 1) duplicat; input = [1,2,3,4]; output = [1,2,3,4,1,2,3,4]
// let inputArr = [1,2,3,4];
// let inputArrTwo = inputArr; // reference copy
// let inputArrTh = [...inputArr, ...inputArrTwo]  // shallow copy
// console.log(inputArrTh);

// // 2) how many ways we empty an array
// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
// arrayList = []; // empty only mentioned array
// arrayList.length = 0; // empty array and all the references made from this array
// arrayList.splice(0, arrayList.length) // empty array and all the references made from this array

// // 3)
// var arr = [1,2,3,4]

// // add all values without looping
// let x = arr.reduce((a, b)=> {return a+b})
// console.log(x)

// // filter values grater then 1
// arr.filter(val => {return val>1})

// // add value at the first index of array
// arr.unshift(9)
// console.log(arr)

// 4) Flatten object
// const flatObj = (obj) => {
//     // console.log(obj);
//     let result = {};

//     for (const a in obj) {
//       if (typeof obj[a] === "object" && !Array.isArray(obj[a])) {
//         const temp = flatObj(obj[a]);
//         for (const b in temp) {
//           result[a + "." + b] = temp[b];
//         }
//       } else {
//         result[a] == obj[a];
//       }
//     }
//     return result;
//   };

// 5) make private properties
// let obj = {
//     _id: 1,
//     _name: "ABC", // Use an underscore to indicate it's a private property
//     set name(newName) {
//         this._name = newName;
//     },
//     get name() {
//         return this._name;
//     }
// };

// Object.defineProperty(obj, "id", {
//     get: function () {
//         return this._id;
//     },
//     enumerable: true,
// });

// Object.defineProperty(obj, "name", {
//     get: function () {
//         return this._name;
//     },
//     set: function (newName) {
//         this._name = newName;
//     },
//     enumerable: true,
// });

// obj.id = 2

// console.log(obj.id)