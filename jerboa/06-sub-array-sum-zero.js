let test = [4, 2, -3, -1, 0, 4];

let checkSumZero = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (sum === 0) {
    return true;
  } else {
    return false;
  }
}

let findCombinations = (arr) => {
  let length = Math.pow(2, arr.length);
  let ans = [];
  let result = [];

  for (let i = 0; i < length; i++) {
    ans = [];

    for (let j = 0; j < arr.length; j++) {
      if ((i & Math.pow(2, j))) {
        ans.push(arr[j]);
      }
    }

    if (ans.length !== 0) {
      result.push(ans);
    }
  }

  return result;
};

let sumArrayZero = (arr) => {
  let combinations = findCombinations(arr);
  let answers = [];

  for (let i = 0; i < combinations.length; i++) {
    if (checkSumZero(combinations[i])) {
      answers.push(combinations[i]);
    }
  }

  return answers;
};

sumArrayZero(test);


// WTF SUB ARRAYS

// Function to print all sub-arrays with 0 sum present
// in the given array
let printallSubarrays = (arr) => {
  // n is length of the array
  let n = arr.length;

  // consider all sub-arrays starting from i
  for (let i = 0; i < n; i++) {
    let sum = 0;
    // consider all sub-arrays ending at j
    for (let j = i; j < n; j++) {
    // sum of elements so far
    sum = sum + arr[j];
      // if sum is seen before, we have found a sub-array with 0 sum
      if (sum === 0) {
        console.log("Subarray [" + i + ".." + j + "]");
      }
    }
  }
}

printallSubarrays([1,2,3,0,-3,-6])
