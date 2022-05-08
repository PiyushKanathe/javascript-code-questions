// /*
// - Write method findPath
// - Should take two params: - object  - keys separated by dots as string
// - Return value if it exists at that path inside the object, else return undefined
// */
// Incomplete

// var obj = {
//     a: {
//         b: {
//             c: 12,
//             j: false
//         },
//         k: null
//     }
// };

// const findPath = (objVal, str) => {
//     let arr = str.split('.')
//     let obj = objVal
//     for (let i=0; i< arr.length; i++){
//         var key = arr[i];
//         if(key in obj){
//             if(obj[key] !== null){
//                 obj = obj[key]
//             }
//             else{
//                 return undefined
//             }
//         }
//         else{
//             return undefined
//         }
//     }
//     return obj
// }

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null