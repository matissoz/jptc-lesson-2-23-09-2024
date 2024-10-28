import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateNumberPattern(n: number) {
    for (let i = n; i >= 1; i--) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += j; 
            if (j < i) {
                row += ' * ';
            }
        }

        console.log(row);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateNumberPattern(n);
    }
    rl.close();
});
