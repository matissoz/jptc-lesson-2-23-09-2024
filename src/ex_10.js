"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generatePascalsTriangle(n) {
    var triangle = [];
    for (var i = 0; i < n; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }
    return triangle;
}
function printPascalsTriangle(triangle, n) {
    for (var i = 0; i < n; i++) {
        var line = ' '.repeat((n - i - 1) * 2);
        for (var j = 0; j <= i; j++) {
            line += triangle[i][j] + '   '; 
        }
        console.log(line.trimEnd());
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
    }
    else {
        var triangle = generatePascalsTriangle(n);
        printPascalsTriangle(triangle, n);
    }
    rl.close();
});
