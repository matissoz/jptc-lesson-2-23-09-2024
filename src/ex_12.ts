import * as readline from 'readline';

function generatePattern(n: number): void {
    if (n < 2) {
        console.log("The number should be 2 or more.");
        return;
    }

    const half = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        let line: string;

        if (i < half) {

            const numStars = 2 * (i + 1) - (n % 2 === 0 ? 0 : 1);
            const numHyphens = (n - numStars) / 2;
            line = "-".repeat(numHyphens) + "*".repeat(numStars) + "-".repeat(numHyphens);
        } else {

            line = "|" + "*".repeat(n) + "|";
        }

        console.log(line);
    }
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