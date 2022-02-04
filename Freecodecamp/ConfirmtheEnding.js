/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// 1.1

function confirmEnding(str, target) {
   let strEnd = str.split('').slice(-target.length).join('');
   return strEnd === target;
};

confirmEnding("Bastian", "n");

// 1.2

function confirmEnding2(str, target) {
   return str.slice(-target.length) === target;
};

confirmEnding2("Bastian", "n");
