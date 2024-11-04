import readline from 'readline';

function generatePyramid(size: number): string {
    const lines: string[] = [];

    // Generate top part
    for (let row = 0; row < Math.floor(size / 2); row++) {
        let line = ".".repeat(size - row - 1) + "#".repeat(2 * row + 1) + ".".repeat(size - row - 1);
        lines.push(line);
    }

    // Generate middle part
    const middleRow = Math.floor(size / 2);
    let middleLine = ".".repeat(middleRow) + "#".repeat(size - 2 * middleRow) + ".".repeat(middleRow);
    lines.push(middleLine);

    // Generate bottom part
    for (let row = middleRow + 1; row < size; row++) {
        let line = ".".repeat(row - middleRow) + "#".repeat(2 * (size - row) - 1) + ".".repeat(row - middleRow);
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

        console.log(generatePyramid(size));
        rl.close();
    });
}

// Start the program
askSize();