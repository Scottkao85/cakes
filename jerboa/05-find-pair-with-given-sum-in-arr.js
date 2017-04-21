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

let test = [-1,-100,1,2,3,4,5,123,4,1,2];

findPairSum(test, 100);
