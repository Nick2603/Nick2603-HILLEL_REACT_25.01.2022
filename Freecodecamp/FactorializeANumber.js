/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

// 1.1

function factorialize(num) {
   if (Number.isInteger(num) && num >= 0) {
      return (num !== 0) ? num * factorialize(num - 1) : 1;
   } else {
      return 'Please enter integers greater than or equal to zero';
   };
};

factorialize(5);

// 1.2

function factorialize2(num) {
   if (Number.isInteger(num) && num >= 0) {
      let result = 1;
      while (num) {
         result *= num--;
      }
      return result;;
   } else {
      return 'Please enter integers greater than or equal to zero';
   };
};

factorialize2(5);
