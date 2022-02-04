/*
Check if a value is classified as a boolean primitive. Return true or false.
*/

// 1.1

function booWho(bool) {
   if (bool === true || bool === false) return true;
   return false;
};

booWho(null);

// 1.2

function booWho2(bool) {
   return typeof (bool) === "boolean";
};

booWho2(null);
