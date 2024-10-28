import * as readline from 'readline';

function generatePattern(n: number): void {
    if (n < 3) {
        console.log("The number should be 3 or more.");
        return;
    }

    const topRow = "*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n);
    console.log(topRow);

    for (let i = 0; i < n - 2; i++) {
        if (i === Math.floor((n - 2) / 2)) {

            console.log("*".repeat(n) + "|".repeat(n) + "*".repeat(n));
        } else {

            console.log("*".repeat(n) + "/".repeat(n) + "*".repeat(n));
        }
    }

    console.log(topRow);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (answer) => {
    const inputNumber = parseInt(answer, 10);
    generatePattern(inputNumber);
    rl.close(); 
});