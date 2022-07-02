var mainD = document.getElementById("main");
mainD.innerHTML = `<h1>Hello</h1>`;

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

// // 4) -
// let pe = document.querySelectorAll('div.classname p')
// console.log(pe)
// html 5 api
// memorising in javascript
// Splice and slice difference
