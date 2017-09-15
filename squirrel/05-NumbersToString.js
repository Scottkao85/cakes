// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
// For example,
// 123 -> "One Hundred Twenty Three"
// 12345 -> "Twelve Thousand Three Hundred Forty Five"
// 1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

var simpleDigitData = {
	0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteeen'
}

var twoDigitData = { 2: 'twenty', 3: 'thirty', 4: 'fourty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' }


var tenthPowerData = { 2: 'hundred', 3: 'thousand' }

var convertNumToStr = function(number) {
	if(number < 20) {
		return simpleDigitData[number];
	}

	var num = (''+number).split('');
	var temp = [];
	var result = '';
	console.log(num,'num');

	if(temp.length <= 2) {
		var what = newNumData[num[0]];
		console.log('what', what, 'huh', temp[1])
		result = result + twoDigitData[num[0]] + simpleDigitData[num[1]];
	}
	 // else if(temp.length > 2 && temp.length <= 4) {
	// 	result = result + simpleDigitData[0] + tenthPowerData[temp.legnth-1]
	// }

	return result;
}