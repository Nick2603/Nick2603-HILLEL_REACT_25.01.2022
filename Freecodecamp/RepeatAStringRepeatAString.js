/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

// 1.1

function repeatStringNumTimes(str, num) {
   let newStr = '';
   for (let index = 0; index < num; index++) {
      newStr += str;
   };
   return newStr;
};

repeatStringNumTimes("abc", 3);

// 1.2

function repeatStringNumTimes2(str, num) {
   let newStr = "";
   while (num > 0) {
      newStr += str;
      num--;
   };
   return newStr;
};

repeatStringNumTimes2("abc", 3);
