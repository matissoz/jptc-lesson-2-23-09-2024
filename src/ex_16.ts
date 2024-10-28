import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateBoxPattern(n: number) {
    if (n < 3) {
        console.log("Please enter a number greater than or equal to 3.");
        return;
    }

    const sideSymbols = Math.floor(n / 2);
    const middleUnderscores = n % 2 === 0 ? n - 4 : n - 3;

    const roof = '/' + '^'.repeat(sideSymbols) + '\\' +
                 '_'.repeat(middleUnderscores) +
                 '/' + '^'.repeat(sideSymbols) + '\\';
    console.log(roof);

    for (let i = 0; i < n - 3; i++) {
        console.log('|' + ' '.repeat(n * 2 - 3) + '|');
    }

    console.log('|' + ' '.repeat(sideSymbols) + '_'.repeat(middleUnderscores) + ' '.repeat(sideSymbols) + '|');

    const floor = '\\' + '_'.repeat(sideSymbols) + '/' +
                  ' '.repeat(middleUnderscores) +
                  '\\' + '_'.repeat(sideSymbols) + '/';
    console.log(floor);
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n)) {
        console.log("Please enter a valid number.");
    } else {
        generateBoxPattern(n);
    }
    rl.close();
});
