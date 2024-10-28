import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
    } else {
        for (let i = 1; i <= n; i++) {
            console.log(' '.repeat(n - i) + '* ' .repeat(i).trim());
        }
        for (let i = n - 1; i > 0; i--) {
            console.log(' '.repeat(n - i) + '* ' .repeat(i).trim());
        }
    }
    rl.close();
});
