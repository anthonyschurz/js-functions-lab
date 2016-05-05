
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript.
// Question 1

function maxOfTwoNumbers(x,y) {
  if (x > y){
    return x;
  }
  if (x === y){
    return 'they are equal';
  }
  else {
    return y;
  }
}

maxOfTwoNumbers();

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c) {
  if (a>(b&&c)) {
    return a;
  }
  if (b>(a&&c)) {
    return b;
  }
  if (c>(a&&b)) {
    return c;
  }
  else {
    return 'You have passed equal values into the function. Please choose different numbers.';
  }
}


// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

// Question 3

function isCharacterAVowel(character) {
  var vowelArray = ['a','e','i','o','u']
  if (vowelArray.indexOf(character) !== -1){
    return true;
  }
    return false;
  }


// Define a function sumArray and a function multiplyArray that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should return 24.


function sumArray(myArray) {
var sum = 0;
for (var i = 0; i < myArray.length; i++) {
  sum += arr[i];
}
return sum;
}


function multiplyArray(myArray) {
var prod = 0; 
for (var i = 0; i < myArray.length; i++) {
  prod *= arr[i];
}
return prod;
}




// Write a function that return the number of arguments passed to the function when called.

// Question 4
function multiplyArray() {

}













// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// Question 5
var numberOfArguments = function(){

}

// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// Bonus

// Question 6
var reverseString = function (){

};

// Add a method reverseString (from question 6) to the object String so that it is possible to
// call: "General Assembly".reverseString().

// Question 7
function findLongestWord () {

}

// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurences for each letter, regardless of the case
// For example, calling the function with the string "General Assembly" will return:
//
// {
//   a: 2,
//   b: 1,
//   e: 3,
//   g: 1,
//   l: 2,
//   m: 1,
//   n: 1,
//   r: 1,
//   s: 2,
//   y: 1
// }

// Question 8
function filterLongWords () {

}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {

}
