// Sort binary array in linear time
// Given an binary array, sort it in linear time and constant space. Output should print contain all zeroes followed by all ones.

// For example,

// Input: { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

var sortBinaryArray = function(array) {
	for(var i = 0; i <= array.length; i++) {
		if(array[i] === 1) {
			array.push(array.splice(i, 1)[0])
			i--;
		}
	};

	return array;
};