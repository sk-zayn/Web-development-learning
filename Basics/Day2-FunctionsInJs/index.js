// function countVowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   vowelsCount = 0;
//   for (let i of vowels) {
//     for (let j of str) {
//       if (i == j) {
//         vowelsCount += 1;
//       }
//     }
//   }
//   console.log(vowelsCount);
// }

// countVowels("aeiouaeiou");

//Functions

// Normal functions
// Syntax -> function functionName(Parameter){codes to execute when function is called} -> functionName(arguments)

//Arrow functions
// Syntax -> let/const functionName(Parameter) => {codes to execute when function is called} -> functionName(argumetns)

// .ForEach() -> its an array function which iterates over each element to perform specific task. it returns undefined
// it takes only function as a parameter.
// Syntax -> arrayName.forEach((iteratorName) => { code here });
let arr = [1, 2, 3, 4, 5];
// Printing Squares
arr.forEach((num) => {
  console.log(num * num);
});
// Printing Cubes
arr.forEach((element) => {
  console.log(element ** 3);
});

// .Map() -> its an array function which iterates over each element to perform specific task. it returns a new array.
// Syntax -> arrayName.map((element) => {code to perform some tasks});
// it takes only function as a parameter.
// .Map and .Foreach are same (if you want new array use .Map)(if you just want to perform some task on each element use .forEach)
// if we give condition on .Map it will return boolean value insted of elements
let newArr = arr.map((val) => {
  return val*val
});
console.log(newArr);

// .Filter() -> its an array function that is used to filter elements based on the condition. it returns a new array.
// it takes only function as a parameter

let filteredArray = arr.filter((val)=>{
  return val % 2 == 0
})
console.log(filteredArray);

// ARRAY METHOD: reduce():
// reduce() is an array method that processes multiple values and reduces them into a single value.
// Syntax -> array.reduce((accumulator, currentValue) => { return accumulator; }, initialValue);
// Parameters:
// accumulator  -> stores the result of the previous operation
// currentValue -> current element of the array
// initialValue -> starting value for accumulator (recommended)
// Working:
// 1. If initialValue is provided:
//    - accumulator starts with initialValue
//    - currentValue starts from index 0
// 2. If initialValue is NOT provided:
//    - accumulator starts at index 0
//    - currentValue starts at index 1
// After each iteration:
// - The returned value is stored in accumulator
// - The process continues till the end of the array

// - reduce() returns a SINGLE value
// - Original array is NOT mutated
// - return statement is mandatory
// - Common uses: sum, total, count, flatten array
let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

Result:
sum = 10

let arr1 = [87, 45, 98, 95, 92, 45];
let sortedArray = arr1.filter((val)=>{
  if(val> 90){
    return val
  }
})
console.log(sortedArray);

// const numInput =Number(prompt('Enter a number: '));
let n = 5
let arr2 = [];
for(let i = 1; i <= n; i++){
  arr2.push(i)
}
let reducedArr = arr2.reduce((res, curr)=>{
  return res + curr
},0)

console.log(reducedArr);

