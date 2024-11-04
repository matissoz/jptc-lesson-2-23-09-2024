import * as readline from 'readline';

function generatePattern(size: number, type: string): string {
    const lines: string[] = [];

    switch (type) {
        case 'a':
            // Pattern type a: Right-aligned triangle
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat((size - i) * 2); // Two spaces per row
                const hashes = '# '.repeat(2 * i - 1).trim(); // Odd number of hashes
                lines.push(spaces + hashes);
            }
            break;

        case 'b':
            // Pattern type b: Inverted triangle with leading spaces
            for (let i = size; i > 0; i--) {
                const spaces = ' '.repeat((size - i) * 2); // Two spaces per row
                const hashes = '# '.repeat(2 * i - 1).trim(); // Odd number of hashes
                lines.push(spaces + hashes);
            }
            break;

        case 'c':
            // Pattern type c: Diamond shape
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat((size - i) * 2); // Two spaces per row
                const hashes = '# '.repeat(2 * i - 1).trim(); // Odd number of hashes
                lines.push(spaces + hashes);
            }
            for (let i = size - 1; i > 0; i--) {
                const spaces = ' '.repeat((size - i) * 2); // Two spaces per row
                const hashes = '# '.repeat(2 * i - 1).trim(); // Odd number of hashes
                lines.push(spaces + hashes);
            }
            break;

        case 'd':
            // Pattern type d: Cross pattern
            for (let i = 0; i < size; i++) {
                const line: string[] = [];
                for (let j = 0; j < size; j++) {
                    // Generate the upper half of the cross
                    if (j < size - 1 - i) {
                        line.push('#'); // Fill left side
                    } else if (j === size - 1 - i || j === i) {
                        line.push(' '); // Leave space for the center
                    } else {
                        line.push('#'); // Fill right side
                    }
                }
                lines.push(line.join(' ')); // Join with space between characters
            }
            for (let i = 0; i < size; i++) {
                const line: string[] = [];
                for (let j = 0; j < size; j++) {
                    // Generate the lower half of the cross
                    if (j < i) {
                        line.push('#'); // Fill left side
                    } else if (j === i || j === size - 1 - i) {
                        line.push(' '); // Leave space for the center
                    } else {
                        line.push('#'); // Fill right side
                    }
                }
                lines.push(line.join(' ')); // Join with space between characters
            }
            break;

        default:
            return "Invalid pattern type.";
    }

    return lines.join('\n'); // Join the lines with new line characters
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askSizeAndType() {
    console.log("> Enter the size:");
    rl.question('> ', (sizeInput: string) => {
        const size = parseInt(sizeInput);
        if (isNaN(size) || size < 1) {
            console.log("Please enter a valid positive number");
            askSizeAndType();
            return;
        }

        console.log("> Select the type: (a/b/c/d)");
        rl.question('> ', (typeInput: string) => {
            const type = typeInput.toLowerCase();
            if (!['a', 'b', 'c', 'd'].includes(type)) {
                console.log("Please enter a valid type (a, b, c, or d)");
                askSizeAndType();
                return;
            }

            console.log(generatePattern(size, type));
            rl.close();
        });
    });
}

// Start the program
askSizeAndType();