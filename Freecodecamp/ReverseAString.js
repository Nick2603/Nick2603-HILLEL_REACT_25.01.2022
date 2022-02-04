/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

// 1.1

function reverseString(str) {
   return str.split('').reverse().join('');
};

reverseString("hello");

// 1.2

function reverseString2(str) {
   let newStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
   };
   return newStr;
};

reverseString2("hello");
