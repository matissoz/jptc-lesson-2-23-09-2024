import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateTriangle(n: number, direction: string, isEmpty: boolean) {
    for (let i = 0; i < n; i++) {
        const padding = direction === 'right' ? ' '.repeat(n - i - 1) : ' '.repeat(i);
        
        if (isEmpty && i > 0 && i < n - 1) {
            // Empty triangle row with stars at the edges
            console.log(padding + '*' + ' '.repeat(n - 2) + '*');
        } else {
            // Filled row or the first/last row in an empty triangle
            console.log(padding + '*'.repeat(n));
        }
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than or equal to 1.");
        rl.close();
        return;
    }

    rl.question('Select direction: (right/left) ', (direction) => {
        if (direction !== 'right' && direction !== 'left') {
            console.log("Please enter 'right' or 'left' for direction.");
            rl.close();
            return;
        }

        rl.question('Is it empty? (Y/n) ', (isEmpty) => {
            const empty = isEmpty.toLowerCase() === 'y';
            generateTriangle(n, direction, empty);
            rl.close();
        });
    });
});
