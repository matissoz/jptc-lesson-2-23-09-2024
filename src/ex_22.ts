import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateDiamondPattern(n: number, direction: string) {
    if (direction === 'R') {
        for (let i = 0; i < n; i++) {
            console.log(' '.repeat(i * 2) + '*'.repeat(n - i));
        }
        for (let i = n - 2; i >= 0; i--) {
            console.log(' '.repeat(i * 2) + '*'.repeat(n - i));
        }
    } else if (direction === 'L') {
        for (let i = 0; i < n; i++) {
            console.log(' '.repeat((n - i - 1) * 2) + '*'.repeat(n - i));
        }
        for (let i = 1; i < n; i++) {
            console.log(' '.repeat((n - i - 1) * 2) + '*'.repeat(n - i));
        }
    } else {
        console.log("Invalid direction. Please enter 'R' or 'L'.");
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    rl.question('Select direction: (R/L) ', (direction) => {
        generateDiamondPattern(n, direction.toUpperCase());
        rl.close();
    });
});
