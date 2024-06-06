/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]


 [ 1,7 , 9,  45 ]    ["Str", "alex","moh"]  ['the','fox' ,'over' ,lazy, 'dog'  ]


*/
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]


Banana=[1]  Tomato[0] 

*/
/*
3
Create an array represents your:
1- Favorite Food (5)  let food["mansaf","ozi", "ads","mande","shawrma"]
2- Favorite Sport (3)  let sport["running","swming", "football",]
3- Favorite Movie (4) let food["green mail","last us", "evil","boosan",]
*/
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array*/
/*
let array = [1, 2, 3, 4, 5, 2, 0, "ali"];
function last() {
  console.log(` number of array:${array.length}`);
  console.log(` the last number of array=${array[array.length - 1]}`);
}
last(array);
*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.push(10);
console.log(array);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.pop(1);
console.log(array);
*/

/*

let array = [1, 3, 4, 7, 6, 5, 4, 4];
let middle = Math.floor(array.length / 2);
if (array.length % 2 === 1) {
  console.log(array[middle]);
} else if (array.length % 2 === 0) {
  console.log`${array[middle - 1]}" and "${array[middle]}`;
}
*/
/*let animals = ["cat", "ele", "bird"];

animals[0] = "zebra";
animals[1] = "elephant";

console.log(animals);
*/
/*
function indexOfArray(array, index) {
  return array[index];
}

const nums = [1, 2, 3, "osama", 9];

console.log(indexOfArray(nums, 3));
*/
/*
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(0, 4));
*/
/*
function addToEnd(arr, value) {
  let newArray = arr.slice();

  newArray.push(value);

  console.log(newArray);
}

let nums = [1, 2, 3, 8, 9];
let end = addToEnd(nums, 55);
*/
/*
num = [1, 2, 3, 4, 5];
num.splice(5, 0, 6);
console.log(num);
*/
/*
function array(arr) {
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }

  return avg;
}

let nums = [1, 2, 3];
let number = array(nums);
console.log(number);
*/

/*
function odd(arr) {
  let oddnumber = [];
  for (let i = 0; i > arr.length; i++) {
    if ((arr = [i] % 2 == 1)) {
      console.log(odds);
    }
  }
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odds = odd(num);
*/
