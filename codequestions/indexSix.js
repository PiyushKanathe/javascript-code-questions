// func([1,2,3,4,5], 2)
// [[1,2], [3,4], [5]]

// function arrSplit(arr, len){
//     let output = [];
//     let arrTemp = arr;
//     let innArr = [];

//     for(let i=0; i<len; i++){
        
//         innArr = [arrTemp[i]]
//     }
// }

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

// console.log(3 + '1')
// console.log('3' * 1)
// console.log('3' - 3)
// console.log( null + 25)
console.log(true + true)
console.log(true + false)
console.log(false + false)

console.log(true * true)
console.log(true * false)
console.log(false * false)


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
