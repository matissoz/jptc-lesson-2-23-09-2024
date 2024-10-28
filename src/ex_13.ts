import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePattern(n: number) {
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        const numStars = n % 2 === 0 ? i * 2 + 2 : i * 2 + 1;
        const padding = '-'.repeat(mid - i - 1);
        console.log(padding + '*'.repeat(numStars) + padding);
    }
    
    console.log('*'.repeat(n));

    for (let i = 0; i < mid; i++) {
        console.log('|' + '*'.repeat(n - 2) + '|');
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 2) {
        console.log("Please enter a number greater than or equal to 2.");
    } else {
        generatePattern(n);
    }
    rl.close();
});
