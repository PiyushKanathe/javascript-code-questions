// // Hacker rank questions
// //1) 

// let person = {
//     name: 'Leonardo'
// }

// let animal = { 
//     spieces: "snake"
// }

// Object.freeze(person);
// person.name = 'leema';
// console.log(person)
// // output : { name : "Leonardo"}

// // 2) 
// let dummyObj = {
//     price: 199,
//     get_price: function(){
//         return this.price
//     }
// }

// let realObj = Object.create(dummyObj);
// realObj.price = 299

// delete realObj.price
// console.log(realObj.price)
// // output : 199

//  // 3) 
//  // I)
//  var a = 1;
//  (function(){
//      console.log(a);
//      var a = 2;
//      console.log(a)
//  })()
// // II)
// var a = 1;
// (function(){
//     console.log(a);
//     a = 2;
//     console.log(a)
// })()
// //output : undefined, 2, 1, 2  // hoisting logic

// // 4)
// var count = 1;
// function placeOrder(){
//     console.log(count); // undefined
//     var count = 2;
//     console.log(count) // 2
//     function sendOrder(){
//         console.log(count) // undefined - hoisting
//         count++;
//         console.log(count); // undefined++ = NaN
//         var count = 4;
//         console.log(count); // 4
//         var count = 10;
//     }
//     sendOrder()
// } 
// placeOrder()

// // // 5) 
// function Rect (l, b){
//     this.length = l;
//     this.breadth = b;

//     this.area = function(){
//         console.log(this.length * this.breadth)
//     }
// }

// Rect.prototype.area1 = function(){
//     console.log(this.length * this.breadth)
// }

// Rect.prototype.area2 = function(){
//     console.log(this.length * this.breadth)
// }

// let rect = new Rect(2, 5)
// rect.area(); // 10
// rect.area1(); // 10
// rect.area2(); // 10

// // 6
// const arr = [0, 1, 3, 2, 5, 11, 112, 21, 12, 111, 4]
// arr.sort()
// console.log(arr) // [0, 1, 11, 111, 112, 12, 2, 21, 3, 4, 5 ]

// // 7
// const arr = [10, 12, 15, 21]
// for(var i = 0; i < arr.length; i++){
//     setTimeout(function(){
//         console.log('Index: ' + i + ', element: '+ arr[i] )
//     }, 3000)
// }
// // Output: Index: 4, element: undefined

// // 8
// const arr = [-1, 0, 1, 0, 4, -1, 0, -2]
// arr.filter(a=>a)
// console.log(arr)

// // 9 
// (function(){
//     setTimeout(()=> console.log(1), 2000);
//     console.log(2);
//     setTimeout(() => console.log(3), 0);
//     console.log(4)
// })(); // output 2,4,3,1

// // 10
// var x = 12;
// var y = 8;
// var res = eval("x + y");
// console.log(res) // 20

// // 11
// const obj1 = { x: 10, y: 20 };
// let obj2 = obj1;
// obj2.x = 100;
// console.log(obj1.x, obj2.x) // 100, 100

// // 12
// function foo (){
//     function bar(){return 3;};
//     return bar();
//     function bar(){return 8;};
// }
// console.log(foo()) 

// (function(){
//     var a = b = 4;
//     const x = y = 5
// })()

// console.log(a)
// console.log(b)
// console.log(x)
// console.log(y)
