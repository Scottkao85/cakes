// write a function to reverse a string in place, but since strings are
// immutable then make a copy first

let reverseStrInPlace = (str) => {
  let strRev = str.split('');
  let half = Math.floor(strRev.length/2);
  let fromBehind = strRev.length - 1;

  for(let i = 0; i < half; i++) {
    // using es6's swap
    [strRev[i], strRev[fromBehind - i]] = [strRev[fromBehind - i], strRev[i]];
  }

  return strRev.join('');
};

var test = 'what'

reverseStrInPlace(test)
