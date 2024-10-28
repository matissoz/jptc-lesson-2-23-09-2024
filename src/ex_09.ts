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
        console.log(' '.repeat(n) + '|');

        
        for (let i = 1; i <= n; i++) {
            console.log(' '.repeat(n - i) + '*'.repeat(i) + ' | ' + '*'.repeat(i));
        }
    }
    rl.close();
});
