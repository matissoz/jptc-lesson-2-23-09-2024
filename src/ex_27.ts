import * as readline from 'readline';

function generatePattern(size: number): string {
    const lines: string[] = [];

    for (let i = 0; i < size; i++) {
        const hashes = '# '.repeat(size).trim(); // Create a line of hashes
        if (i % 2 === 1) {
            // For even indexed rows, prepend a space
            lines.push(' ' + hashes);
        } else {
            // For odd indexed rows, add without spaces
            lines.push(hashes);
        }
    }

    return lines.join('\n'); // Join the lines with new line characters
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const number = parseInt(input);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number");
            askNumber();
            return;
        }

        console.log(generatePattern(number));
        rl.close();
    });
}

// Start the program
askNumber();