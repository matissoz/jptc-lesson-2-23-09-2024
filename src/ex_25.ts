import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateAxePattern(n: number) {
    const width = 2 * n + 10;

    for (let i = 0; i < n; i++) {
        const outerDots = '-'.repeat(width - 2 - i);
        const innerDots = '-'.repeat(i);
        console.log(outerDots + '*' + innerDots + '*' + outerDots);
    }

    const bladeWidth = width - n - 2;
    const middleSection = '*'.repeat(bladeWidth) + '-'.repeat(n);
    for (let i = 0; i < n; i++) {
        console.log(middleSection);
    }

    for (let i = n - 1; i >= 0; i--) {
        const outerDots = '-'.repeat(width - 2 - i);
        const innerDots = '-'.repeat(i);
        console.log(outerDots + '*' + innerDots + '*' + outerDots);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateAxePattern(n);
    }
    rl.close();
});
