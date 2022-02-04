/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// 1.1

function findLongestWordLength(str) {
   let arrOfLenghts = str.split(' ').map(v => v.length).sort((a, b) => a - b);
   return arrOfLenghts[arrOfLenghts.length - 1];
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 1.2

function findLongestWordLength2(str) {
   let splitStr = str.split(' ');
   let longestWord = 0;
   for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length > longestWord) {
         longestWord = splitStr[i].length;
      };
   };
   return longestWord;
};

findLongestWordLength2("The quick brown fox jumped over the lazy dog");
