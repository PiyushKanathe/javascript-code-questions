// STRINGS / OPERATORS

// // 1)
// // What will be printed in console
// console.log(3 + '1') // 31
// console.log('3' + '1') // 31
// console.log('3' + 1) // 31

// console.log('3' - 3) // 0
// console.log('3' - '3') // 0
// console.log(3 - '3') // 0

// console.log('3' * 1) // 3
// console.log('3' * '1') // 3 
// console.log(3 * '1') // 3

// console.log( null + 25) // 25

// console.log(true + true) // 2
// console.log(true + false) // 1
// console.log(false + false) // 0

// // 2) string  methods
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

// // 3) pallindrome check function
// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return (str == str.split('').reverse().join(''));
//   }
