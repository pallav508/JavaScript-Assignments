/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    function isVowel(i){
      if (i == 'a' || i == 'i' || i == 'e' || i == 'o' || i == 'u'){
        return true
      }
    }

  return str.toLowerCase().split('').filter(isVowel).length

}
// countVowels("asdasdasdasd")
module.exports = countVowels;