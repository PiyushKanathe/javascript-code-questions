// // FUNCTIONS


// // 1)
// // What will be the result of these generator functions consoles

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
//   }

//   function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
//   }

//   var gen = generator(10);

//   console.log(gen.next().value); // 10
//   console.log(gen.next().value); // 11
//   console.log(gen.next().value); // 12
//   console.log(gen.next().value); // 13
//   console.log(gen.next().value); // 20


// // 2) currying example
// multi(2)(3)(4)(); //24

// function multi(val) {
//   return function (valTwo) {
//     if (valTwo) return multi(val * valTwo);
//     return val
//   };
// }
// console.log(multi(2)(3)(4)());


//// 3) let const scope - function output will be different if we use let i or var i
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


// // 4)
// var answer = 0;

// const baseValue = value => multipleValue => value * multipleValue;
// console.log(baseValue())

// const multiple = baseValue(2);
// console.log(multiple)

// answer = multiple(5);
// console.log(answer);


// // 5)
// // func([1,2,3,4,5], 2)
// // Output - [[1,2], [3,4], [5]]

// function arrSplit(arr, len) {
//   let output = [];
//   let arrTemp = arr;

//   while (arrTemp.length > 0) {
//     if (arrTemp.length >= len) {
//       let childArr = arrTemp.splice(0, len);
//       output = [...output, childArr];
//     }else{
//       output = [...output, arrTemp]
//       arrTemp = []
//     }
//   }
//   console.log(output);
// }
// arrSplit([1, 2, 3, 4, 5], 3);


// // 6)
// // for of = Array and for in = object
// // This is a demo task.
// // Write a function:
// // function solution(A);
// // that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// // For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// // Given A = [1, 2, 3], the function should return 4.
// // Given A = [−1, −3], the function should return 1.
// // Write an efficient algorithm for the following assumptions:
// // N is an integer within the range [1..100,000];
// // each element of array A is an integer within the range [−1,000,000..1,000,000].
// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let max = A.reduce((pre, curr) => {
//       return Math.max(pre, curr);
//     });
  
//     let min = A.reduce((pre, curr) => {
//       return Math.min(pre, curr);
//     });
  
//     let final = null;
  
//     for (let i = min; i <= max; i++) {
//       let na = A.includes(i);
//       if (na === false) {
//         final = i;
//       }
//     }
  
//     if (final === null && max < 0) {
//       return 1;
//     } else if (final === null) {
//       return max + 1;
//     } else if (final < 0) {
//       return 1;
//     } else if (final === 0) {
//       return final + 1;
//     } else {
//       return final;
//     }
//   }
  
//   let result = solution([1, 2, 3]);
//   let result2 = solution([1, 2, 3, 4, 6, 1, 3]);
//   let result3 = solution([-1, -2, -1]);
//   let result4 = solution([-4, -2, -3]);
//   let result5 = solution([-1, -3]);
  
//   console.log(result);
//   console.log(result2);
//   console.log(result3);
//   console.log(result4);
//   console.log(result5);


// // 7)
// // get the most repeated word and its count
// // Input: sentence = "Bob hit a ball the hit BALL flew far after it was Hit" Output: "hit"

// const getRpeated = (strSample) => {
//   let split = strSample.toLowerCase().split(" ");
//   let obj = {};
//   for (let i = 0; i < split.length; i++) {
//     if (obj[split[i]] === undefined) {
//       obj[split[i]] = 1;
//     } else {
//       obj[split[i]]++;
//     }
//   }
//   let ans = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b]) ? a : b);
//   return {[ans] : obj[ans]} 
// };

// let a = getRpeated("Bob hit a ball the hit BALL flew far after it was Hit");
// console.log(a);


// // 8) 
//// Valid Parentheses
// //Input: s = ""()[]{}""
// //Output: true
// //Input: s = ""(]""
// //Output: false"

// const validPar = (parArr) => {
//   let arr = [];

//   for (let i = 0; i < parArr.length; i++) {
//     let top = arr[arr.length - 1];
//     if (parArr[i] === "(" || parArr[i] === "{" || parArr[i] === "[") {
//       arr.push(parArr[i]);
//     } else if (parArr[i] === ")" && top === "(" && arr.length !== 0) {
//       arr.pop();
//     } else if (parArr[i] === "]" && top === "[" && arr.length !== 0) {
//       arr.pop();
//     } else if (parArr[i] === "}" && top === "{" && arr.length !== 0) {
//       arr.pop();
//     } else {
//       return false;
//     }
//   }
//   return arr.length === 0;
// };

// let chArr = "()[]{}".split("");
// console.log(validPar(chArr));
// console.log(validPar("(]"));
