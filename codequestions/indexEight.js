// POLYFILLS

// // 1) Reduce method polyfill
// Array.prototype.changedReduce = function(fn, initialSt){
//     let val = this;
//     val.forEach(item => {
//         initialSt = initialSt !== undefined ? fn(initialSt, item) : item
//     })
//     return initialSt
// }
// var values = [2, 6, 8]
// console.log(values.changedReduce((a, b)=>a+b , 10))

// // 2) bind method polyfill
// Function.prototype.polyBind = function(obj){
//     let func = this;
//     return function(){
//         func.apply(obj)
//     }
// }
// // use
// let obj = {
//     name: "Jack"
// }
// let myFunction = function(){
//     console.log(`${this.name}`)
// } 

// let newFunc = myFunction.polyBind(obj)
// newFunc()

// // 3) array.flat(depth) polyfil
// function customFlat(arr, depth = 1){
//     let res = [];
//     arr.forEach((ar) => {
//         if(Array.isArray(ar) && depth > 0){
//             res.push(...customFlat(ar, depth-1))
//         }
//         else res.push(ar)
//     });
//     return res
// }
// let arrVal = [
//     [1,2],[3,4],[5,6,[7,8],9],[10,11,12]
// ]
// let oneLevelFlat = [].concat(...arrVal)

// console.log(oneLevelFlat) // one level flat
// console.log(arrVal.flat(2)) // flat with array.flat()
// console.log(customFlat(arrVal, 2)) // with custom function


// // 4) promise.all polyfill
// // normal promise
// function showText(text, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         }, time)
//     })
// }
// // // promise.all polyfill
// function customPromiseAll(promises){
//     let result = [];
//     return new Promise((resolve, reject) =>{
//         promises.forEach((p, index) => {
//             p.then(res => {
//                 result.push(res)
//                 if(index === promises.length -1){
//                     resolve(result)
//                 }
//             }).catch(err => reject(err))
//         });
//     })
// }
// customPromiseAll([
//     showText("hellow", 1000),
//     Promise.resolve("hi")
// ]).then((value) => console.log(value))