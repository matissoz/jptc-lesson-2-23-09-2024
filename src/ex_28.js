"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function generateTriangle(size, type) {
    switch (type) {
        case 'a':
            for (var i = 1; i <= size; i++) {
                console.log('# '.repeat(i).trim());
            }
            break;
        case 'b':
            for (var i = size; i > 0; i--) {
                console.log('# '.repeat(i).trim());
            }
            break;
        case 'c':
            for (var i = 0; i < size; i++) {
                console.log(' '.repeat(i * 2) + '# '.repeat(size - i).trim());
            }
            break;
        case 'd':
            for (var i = 1; i <= size; i++) {
                console.log(' '.repeat((size - i) * 2) + '# '.repeat(i).trim());
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
        generateTriangle(size, type);
        rl.close();
    });
});
