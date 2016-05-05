
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


//Write a function that return the number of arguments passed to the function when called.
// Question 5
// I have no idea how to do this one :)

var numberOfArguments = function(){
  return args.length
}

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar")
// should return the string "ratset gaj".


function reverse(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--)
    newString += string[i];
  return newString;
}

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord (array) {
  longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

// Write a function filterLongWords that takes an array of words and a number i and returns the array
// of words that are longer than i characters long.

function filterLongWords (array, num) {
  var newArray = [];
  for (var i = 0, i < array.length, i++) {
    if (array[i].length > num){
    newArray.push(array[i]);
    }
  }
return newArray;
}
