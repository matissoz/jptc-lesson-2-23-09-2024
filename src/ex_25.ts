import * as readline from 'readline';

function generatePattern(size: number): string {
    const lines: string[] = [];

    // Top part
    for (let row = 0; row < size; row++) {
        let line = "-".repeat(size - row - 1) + "*".repeat(row * 2 + 1) + "-".repeat(size - row - 1);
        lines.push(line);
    }

    // Middle part
    const middleRow = size;
    for (let row = 0; row < size; row++) {
        let line = "-".repeat(row) + "*".repeat(2 * (size - row) - 1) + "-".repeat(row);
        lines.push(line);
    }

    // Bottom part
    for (let row = middleRow + 1; row < size * 2; row++) {
        let line = "-".repeat(row - middleRow) + "*".repeat(2 * (size * 2 - row) - 1) + "-".repeat(row - middleRow);
        lines.push(line);
    }

    return lines.join('\n');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askSize() {
    console.log("> Enter the number:");
    rl.question('> ', (input) => {
        const size = parseInt(input);
        if (isNaN(size) || size < 1) {
            console.log("Please enter a valid positive number");
            askSize();
            return;
        }

        console.log(generatePattern(size));
        rl.close();
    });
}

// Start the program
askSize();