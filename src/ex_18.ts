import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateNumberTriangle(n: number) {
    for (let i = 0; i < n; i++) {
        let row = '';
        let num = Math.pow(2, i);

        for (let j = 0; j <= i; j++) {
            row += num.toString().padStart(4, ' ') + ' ';
            num /= 2;
        }

        console.log(row.trim());
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateNumberTriangle(n);
    }
    rl.close();
});
