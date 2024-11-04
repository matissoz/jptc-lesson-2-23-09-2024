import * as readline from 'readline';

function generatePattern(n: number): string {
    const lines: string[] = [];
    const half = Math.floor(n / 2);

    // Upper section
    for (let i = 0; i < half; i++) {
        const char = i % 2 === 0 ? "*" : "-";
        const sidePattern = char.repeat(half + 1); // Adjusted to half + 1 for proper width
        lines.push(`${sidePattern}\\ /${sidePattern}`);
    }

    // Middle section with centered '@'
    lines.push(" ".repeat(half + 1) + "@" + " ".repeat(half + 1)); // Added extra space for centering

    // Lower section (mirrored upper section)
    for (let i = half - 1; i >= 0; i--) {
        const char = i % 2 === 0 ? "*" : "-";
        const sidePattern = char.repeat(half + 1); // Same adjustment for lower section
        lines.push(`${sidePattern}/ \\${sidePattern}`);
    }

    return lines.join('\n');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const number = parseInt(input);
        if (isNaN(number) || number < 1 || number % 2 === 0) {
            console.log("Please enter a valid positive odd number");
            askNumber();
            return;
        }
        
        console.log(generatePattern(number));
        rl.close();
    });
}

// Start the program
askNumber();