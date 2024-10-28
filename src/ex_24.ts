import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateArrowPattern(n: number) {
    const middle = Math.floor(n / 2);

    for (let i = 0; i < middle; i++) {
        const outerDots = '.'.repeat(middle - i);
        const hashes = '#'.repeat(n - 2 * (middle - i));
        console.log(outerDots + hashes + outerDots);
    }

    for (let i = 0; i < n; i++) {
        const outerDots = '.'.repeat(middle);
        const innerDots = '.'.repeat(n - 2 * middle - 2);
        console.log(outerDots + '#' + innerDots + '#' + outerDots);
    }

    for (let i = 0; i < middle; i++) {
        const outerDots = '.'.repeat(middle + i + 1);
        console.log(outerDots + '#' + outerDots);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 3 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 3.");
    } else {
        generateArrowPattern(n);
    }
    rl.close();
});
