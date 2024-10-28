import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawNumberTriangle(size: number, type: string): void {
    switch (type) {
        case 'a':
            // Triangle growing downwards
            for (let i = 1; i <= size; i++) {
                let line = '';
                for (let j = 1; j <= i; j++) {
                    line += j + ' '; // Add numbers with space
                }
                console.log(line.trim()); // Trim to remove the last space
            }
            break;

        case 'b':
            // Triangle shrinking upwards
            for (let i = size; i >= 1; i--) {
                const spaces = ' '.repeat((size - i) * 2); // Space for alignment
                let line = '';
                for (let j = 1; j <= i; j++) {
                    line += j + ' '; // Add numbers with space
                }
                console.log(spaces + line.trim()); // Trim to remove the last space
            }
            break;

        case 'c':
            // Right-aligned triangle growing downwards
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat((size - i) * 2); // Space for right alignment
                let line = '';
                for (let j = 1; j <= i; j++) {
                    line += j + ' '; // Add numbers with space
                }
                console.log(spaces + line.trim()); // Trim to remove the last space
            }
            break;

        case 'd':
            // Descending triangle pattern
            for (let i = size; i >= 1; i--) {
                let line = '';
                for (let j = i; j >= 1; j--) {
                    line += j + ' '; // Add numbers with space
                }
                console.log(line.trim()); // Trim to remove the last space
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
        drawNumberTriangle(size, type);
        rl.close();
    });
});
