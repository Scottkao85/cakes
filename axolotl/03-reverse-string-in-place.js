/*
Write a function to reverse a string in-place ↴ .

Since strings in JavaScript are immutable ↴ , first convert the string into an array of characters, do the in-place reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're comfortable coding in a language with mutable strings, that'd be even better!
*/

const reverse = (str) => {
    let arr = str.split(''),
    n = arr.length,
    middle = Math.floor(arr.length / 2),
    temp = null;

    for (let i = 0; i < middle; i++) {
        temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    return arr.join('');
}

console.log(reverse('abcd'));
