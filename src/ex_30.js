"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generatePattern(size, type) {
    switch (type) {
        case 'a':
            for (var i = 1; i <= size; i++) {
                var row = '';
                for (var j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(row.trim());
            }
            break;
        case 'b':
            for (var i = size; i >= 1; i--) {
                var spaces = ' '.repeat((size - i) * 2);
                var row = '';
                for (var j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(spaces + row.trim());
            }
            break;
        case 'c':
            for (var i = 1; i <= size; i++) {
                var spaces = ' '.repeat((size - i) * 2);
                var row = '';
                for (var j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(spaces + row.trim());
            }
            break;
        case 'd':
            for (var i = size; i >= 1; i--) {
                var row = '';
                for (var j = i; j >= 1; j--) {
                    row += j + ' ';
                }
                console.log(row.trim());
            }
            break;
        default:
            console.log("Invalid type selected. Please choose 'a', 'b', 'c', or 'd'.");
    }
}
rl.question('Enter the size: ', function (sizeInput) {
    var size = parseInt(sizeInput);
    if (isNaN(size) || size < 1) {
        console.log("Please enter a valid positive number for size.");
        rl.close();
        return;
    }
    rl.question('Select the type: (a/b/c/d) ', function (typeInput) {
        var type = typeInput.trim().toLowerCase();
        generatePattern(size, type);
        rl.close();
    });
});
