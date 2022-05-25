var mainD = document.getElementById("main");
mainD.innerHTML = `<h1>Hello</h1>`;

// //// 1) duplicat; input = [1,2,3,4]; output = [1,2,3,4,1,2,3,4]
// let inputArr = [1,2,3,4];
// let inputArrTwo = inputArr; // reference copy
// let inputArrTh = [...inputArr, ...inputArrTwo]  // shallow copy
// console.log(inputArrTh);

// // 2) currying example
// multi(2)(3)(4)(); //24

// function multi(val) {
//   return function (valTwo) {
//     if (valTwo) return multi(val * valTwo);
//     return val
//   };
// }
// console.log(multi(2)(3)(4)());

// // 3) how many ways we empty an array
// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
// arrayList = []; // empty only mentioned array
// arrayList.length = 0; // empty array and all the references made from this array
// arrayList.splice(0, arrayList.length) // empty array and all the references made from this array

// // 4) string  methods
// // Given a string, reverse each word in the sentence
// var stringVal = "reverse each word in the sentence";
// function reverseFun(stringVal, separator){
//   return stringVal.split(separator).reverse().join(separator);
// }
// // reverse each word
// var reverseWords = reverseFun(stringVal, "")
// console.log(reverseWords)
// var reverseString = reverseFun(reverseWords, " ")
// console.log(reverseString)

// // 5) pallindrome check function
// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return (str == str.split('').reverse().join(''));
//   }

// // 6) destructuring
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
// // console.log(aa);

//// 7) let const scope - function output will be different if we use let i or var i
// function b () {
//   for(let i =1;i<= 10;i++) {
//     setTimeout(()=> {
//     console.log(i)
//     },0);
//     }
// }
// b()

// // extended question - how to make var work like let. it can be solved with closers.
// function d(){
//   for (var i = 0; i <= 10; i++) {
//     function time(i) {
//       setTimeout(() => console.log(i), i * 100);
//     }
//     time(i);
//   }
// }
// d()

//// 8) closure
// var answer = 0;

// const baseValue = value => multipleValue => value * multipleValue;
// console.log(baseValue())

// const multiple = baseValue(2);
// console.log(multiple)

// answer = multiple(5);
// console.log(answer);

// 9) this scope
// const carDetails = {
//   name: "Tomer",
//   getName(){
//      return this.name;
//   },
  
// };
// var name = "Joe";
// var getCarName = carDetails.getName;
// console.log(getCarName());

// 10) let pe = document.querySelectorAll('div.classname p')
// console.log(pe)
