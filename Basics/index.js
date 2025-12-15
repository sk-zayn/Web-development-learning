// this is a single line comment
/*this is a multi line
comment
 */

// promp (input) is not allowed in terminal for javascript
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
use on objects and arrays
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
