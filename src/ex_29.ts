import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawTriangle(size: number, type: string): void {
    switch (type) {
        case 'a':
            // Right-aligned triangle growing downwards
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat(2 * (size - i)); // Adjust spaces for right alignment
                const hashes = '# '.repeat(2 * i - 1); // Create the hash pattern
                console.log(spaces + hashes.trim());
            }
            break;

        case 'b':
            // Right-aligned triangle shrinking upwards
            for (let i = size; i >= 1; i--) {
                const spaces = ' '.repeat(2 * (size - i)); // Adjust spaces for right alignment
                const hashes = '# '.repeat(2 * i - 1); // Create the hash pattern
                console.log(spaces + hashes.trim());
            }
            break;

        case 'c':
            // Diamond shape (upwards and downwards)
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat(2 * (size - i)); // Adjust spaces for right alignment
                const hashes = '# '.repeat(2 * i - 1); // Create the hash pattern
                console.log(spaces + hashes.trim());
            }
            for (let i = size - 1; i >= 1; i--) {
                const spaces = ' '.repeat(2 * (size - i)); // Adjust spaces for right alignment
                const hashes = '# '.repeat(2 * i - 1); // Create the hash pattern
                console.log(spaces + hashes.trim());
            }
            break;

        case 'd':
            // Diamond shape made of spaces surrounded by dots
            const totalRows = size * 2 - 1; // Total number of rows for the diamond
            const midPoint = Math.floor(totalRows / 2); // Middle of the diamond

            for (let i = 0; i < totalRows; i++) {
                let line = '';

                // Determine the number of spaces before the diamond
                const spaceCount = Math.abs(midPoint - i); // Adjusts spaces for diamond shape

                // Add dots for the sides
                line += '.'.repeat(spaceCount) + ' '; 

                // Create the diamond shape with spaces
                if (i <= midPoint) {
                    // Upper part of the diamond
                    line += ' '.repeat(i * 2 + 1); // Spaces in the diamond
                } else {
                    // Lower part of the diamond
                    line += ' '.repeat((totalRows - i - 1) * 2 + 1); // Spaces in the diamond
                }

                // Add dots for the right side
                line += '.'.repeat(spaceCount);

                console.log(line.trim());
            }
            break;

        default:
            console.log("Invalid triangle type! Please select a, b, c, or d.");
    }
}

rl.question("Enter the size of the triangle: ", (sizeInput) => {
    const size = parseInt(sizeInput);

    rl.question("Select the type of triangle (a/b/c/d): ", (typeInput) => {
        const type = typeInput.trim().toLowerCase();
        drawTriangle(size, type);
        rl.close();
    });
});