/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

// 1.1

function destroyer(arr) {
   let toRemove = Array.from(arguments).slice(1);
   return arr.filter(v => !toRemove.includes(v));
};

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 1.2

function destroyer2(arr) {
   let toRemove = Array.from(arguments).slice(1);
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < toRemove.length; j++) {
         if (arr[i] === toRemove[j]) {
            delete arr[i];
         };
      };
   };
   return arr.filter(item => item !== null);
};

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);
