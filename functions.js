function standLine(num1, num2) {
   // A1: sets up the array to count by tens
   // A2: it pushes out the first number from the array which is registered with num1
   // A3: the new number will place at the end of the array which is registered with num2
   // R: will show the final product from the push and shift which is whatever the user inputs
   var countByTens = [10, 20, 30, 40, 50, 60];
   countByTens.push(num1);
   countByTens.shift(num2);
   return countByTens;
}
function shoppingList(string1, num1) {
   // A1: a list of computers
   // A2: listing computer brands by best to worst
   // R: a list of sub arrays consist of differnt kind of computer brands and their rankings. user will add new brand and quantity
   var computers = [
      [" hp ", 1],
      [" dell ", 2],
      [" acer ", 3],
      [" toshiba ", 4],
   ];
   computers.push(string1, num1);
   return computers;
}
function arrWithUnshift(string1) {
   // A1: a list of array in vegetables
   // R: adding the element at the start of the array
   var vegetables = [" mushrooom ", " potato ", " lettuce "];
   vegetables.unshift(string1);
   return vegetables;
}
function arrWithShift(string1) {
   // A1: a list of array in fruits
   // R: it removes the first element and adds a new one with user input
   var fruits = [" grapes ", " apples ", " oranges "];
   fruits.shift(string1);
   fruits.unshift(string1);
   return fruits;
}
function arrWithPop(string1) {
   // A1: a list of arrays in ice cream
   // R: removes the last element and adds a new one with user input
   var iceCream = ["strawberry", "chocolate", "vanilla"];
   iceCream.pop(string1);
   iceCream.push(string1);
   return iceCream;
}
function arrWithPush(string1) {
   // A1:list the arrays in skittles
   // R: adds the element in the end of the array
   var skittles = ["red", "blue", "green"];
   skittles.push(string1);
   return skittles;
}

function nLastCharaString(string1) {
   // A1: a set of characters
   // R: the second to last letter of the word
   return string1[string1.length - 2];
}
function lastCharaString(string1) {
   // A1: a set of characters
   // R: the last letter of the word
   return string1[string1.length - 1];
}

function nCharaString(string1) {
   // A1: user types a set of characters
   // R: picks the 4 character of the string. (remember the computer starts from 0)
   return string1[3];
}
function firstCharaString(string1) {
   // A1: user types a set of characters
   // R: the first letter of the word
   return string1[0];
}

function lengthString(string1) {
   // A1: user inputs word
   // R: count the amount of characters in a word
   return string1.length;
}
function stringsWithVariables(string1) {
   // A1: user inputs in favorite sport
   // R: user inputs combined with a preset set of strings
   return "Do you love " + string1 + " like the professionals?";
}
function glueStringsPlusEquals(string1, string2) {
   // A1: a set of words
   // A2: a set of words
   // R: a sentence from A1 and A2 combine with each other
   return (string1 += " " + string2);
}
function glueStrings(string1, string2) {
   // A1: a set of words
   // A2: a set of words
   // R: a sentence from A1 and A2 combine with each other
   return string1 + string2;
}
function quotientDecimals(input1, input2) {
   // A1: a number with decimals, not letter or any other special characters
   // A2: a number with decimals, not letter or any other special characters
   // R: a value from A1 and A2
   return input1 / input2;
}

function productDecimals(input1, input2) {
   // A1: a number with decimals, not letter or any other special characters
   // A2: a number with decimals, not letter or any other special characters
   // R: a value from A1 and A2
   return input1 * input2;
}

function decrement(input1) {
   // A1: a number, not letter or any other special characters
   // A2: deducts one less from the return
   // R: a value from A1 and A2
   input1--;
   return input1;
}
function increment(input1) {
   // A1: a number, not letter or any other special characters
   // A2: adds one more to the return
   // R: a value from A1 and A2
   input1++;
   return input1;
}

function quotient(input1, input2) {
   // A1: a number, not letter or any other special characters
   // A2: a number, not letter or any other special characters
   // R: a value from A1 and A2
   return input1 / input2;
}

function product(input1, input2) {
   // A1: a number, not letter or any other special characters
   // A2: a number, not letter or any other special characters
   // R: a value from A1 and A2
   return input1 * input2;
}

function difference(input1, input2) {
   // A1: a number, not letter or any other special characters
   // A2: a number, not letter or any other special characters
   // R: a value from A1 and A2
   return input1 - input2;
}

function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
