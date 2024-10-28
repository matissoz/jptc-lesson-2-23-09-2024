import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateHeartPattern(n: number, text: string) {
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        const spaces = ' '.repeat(i);
        const starsLeft = '*'.repeat(mid - i + 2);
        const starsRight = '*'.repeat(mid - i + 2);
        console.log(spaces + starsLeft + '   ' + starsRight);
    }

    const centerSpaces = ' '.repeat(mid);
    if (text) {
        const starsPadding = '*'.repeat((mid + 2) - Math.ceil(text.length / 2));
        console.log(centerSpaces + starsPadding + text + starsPadding);
    } else {
        console.log(centerSpaces + '*'.repeat(n));
    }

    for (let i = mid - 1; i >= 0; i--) {
        const spaces = ' '.repeat(mid - i);
        const stars = '*'.repeat(i * 2 + 3);
        console.log(spaces + stars);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 7 || n % 2 === 0) {
        console.log("Please enter an odd number greater than or equal to 7 for a proper heart shape.");
        rl.close();
        return;
    }

    rl.question('What should we print on it? ', (text) => {
        generateHeartPattern(n, text.trim());
        rl.close();
    });
});
