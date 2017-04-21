// Given an array A[] and a number x, check for pair in A[] with sum as x
console.log(findSumInArray([0, 5, 2, 5, 1, 2, 4, 2, 1], 5));

function findSumInArray(arr, sum) {
    var sortedArr = arr.sort();
    var store = [];

    // store high and low values
    var low = 0;
    var high = sortedArr.length - 1;

    while (low < high) {
        // check to see if they make the sum.
        if (sortedArr[low]+ sortedArr[high] == sum) {
            store.push([sortedArr[low], sortedArr[high]]);
            high--;
        // if sum is lower than target sum, increment low
        } else if (sortedArr[low] + sortedArr[high] < sum) {
            low++;
        // if sum is higher than target sum, decrement high
        } else if (sortedArr[low] + sortedArr[high] > sum) {
            high--;
        }

    }
    return store;
}
