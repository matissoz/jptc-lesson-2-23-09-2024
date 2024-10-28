import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawHammer(n: number): void {
    if (n < 2) {
        console.log("Please enter a number greater than or equal to 2.");
        return;
    }

    const width = n * 3 + 4; // Adjust width to fit the handle and head
    const height = n + 4; // Height accounts for handle, head, and end

    const hammer: string[][] = Array.from({ length: height }, () => Array(width).fill('-'));

    // Draw the handle part
    for (let i = 0; i < n; i++) {
        hammer[i][width - 3 - i] = '*';   // Left side of handle
        hammer[i][width - 2] = '*';       // Right side of handle
    }

    // Draw the head part
    for (let i = n; i < n + 4; i++) {
        for (let j = width - 3 - n; j <= width - 4; j++) {
            hammer[i][j] = '*';
        }
    }

    // Draw the end of the hammer
    for (let j = width - 6 - n; j < width - 3; j++) {
        hammer[height - 1][j] = '*';
    }

    // Print the hammer
    hammer.forEach(row => console.log(row.join('')));
}

rl.question("Enter the number for the hammer scale: ", (input) => {
    const n = parseInt(input);
    drawHammer(n);
    rl.close();
});
