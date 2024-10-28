import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePattern(size: number, type: string) {
    switch (type) {
        case 'a':
            for (let i = 1; i <= size; i++) {
                let row = '';
                for (let j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(row.trim());
            }
            break;
        case 'b':
            for (let i = size; i >= 1; i--) {
                const spaces = ' '.repeat((size - i) * 2);
                let row = '';
                for (let j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(spaces + row.trim());
            }
            break;
        case 'c':
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat((size - i) * 2);
                let row = '';
                for (let j = 1; j <= i; j++) {
                    row += j + ' ';
                }
                console.log(spaces + row.trim());
            }
            break;
        case 'd':
            for (let i = size; i >= 1; i--) {
                let row = '';
                for (let j = i; j >= 1; j--) {
                    row += j + ' ';
                }
                console.log(row.trim());
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
        generatePattern(size, type);
        rl.close();
    });
});
