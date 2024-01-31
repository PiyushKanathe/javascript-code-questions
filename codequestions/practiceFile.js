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

// function b () {
//   for(var i =1;i<= 10;i++) {
//     setTimeout(()=> {
//     console.log(i)
//     },0);
//     }
// }
// b()

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

// What will be the result
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

// (function () {
//     var a = b = 4;
//     const x = y = 5;
//     console.log(a);
//     console.log(b);
//     console.log(x);
//     console.log(y);
//   })();

// var value = 10;
// function p() {
//   var value = 41;
//   console.log("Normal function " + this.value + " " + value);
//   function y() {
//     console.log("innner function " + this.value + " " + value);
//   }
//   y();
//   const a = () => {
//     console.log("innner function " + this.value + " " + value);
//   };
//   a();
// }
// p();

// var valueOuter = 10;
// const q = {
//   value: 41,
//   y() {
//     console.log(`innner function => ${this.value}, ${this.valueOuter}, ${valueOuter}`);
//   },
//   a: () => {
//     console.log(`innner arrow function => ${this.valueOuter}, ${valueOuter}`);
//   },
// };

// q.y()
// q.a()

// let a = "innner arrow function";

// function titleCase(str){
//   let splitArr = str.split(" ");
//   let updated = splitArr.map(value => {
//     return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`
//   })
//   return updated.join(" ")
// }

// console.log(titleCase(a))

// const b = [4,6,8 ,7, 3, 2];

// function findLowHigh(arr){
//   let min = math.min(arr)
//   let max = math.max(arr)
//   return {min, max}
// }

// let a = "innner arrow function";

// function findOccurrences(str){
//   const strArr = str.replace(/\s/g).split('');
//   let strArrSet = Array.from(new Set(strArr));
//   let finalResult = {};
//   for(let i=0; i<= strArrSet.length; i++){
//     let b = strArrSet[i];
//     console.log(b)
//     const filArr = strArr.filter(value => value === strArrSet[i]);
//     finalResult[b] = filArr.length;
//   }

//   return finalResult;
// }
// console.log(findOccurrences(a))

// /**
//  * @return {Generator<number>} - fibbonacci with generator function
//  */
// var fibGenerator = function*(callCount) {
//   let holder = 0;
//   let holderTwo = 1;
//   let result = [holder, holderTwo]
//   yield(holder)
//   yield(holderTwo)
//   for(let i = 0; i < callCount-1; i++){
//       yield(holder + holderTwo)
//       result.push(holder + holderTwo)
//       const temp = holderTwo
//       holderTwo = holder + holderTwo;
//       holder = temp
//   }
//   return result;
// };

// const gen = fibGenerator(5);
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 0

// var chunk = function(arr, size) {
//   const result = [];
//   if(arr.length === 0) return result
//   while(arr.length){
//       if(arr.length > size){
//           result.push(arr.splice(0, size))
//       } else {
//           result.push(arr);
//           arr = []
//       }
//   }
//   return  result
// };

// console.log(chunk([1,2,3,4,5], 1))

// /**
//  * @param {Function} fn
//  * @param {number} t
//  * @return {Function}
//  */
// var timeLimit = function(fn, t) {

//   return async function(...args) {
//     const timeoutPromise = new Promise((_, reject) =>
//     setTimeout(() => reject("Time Limit Exceeded"), t)
//   );

//       try{
//           const result = await Promise.race([fn(...args), timeoutPromise]);
//           console.log(result)
//           return result
//       }
//       catch(error){
//           return error
//       }
//   }
// };

// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

// Array.prototype.snail = function(rowsCount, colsCount) {
//   if(rowsCount * colsCount !== this.length){
//       return []
//   }
//   let arr = this;
//   let result = [];
//   for(let i=0; i< rowsCount; i++){
//     result.push([])
//   }

//   for(let col = 0; col< colsCount; col++){
//     if(col % 2 === 0){
//       for(let row = 0; row < rowsCount; row++){
//         result[row].push(arr.shift())
//       }
//     } else {
//       for(let row = rowsCount-1; row >= 0; row--){
//         result[row].push(arr.shift())
//       }
//     }
//   }

//   return result;
// }

// const arr = [1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(arr.snail(4,3))  // [[1,2,3,4]]

var TimeLimitedCache = function () {
  this.store = new Map();
  this.setTimeoutObj = {};
};

// /**
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   if (this.store.has(key)) {
//     this.store.set(key, value);
//     clearTimeout(this.setTimeoutObj[key]);
//     this.setTimeoutObj[key] = setTimeout(() => {
//       this.store.delete(key);
//     }, duration);
//     return true;
//   } else {
//     this.store.set(key, value);
//     setTimeout(() => {
//       this.store.delete(key);
//     }, duration);
//     return false;
//   }
// };

// /**
// * @param {number} key
// * @return {number} value associated with key
// */
// TimeLimitedCache.prototype.get = function (key) {
//   if (this.store.has(key)) {
//       return this.store.get(key)
//   }
//   return -1
// };

// /**
// * @return {number} count of non-expired keys
// */
// TimeLimitedCache.prototype.count = function () {
//   return this.store.size;
// };

// const timeLimitedCache = new TimeLimitedCache() // null
// console.log(timeLimitedCache.set(1, 42, 50)); // false
// console.log(timeLimitedCache.set(1, 50, 1)) ; // true
// console.log(timeLimitedCache.get(1)) // 50
// console.log(timeLimitedCache.get(1)) // 50

// setTimeout(()=>{
//   console.log(timeLimitedCache.get(1))  // -1
// console.log(timeLimitedCache.count()) // 0
// }, 1000)

// class EventEmitter {
//   constructor() {
//     this.events = new Map();
//   }

//   subscribe(eventName, callback) {
//     if (!this.events.has(eventName)) {
//       this.events.set(eventName, []);
//     }

//     const eventCallbacks = this.events.get(eventName);
//     eventCallbacks.push(callback);

//     const unsubscribe = () => {
//       const index = eventCallbacks.indexOf(callback);
//       if (index !== -1) {
//         eventCallbacks.splice(index, 1);
//       }
//     };

//     return { unsubscribe };
//   }

//   emit(eventName, args = [], subscription = null) {
//     if (!this.events.has(eventName)) {
//       return [];
//     }

//     const eventCallbacks = this.events.get(eventName);
//     if (subscription === null) {
//       return eventCallbacks.map((callback) => callback(...args));
//     } else {
//       const matchedSubscription = eventCallbacks.find(sub => sub === subscription && sub.active);
//       if (matchedSubscription) {
//           return matchedSubscription.callback(...args);

//       } else {
//           return [];
//       }
//     }
//   }
// }

// // Example usage
// const emitter = new EventEmitter();

// const subscription1 = emitter.subscribe("firstEvent", () => 5);
// const subscription2 = emitter.subscribe("firstEvent", () => 6);

// console.log(emitter.emit("firstEvent", [], subscription1)); // [5]

// subscription1.unsubscribe();
// console.log(emitter.emit("firstEvent", [], subscription1)); // [6]

// /**
//  * @param {Object|Array} obj
//  * @return {Object|Array}
//  */
// var compactObject = function (obj) {
//   if (Array.isArray(obj)) {
//       let result = [];
//       for (let a of obj) {
//           if (typeof (a) === 'object' && a !== null) {
//               result = [...result, ...compactObject(a)]
//           } else {
//               if (a) {
//                   result = [...result, a]
//               }
//           }
//       }
//  return result

//   } else if (typeof (obj) === 'object' && obj !== null) {
//       let result = {};
//       for (let i in obj) {
//           let value = obj[i]
//           if (typeof(value) === 'object' && value !== null) {
//               result[i] = compactObject(value)
//           } else {
//             if(obj[i]) result[i] = obj[i]
//           }
//       }
//  return result

//   }
// };

// console.log(compactObject([null, 0, 5, [0], [false, 16]]))

// var join = function(arr1, arr2) {
//     let map = [...arr1]
//     for(let elem of arr2){
//         let a = map.findIndex(obj => elem.id === obj.id)
//         if( a !== -1){
//            map[a] = Object.assign(map[a], elem);
//         }
//         else {
//             map.push(elem)
//         }
//     }
//     return map.sort((a, b) => a.id - b.id )
// };

// console.log(join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}],
// [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]))

// var promiseAll = function (functions) {
//   let result = [];
//   return new Promise((resolve, reject) => {
//     functions.forEach((p, index) => {
//       p()
//         .then((res) => {
//           result[index] = res;
//           if (result.length === functions.length && !result.includes(undefined)) {
//             resolve(result);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   });
// };
//   promiseAll([
//     () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
//     () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//     () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
//   ]).then(result => console.log(result))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const missingInteger = function (nums) {
//   if(nums.length === 1){
//     return nums[0]+1
//   }
//   let finalSum = [];
//   let seq = [];
//   for (let i = 0; i <= nums.length; i++) {
//     if (seq.length === 0) {
//       seq.push(nums[i]);
//     } else if (seq.length !== 0 && seq[seq.length - 1] === nums[i] - 1) {
//       seq.push(nums[i]);
//     } else {
//       finalSum = [...finalSum, seq];
//       seq = [nums[i]];
//     }
//   }

//   let reduced;
//   if (finalSum.length > 0) {
//     let arr = finalSum.sort((a, b) => b.length - a.length);
//     reduced = arr[0].reduce((a, value) => a + value, 0);
//     let numsSorted = nums.sort((a, b) => a - b);
//     if (!numsSorted.some((num) => num >= reduced)) return reduced;
//     for (let i of numsSorted) {
//       if (reduced < i) {
//         if (i !== reduced + 1) {
//           return reduced + 1;
//         } else {
//           reduced++;
//         }
//       }
//     }
//   }
//   return reduced + 1;
// };

// // console.log(missingInteger([3,4,5,1,12,14,13, 18]))
// // console.log(missingInteger([1, 2, 3, 2, 5]));
// // console.log(missingInteger([38]));
// console.log(missingInteger([37,1,2,9,5,8,5,2,9,4]));

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var numberGame = function (nums) {
//   let tempArr = [...nums.sort((a, b)=> b-a)];
//   let result = []
//   while(tempArr.length) {
//       if (tempArr.length > 1) {
//           let a = tempArr.splice(-2);
//           result = [...result, ...a]
//       } else {
//           result.push(tempArr[0])
//       }
//   }
//   return result
// };

// console.log(numberGame([4,2,6,6,9,7]))

// /**
//  * @param {number} num
//  * @return {number}
//  */
// var minimumSum = function(num) {
//   let arr = num.toString().split("")
//   return Number(`${arr[0]}${arr[3]}`) + Number(`${arr[1]}${arr[2]}`)
// };

// console.log(minimumSum(2932))

// function minMovesToSeat(seats, students) {
//   seats.sort((a, b) => a - b);
//   students.sort((a, b) => a - b);

//   let moves = 0;

//   for (let i = 0; i < seats.length; i++) {
//     let a = Math.abs(seats[i] - students[i]);
//       moves += a;
//   }

//   return moves;
// }

// // Example 1:
// const seats1 = [3, 1, 5];
// const students1 = [2, 7, 4];
// console.log(minMovesToSeat(seats1, students1)); // Output: 4

// const rotateArr = ( arr, by ) => {
//   let length = arr.length;
//   roateMod = by % length;

//   return [...arr.slice(length - roateMod), ...arr.slice(0, length-roateMod)]
// }

// console.log(rotateArr([1,2,3,4,5,6,7], 2))

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canBeIncreasing = function (nums) {
//   const increasing = (temp) => {
//     for (let i = 0; i < temp.length; i++) {
//       if (temp[i - 1]  >= temp[i]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   for(let i = 0; i < nums.length; i++){
//     removedArr = [...nums.slice(0, i), ...nums.slice(i+1)]
//     if(increasing(removedArr)){
//       return true
//     }
//   }

//   return false;
// }
// console.log(canBeIncreasing([1,2,10,5,7]));


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//   let result= []
//   for(let i = 0; i<nums.length; i++){
//       for(let j = i+1; j<nums.length; j++){
//           for(let k = i+2; k<nums.length; k++){
//               if(nums[i]+nums[j]+nums[k] === 0){
//                 let a = [nums[i], nums[j], nums[k]].sort((a, b)=> a-b);
//                 if(!result.some((arr)=> JSON.stringify(arr) === JSON.stringify(a))){
//                   result.push(a)
//                 }
                 
//               }
//           }
//       }
//   }
//   return result.length
// };

// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,0,0]))

// var findMedianSortedArrays = function(nums1, nums2) {
//   let a = [...nums1, ...nums2].sort((a, b) => a - b);
//   let len = a.length
//   if (len % 2 === 0) {
//     let p = a[len / 2];
//     let q = a[(len / 2) - 1]
//       return (p + q) / 2
//   }
//   else if (len % 2 === 1) {
//     let p = a[Math.round(len / 2)]
//       return p  
//     }
//   return 0
// };

// console.log(findMedianSortedArrays([1,3], [2]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = []
  nums.map(num => {
      if(!result.includes(num)){
          result.push(num)
      }
  })
  return result.length
};

console.log(removeDuplicates([1,1,2]))