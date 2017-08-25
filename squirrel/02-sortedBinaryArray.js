// Sort binary array in linear time
// Given an binary array, sort it in linear time and constant space. Output should print contain all zeroes followed by all ones.

// For example,

// Input: { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

var sortBinaryArray = function(array) {
	var i = 0;
	var j = array.length - 1;

	// as long as we're not the same
	while(i < j) {
		// if the left item is greater then it must be 1
		// so you need to swap them
		if (arr[i] > arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
	    }

	    // if the current item is zero increment one to find the next
	    if (arr[i] === 0) {
	      i = i + 1;
	    }

	    // if the current item is one then decrease by one to find the next
	    if (arr[j] === 1) {
	      j = j - 1;
	    }
	}
	return array
	};
};