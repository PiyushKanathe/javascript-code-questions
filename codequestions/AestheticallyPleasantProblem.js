// Code challange
// There is a guy having his forest, where trees are planted in a rows format. Each row should contain a trees in visually aesthetically pleasant way.
// Check Image folder for referance
// Here each column represents tree in row and it's height. No two trees besides each other should be of equal height to make the row visually aesthetically pleasant. the owner of farm wants all the trees to be visually Aesthetical. and for that he can cut at the most 1 tree in a row. find out the number of ways possible to cut one tree in a row to make the row of tree Aesthetical.
// even if some row is already in visually Aesthetically pleasant already then return 0 as a output of function.
// else if there is chance when row can never be formed into visually aesthetical pattern even after cutting any of the tree; then function should return -1.
// eg: A[] = {3, 4, 5, 3, 7}; then it can be make visually aesthetical in 3 ways: remove 3, A[] = {4, 5, 3, 7} else remove 4, A[] = {3, 5, 3, 7} else remove 5, A[] = {3, 4, 3, 7} so function should return 3.
// g. B[] = {1, 2, 3, 4, 2, 5}; This pattern can never be forme visually aesthetical so, function should return -1.
// eg. c[] = {1, 3, 1, 2}; this pattern is already in visually aesthetically pleasant so it should return 0.

function makePleasant(arr) {
  // check if the array is pleasant
  function isPleasing(arr) {
    let condition = false;
    for (let x = 0; x < arr.length; x++) {
      if (x == 0) {
        condition = true;
      } else {
        let a = arr[x];
        let b = arr[x - 1];
        let c = arr[x + 1];
        if (c !== undefined) {
          if (a > b && a > c) {
            condition = true;
          } else if (a < b && a < c) {
            condition = true;
          } else {
            condition = false;
            return condition;
          }
        } else {
          return condition;
        }
      }
    }
    return condition;
  }
  // make and count the ways it can be made pleasent
  function count() {
    return arr.reduce(
      (previousValue, currentValue, currentIndex, array) =>
      previousValue +
        isPleasing([...array.slice(0, currentIndex), ...array.slice(currentIndex + 1)]),0);
  }
  // return ans
  return isPleasing(arr) ? 0 : count() || -1;
}

console.log(makePleasant([3,4,5,3,7])) // 3
console.log(makePleasant([1,2,3,4]))   // -1
console.log(makePleasant([1,3,1,2]))   // 0
console.log(makePleasant([1,1,1,1]))   // -1
