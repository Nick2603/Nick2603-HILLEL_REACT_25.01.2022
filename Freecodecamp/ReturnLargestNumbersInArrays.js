/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// 1.1

function largestOfFour(arr) {
   let largestNumber = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
   for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      for (let subArrIndex = 0; subArrIndex < arr[arrIndex].length; subArrIndex++) {
         if (arr[arrIndex][subArrIndex] > largestNumber[arrIndex]) {
            largestNumber[arrIndex] = arr[arrIndex][subArrIndex];
         };
      };
   };
   return largestNumber;
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 1.2

function largestOfFour2(arr) {
   return arr.map(function (subArr) {
      return subArr.reduce(function (previousLargestNumber, currentLargestNumber) {
         return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, Number.MIN_SAFE_INTEGER);
   });
};

largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
