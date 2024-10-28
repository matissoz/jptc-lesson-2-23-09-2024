import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateHexagonPattern(n: number) {
    for (let i = 0; i < n; i++) {
        const outerDots = '.'.repeat(n - i);
        const innerUnderscores = '_'.repeat(n * 2 - 3 + i * 2);
        console.log(outerDots + '//' + innerUnderscores + '\\\\' + outerDots);
    }

    const middleUnderscores = '_'.repeat(n * 2 - 5);
    console.log('//' + middleUnderscores + 'STOP!' + middleUnderscores + '\\\\');

    for (let i = n - 1; i >= 0; i--) {
        const outerDots = '.'.repeat(n - i);
        const innerUnderscores = '_'.repeat(n * 2 - 3 + i * 2);
        console.log(outerDots + '\\\\' + innerUnderscores + '//' + outerDots);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 3) {
        console.log("Please enter a valid number greater than or equal to 3.");
    } else {
        generateHexagonPattern(n);
    }
    rl.close();
});
