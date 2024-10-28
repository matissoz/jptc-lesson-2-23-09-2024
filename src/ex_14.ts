import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePattern(n: number) {
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        const padding = '-'.repeat(mid - i - 1); 
        const middleHyphens = '-'.repeat(i * 2 + 1); 
        console.log(padding + '*' + middleHyphens + '*' + padding);
    }

    if (n % 2 !== 0) {
        console.log('*' + '-'.repeat(n - 2) + '*');
    } else {
        console.log('*'.repeat(n));
    }

    for (let i = mid - 1; i >= 0; i--) {
        const padding = '-'.repeat(mid - i - 1);
        const middleHyphens = '-'.repeat(i * 2 + 1);
        console.log(padding + '*' + middleHyphens + '*' + padding);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than or equal to 1.");
    } else {
        generatePattern(n);
    }
    rl.close();
});
