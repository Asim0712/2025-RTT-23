"use strict";
function add(a = 0, b = 0) {
    return a + b;
}
function division(a, b = 0) {
    return b === 0 ? null : a / b;
}
/*   if (b === 0) {
       return null;
   } else {
       a / b;
}*/
function subtract(a, b = 0) {
    return a - b;
}
function mutiply(a, b) {
    return a * b;
}
console.log();
