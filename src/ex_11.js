"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateAlphabetTriangle(n) {
    for (var i = 0; i < n; i++) {
        var letter = String.fromCharCode(65 + i);
        
        var line = (letter + ' ').repeat(i + 1).trim();
        console.log(line);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
    }
    else {
        generateAlphabetTriangle(n);
    }
    rl.close();
});
