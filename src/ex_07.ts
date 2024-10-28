import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 2) {
        console.log("Please enter a valid number greater than 1.");
    } else {
        const dashCount = Math.max(1, Math.floor((n - 1) / 2));

        console.log('+' + ' -'.repeat(dashCount) + ' +');

        for (let i = 0; i < n - 2; i++) {
            console.log('|' + ' -'.repeat(dashCount) + ' |');
        }

        console.log('+' + ' -'.repeat(dashCount) + ' +');
    }
    rl.close();
});
