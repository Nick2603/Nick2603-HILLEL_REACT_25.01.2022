/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.

*/

// 1.1

function diffArray(arr1, arr2) {
   let result = Array.from(new Set([...arr1, ...arr2]));
   for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
         if (arr1[i] === arr2[j]) {
            result.splice(result.indexOf(arr1[i]), 1);
         };
      };
   };
   return result;
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 1.2

function diffArray2(arr1, arr2) {
   return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
};

diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
