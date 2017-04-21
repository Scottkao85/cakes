//find a pair with a given sum in the array

// o(n^2) finds all permutations in the array, could probably find a way to
// short circuit it, but I feel that running this once and saving the results
// is better for later
let findAllPermutations = (arr) => {
  let results = {};
  let sum;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      results[sum] = `${arr[i]} + ${arr[j]} = ${sum}`;
    }
  }

  return results;
};

let findPairSum = (arr, n) => {
  let permutations = findAllPermutations(arr);

  return permutations[n] || false;
};

// OTHER SOLUTION
// o(n) had to sort first though
// let findPairSum = (arr, n) => {
//   let sortedArr = arr.sort( (a, b) => { return a - b; } );
//   let behind = sortedArr.length - 1;
//   let front = 0;
//   let sum;
//   let pair;
//
//   while (front !== behind) {
//     pair = [sortedArr[front], sortedArr[behind]];
//
//     sum = pair[0] + pair[1];
//
//     if (sum > n) {
//       behind = behind - 1;
//     }
//
//     if (sum < n) {
//       front = front + 1;
//     }
//
//     if (sum === n) {
//       return pair;
//     }
//   }
//
//   return false;
// };

let test = [-1,-100,1,2,4];

findPairSum(test, 6);
