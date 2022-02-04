/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

// 1.1

function findElement(arr, func) {
   return arr.find(func);
};

findElement([1, 2, 3, 4], num => num % 2 === 0);

// 1.2

function findElement2(arr, func) {
   let num = 0;
   for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
         return num;
      };
   };
   return undefined;
};

findElement2([1, 2, 3, 4], num => num % 2 === 0);
