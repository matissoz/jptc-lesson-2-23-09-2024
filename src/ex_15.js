"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateTriangle(n, direction, isEmpty) {
    for (var i = 0; i < n; i++) {
        var padding = direction === 'right' ? ' '.repeat(n - i - 1) : ' '.repeat(i);
        if (isEmpty && i > 0 && i < n - 1) {
            console.log(padding + '*' + ' '.repeat(n - 2) + '*');
        }
        else {
            console.log(padding + '*'.repeat(n));
        }
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than or equal to 1.");
        rl.close();
        return;
    }
    rl.question('Select direction: (right/left) ', function (direction) {
        if (direction !== 'right' && direction !== 'left') {
            console.log("Please enter 'right' or 'left' for direction.");
            rl.close();
            return;
        }
        rl.question('Is it empty? (Y/n) ', function (isEmpty) {
            var empty = isEmpty.toLowerCase() === 'y';
            generateTriangle(n, direction, empty);
            rl.close();
        });
    });
});
