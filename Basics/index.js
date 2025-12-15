// this is a single line comment
/*this is a multi line
comment
 */

// promp (input) is not allowed in terminal for javascript. prompt will always gives you string value
console.log('Hello World!');


/*  Ternary operator -> compact if else
Syntax -> condition ? if true : if false
*/
// let age = 18;
// let result = age >= 18 ? 'adult' : 'not adult';
// console.log(result);

// const grade = prompt('Enter a number here:');
// if (grade >= 90 ){
//   console.log('you got', grade, 'your grade is A')
// } else if (grade >=  80) {
//   console.log('you got', grade, 'your grade is B');
// } else{
//   console.log('you failed');
// }

/*for loop
Syntax -> for(initializer, condition, updation)
 */
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i
};
console.log(sum);

/*while loop
Sytax -> initialize outside loop while (condition){code , updation}*/
i = 1;
while (i <= 10) {
  console.log(i);
  i++
}

/*Do While loop
Syntac -> initialize outside loop do{code, updation} while{condition};
*/
j = 10;
do {
  console.log(j);
  j++
} while (j <= 5);


/*For of loop
Syntax -> for (let iterator of iterable ) this will iterate over the iterable
use on arrays and strings
*/

let str = 'zainshaikh';
for (let i of str){
  console.log(i);
}

/*for in loop
Syntax -> for (let iterator in iterable) this will iterate over each keys(only)
use on objects and arrays (but not prefered in array use for of instead)
*/

let student = {
  name : 'Zain',
  age : 22,
  add : 'Mumbra',
  qualification : 'Graduate'
};
for (i in student){         // this will iterate over keys
  console.log('keys =', i,'values =', student[i]); // this will print keys as well as values
}

//STRINGS are immutable
let str1 = 'zain';
str1.toUpperCase()
str.toLowerCase()
str.trim()
console.log(str1.slice(1, 4)); // slice (starting index , ending index)
console.log(str.concat(str1)); // to add two stings
console.log(str1.replace('in','hid')); // to replace a substing in the string replace(oldvalue, newvalue)


// let userName = prompt('Enter your full name:');
// nameLength = userName.length;
// console.log(`@${userName}${nameLength}`);

//Arrays (List (Python)) are mutable
// it can store multiple data types (but we prefer to store values of similar data type)

// .push() to add new value at the end of the array. it changes the original array
// .pop() deletes the last value in the array. it changes the original array
// .toString() changes the whole array into a string with values comma seperated. it give a new array
// .concat() add two or more array seperated by comma. it gives a new array
// .unshift() to add new value at the start of the array. it changes the original array
// .shift() to delete the first value in the array. it changes the original array
// .slice(startingValue, endingValue) to gives the values. it give a new array
/* .splice(startingIndex, deleteCount, newValue) it takes 3 parameters ((starting index value) to start deletion or insertion from that index value),
  ((deleteCount value) to delete number of elements including starting index value),
  ((newValues) will add the new values at the starting index it can be multiple values seperated by comma) */


let marks = [84, 96, 44, 37, 76, 60];
sum = 0;
for(let i of marks){
  sum += i
}
console.log(sum / marks.length);


// printing a new array with 10% discount of all the values

// for of loop
// let itemPrice = [300, 250, 500, 450, 600];
// i = 0
// for(let val of itemPrice){
//   discout = val / 10
//   itemPrice[i] = val - discout
//   i++
// }
// console.log(itemPrice);

// for loop
let itemPrice = [300, 250, 500, 450, 600];
let discountedPrice = [];
for (let i = 0; i<itemPrice.length; i++){
  discount = itemPrice[i] / 10
  discountedPrice.push(itemPrice[i] - discount)
};
console.log(itemPrice);
console.log(discountedPrice);




