/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
   arr.sort((a, b) => a - b);
   let result = [];
   let a = arr[0];
   let b = arr[1] - arr[0];
   for (let index = 0; index <= b; index++) {
      result.push(a);
      a++;
   };
   return result.reduce((sum, current) => sum + current, 0);
};

sumAll([1, 4]);
