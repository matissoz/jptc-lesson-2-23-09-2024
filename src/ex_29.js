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
                var spaces = ' '.repeat(size - i);
                var hashes = '# '.repeat(i).trim();
                console.log(spaces + hashes);
            }
            break;
        case 'b':
            for (var i = size; i >= 1; i--) {
                var spaces = ' '.repeat(size - i);
                var hashes = '# '.repeat(i).trim();
                console.log(spaces + hashes);
            }
            break;
        case 'c':
            for (var i = 1; i <= size; i++) {
                var spaces = ' '.repeat(size - i);
                var hashes = '# '.repeat(i).trim();
                console.log(spaces + hashes);
            }
            for (var i = size - 1; i >= 1; i--) {
                var spaces = ' '.repeat(size - i);
                var hashes = '# '.repeat(i).trim();
                console.log(spaces + hashes);
            }
            break;
        case 'd':
            for (var i = 1; i <= size; i++) {
                var row = '';
                for (var j = 1; j <= size; j++) {
                    if (i === 1 || i === size || j === 1 || j === size || i + j === size + 1 || j - i === size - 1 || i - j === size - 1 || i + j === size + 1) {
                        row += '# ';
                    }
                    else {
                        row += '  ';
                    }
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
