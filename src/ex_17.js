"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateHeartPattern(n, text) {
    var mid = Math.floor(n / 2);
    for (var i = 0; i < mid; i++) {
        var spaces = ' '.repeat(i);
        var starsLeft = '*'.repeat(mid - i + 2);
        var starsRight = '*'.repeat(mid - i + 2);
        console.log(spaces + starsLeft + '   ' + starsRight);
    }
    var centerSpaces = ' '.repeat(mid);
    if (text) {
        var starsPadding = '*'.repeat((mid + 2) - Math.ceil(text.length / 2));
        console.log(centerSpaces + starsPadding + text + starsPadding);
    }
    else {
        console.log(centerSpaces + '*'.repeat(n));
    }
    for (var i = mid - 1; i >= 0; i--) {
        var spaces = ' '.repeat(mid - i);
        var stars = '*'.repeat(i * 2 + 3);
        console.log(spaces + stars);
    }
}
rl.question('Enter the number: ', function (input) {
    var n = parseInt(input);
    if (isNaN(n) || n < 7 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 7 for a proper heart shape.");
        rl.close();
        return;
    }
    rl.question('What should we print on it? ', function (text) {
        generateHeartPattern(n, text.trim());
        rl.close();
    });
});
