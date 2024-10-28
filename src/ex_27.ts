import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateCheckerboard(n: number) {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            console.log(' '.repeat(1) + '# '.repeat(n).trim());
        } else {
            console.log('# '.repeat(n).trim());
        }
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateCheckerboard(n);
    }
    rl.close();
});
