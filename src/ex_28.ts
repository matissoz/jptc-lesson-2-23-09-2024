import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateTriangle(size: number, type: string) {
    switch (type) {
        case 'a':
            for (let i = 1; i <= size; i++) {
                console.log('# '.repeat(i).trim());
            }
            break;
        case 'b':
            for (let i = size; i > 0; i--) {
                console.log('# '.repeat(i).trim());
            }
            break;
        case 'c':
            for (let i = 0; i < size; i++) {
                console.log(' '.repeat(i * 2) + '# '.repeat(size - i).trim());
            }
            break;
        case 'd':
            for (let i = 1; i <= size; i++) {
                console.log(' '.repeat((size - i) * 2) + '# '.repeat(i).trim());
            }
            break;
        default:
            console.log("Invalid type selected. Please choose 'a', 'b', 'c', or 'd'.");
    }
}

rl.question('Enter the size: ', (sizeInput) => {
    const size = parseInt(sizeInput);
    if (isNaN(size) || size < 1) {
        console.log("Please enter a valid positive number for size.");
        rl.close();
        return;
    }

    rl.question('Select the type: (a/b/c/d) ', (typeInput) => {
        const type = typeInput.trim().toLowerCase();
        generateTriangle(size, type);
        rl.close();
    });
});
