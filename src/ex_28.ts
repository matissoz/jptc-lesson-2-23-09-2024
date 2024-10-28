import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawTriangle(size: number, type: string): void {
    switch (type) {
        case 'a':
            // Left-aligned triangle growing downwards
            for (let i = 1; i <= size; i++) {
                console.log('# '.repeat(i).trim());
            }
            break;
        
        case 'b':
            // Left-aligned triangle shrinking upwards
            for (let i = size; i >= 1; i--) {
                console.log('# '.repeat(i).trim());
            }
            break;
        
        case 'c':
            // Right-aligned triangle shrinking upwards
            for (let i = size; i >= 1; i--) {
                console.log(' '.repeat((size - i) * 2) + '# '.repeat(i).trim());
            }
            break;
        
        case 'd':
            // Right-aligned triangle growing downwards
            for (let i = 1; i <= size; i++) {
                console.log(' '.repeat((size - i) * 2) + '# '.repeat(i).trim());
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
