let Name: string = "5";

let age: number = 30;
let height: number = 1.75;

function formatInput (input: string): string;
function formatInput (input: string[]): string;

function formatInput(input){
    if (typeof input== "string"){
        return input.toUpperCase();
    }
    else {
        return input.join(",").toUpperCase();
    }
}

console.log(formatInput("Hello"));

