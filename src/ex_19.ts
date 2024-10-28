import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateSymmetricalPattern(n: number) {
    for (let i = 0; i < n; i++) {
        let row = '';

        for (let j = n; j > i; j--) {
            row += j + ' ';
        }

        row += ' '.repeat(i * 4);

        for (let j = i + 1; j <= n; j++) {
            row += j + ' ';
        }

        console.log(row.trim());
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateSymmetricalPattern(n);
    }
    rl.close();
});
