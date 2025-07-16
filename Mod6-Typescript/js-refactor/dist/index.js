"use strict";
let Name = "5";
let age = 30;
let height = 1.75;
function formatInput(input) {
    if (typeof input == "string") {
        return input.toUpperCase();
    }
    else {
        return input.join(",").toUpperCase();
    }
}
console.log(formatInput("Hello"));
