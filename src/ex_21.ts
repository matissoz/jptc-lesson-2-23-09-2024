import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateSymbolPattern(n: number) {
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        const symbols = i % 2 === 0 ? '*' : '-';
        const sideSymbols = symbols.repeat(mid - i);
        console.log(sideSymbols + '\\ /' + sideSymbols);
    }

    console.log(' '.repeat(mid) + '@');

    for (let i = mid - 1; i >= 0; i--) {
        const symbols = i % 2 === 0 ? '*' : '-';
        const sideSymbols = symbols.repeat(mid - i);
        console.log(sideSymbols + '/ \\' + sideSymbols);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 3 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 3.");
    } else {
        generateSymbolPattern(n);
    }
    rl.close();
});
