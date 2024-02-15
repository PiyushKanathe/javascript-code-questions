// // 1) Correct
// var a = 2;
// (function(globle){
//     var a = 3;
//     console.log(a); // 3
//     console.log(globle.a); // 2
// })(window)

// // 2) Correct
// console.log(""== 0, false == 0, undefined == "", undefined == null)

// // 3) Incorrect - 2
// import { myFunction } from './myStuff';
// console.log(myFunction(99,22))
// // to
// import("./myStuff").then(myStuff=> {console.log(myStuff.myFunction(99,22))})

// // 4) Correct
// var a = false;
// if(a){
//     function foo(){console.log("a")}
// } else {
//     function foo(){console.log("b")} // b
// }
// foo()

// // 5) Correct
// let x = "Outer Value";
// (function(){
//     console.log(x); // referance error: cannot access 'x' before initialization
//     let x = "Inner Value";
// }())

// // 6) Correct
// function f(){console.log(arguments);}; // [Arguments] {'0': [1, 2]}, [Arguments] {'0': 1, '1': 2}, [Arguments] {'0': 1, '1': 2}, [Argumets]{'0': 1, '1': 2}
// f([1,2]);
// f(1,2);
// f.apply(null, [1,2]);
// f.call(null, 1, 2)

// // 7) Correct
// function A(){}
// function B(val){
//     this.valB = val
// }
// B.prototype = Object.create(A.prototype);
// var b = new B(2)
// console.log(b.valB); // 2
// console.log(val) // undefined

// A.prototype.val = 1;
// console.log(b.val); // 1

// // 8) Correct
// function A(id){
//     this.id = id;
// }
// A.fn = function (){
//     console.log('in A.fn', this.id)
// }
// A.id = 'class A';
// A.prototype.fn = function (){
//     console.log('in A.prototype.fn', this.id)
// }

// var a = new A('object A');
// a.fn(); // in A.prototype.fn object A
// A.fn(); // in A.fn class A

// // 8) Correct
// try{
//     undefined() // TypeError: undefined is not a function
// } catch(error){
//     console.log(error)
// }
// console.log(error) // ReferenceError: err is not defined

// 9)
// How would you validate an enum with PropTypes? - PropTypes.oneOf(['News', 'Photos'])

// // 10)
// function foo(a){
//     var b = a * 2;
//     function bar(c){
//         console.log(a, b, c) // 2, 4, 12
//     }
//     bar(b*3)
// }
// foo(2)

// // 11)
// const div_p = (x ,y) => Promise.resolve([x,y])
// .then(([x,y]) => {
//     if(y){
//         let a = Math.floor(x/y);
//         let b = x%y;
//         return [a, b];
//     }
//     throw new Error('Division by 0 is not allowed');
// })
// .catch(err => {
//     console.log("in catch")
//     return ["err", "err"]
// })
// .then(([q,r])=>{
//     console.log('second then');
//     return [`quotient=${q}`, `remainder=${r}`]
// })
// .finally(()=>[1,1]);

// // div_p(1, '0').then(r => console.log(r)); // ['quotient=Infinity', 'remainder=NaN']
// // div_p(1,0).then(r => console.log(r)); // ['quotient=err', 'remainder=err']
// // div_p(2,1).then(r => console.log(r)); // ['quotient=2', 'remainder=0']
// // div_p(1,2).then(r => console.log(r)); // ['quotient=0', 'remainder=1']

// const counter = function(initialValue, stepVal){
//     var c = initialValue || 0;
//     return function next(){
//         c = c + stepVal;
//         return c
//     }
// }

// const c1 = new counter(1, 1)
// console.log(c1(), c1()); // 2,3

// // 12
// const counter = function(initialValue, stepVal){
//     return {
//         val: initialValue,
//         next(){
//             this.val = this.val + stepVal;
//             return this.val
//         }
//     }
// }

// const c = counter(0,2);
// console.log(c.val, c.next(), c.val); // 0, 2, 2

// // 13)
// for(var i=1; i<=5; i++){
//     setTimeout(function timer(){
//         console.log(i); // 66666
//     }, i*1000)
// }

// // 14)
// const a = {
//     one: '1.0',
//     two: '2.0',
//     three: '3.0'
// }
// const {one, ...rem} = a;
// const all = {...a};
// console.log(one === '1.0', rem === undefined, rem.three === '3.0', all.one === a.one) // true, false, true, true

// // 15)
// const defaultVal = () => 1;
// const required = arg => { throw Error(`Argument ${arg} is required`)};

// const fn = ({a= defaultVal(), b= required('b')}) => {
//     console.log(`a, b=`, a, b)
// }

// try{
//     [{b: 'b'}, {a: 'a', b: 'b'}, {a: 'a', b: undefined}].map(fn)
//     // `a, b=`, 1, b
//     // `a, b=`, a, b
//     //  Argument b is required
// }catch(err){
//     console.log(err.message)
// }

// // 16)
// var obj = {
//     val: 0,
//     inc(){
//         this.val++;
//         console.log(this.val)
//     }
// }

// var inc = obj.inc;
// inc(); // NaN
// inc.call(obj); // 1
// obj.inc(); // 2
// var obj2 = {val: 2}
// var inc2 = inc.bind(obj2);
// inc2(); // 3

// // 17) Incorrect
// const a = [1,2,3];
// const [one, ...rem] = a;
// const [first, , ,fourth] = a;
// console.log(one === 1, rem.every((i,j)=>i == j+2), first === 1, fourth === 2) // true, true, true, false

// // 18)
// const a = {o:1};
// a.o = 2;
// console.log(a); // {o:2}

// // 19)
// function onClick(event){
//     const eventType = event.eventType;

//     setTimeout(function(){
//         console.log(event.type) // click
//         console.log(eventType) // click
//     }, 0)
// }
