import * as readline from 'readline';

function generatePattern(n: number, direction: string): string {
    const lines: string[] = [];

    // Generate the top half of the pattern
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(i); // Increasing spaces for right alignment
        const stars = '*'.repeat(n - i); // Decreasing stars
        lines.push(spaces + stars); // Form the line
    }

    // Generate the bottom half of the pattern
    for (let i = n - 1; i >= 1; i--) {
        const spaces = ' '.repeat(n - i); // Decreasing spaces for right alignment
        const stars = '*'.repeat(i); // Increasing stars
        lines.push(spaces + stars); // Form the line
    }

    // If the direction is left, we need to align differently
    if (direction === 'L') {
        return lines.map(line => line.padStart(n)).join('\n'); // Pad the left side for left alignment
    }
    
    return lines.join('\n'); // For right alignment
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumberAndDirection() {
    console.log("> Enter the number:");
    rl.question('> ', (numberInput: string) => {
        const number = parseInt(numberInput);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number");
            askNumberAndDirection();
            return;
        }

        console.log("> Select direction: (R/L)");
        rl.question('> ', (directionInput: string) => {
            const direction = directionInput.toUpperCase();
            if (direction !== 'R' && direction !== 'L') {
                console.log("Please enter a valid direction (R or L)");
                askNumberAndDirection();
                return;
            }

            console.log(generatePattern(number, direction));
            rl.close();
        });
    });
}

// Start the program
askNumberAndDirection();