import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawArrow(n: number): void {
    if (n < 3 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 3.");
        return;
    }

    const width = n + (n - 1); // Total width based on input
    const height = n + (n - 1); // Total height for arrow shape
    const arrow: string[][] = Array.from({ length: height }, () => Array(width).fill('.'));

    // Top part of the arrow
    for (let i = 0; i < n; i++) {
        arrow[i][i] = '#';
        arrow[i][width - i - 1] = '#';
        if (i === 0) {
            for (let j = i; j < width - i; j++) {
                arrow[i][j] = '#';
            }
        }
    }

    // Base of the arrow
    for (let i = 0; i < n; i++) {
        arrow[n - 1][i] = '#';
        arrow[n - 1][width - i - 1] = '#';
    }

    // Bottom tail of the arrow
    for (let i = 1; i < n; i++) {
        arrow[n - 1 + i][i] = '#';
        arrow[n - 1 + i][width - i - 1] = '#';
    }

    // Final point of the arrow
    arrow[height - 1][Math.floor(width / 2)] = '#';

    // Display the arrow pattern
    arrow.forEach(row => console.log(row.join('')));
}

rl.question("Enter the number for the arrow scale: ", (input) => {
    const n = parseInt(input);
    drawArrow(n);
    rl.close();
});
