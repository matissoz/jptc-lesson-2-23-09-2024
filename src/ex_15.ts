import * as readline from 'readline';

// Function to draw the triangle
function drawTriangle(n: number, direction: string, isEmpty: boolean): void {
    if (direction === 'right') {
        for (let i = 0; i < n; i++) {
            let line: string;

            if (isEmpty) {
                // For an empty triangle
                if (i === n - 1) {
                  console.log((n - 1))  
                  line = ' '.repeat(n - 1) + '*'.repeat(n); // Bottom line filled

                } else {
                    line = ' '.repeat(n - i - 1) + '*' + ' '.repeat(i * 2 - 1) + (i > 0 ? '*' : '');
                }
            } else {
                // For a filled triangle
                line = ' '.repeat(n - i - 1) + '*'.repeat(n);
            }

            console.log(line);
        }
    } else if (direction === 'left') {
        for (let i = 0; i < n; i++) {
            let line: string;

            if (isEmpty) {
                // For an empty triangle
                if (i === n - 1) {
                    line = '*'.repeat(n) + ' '.repeat(n - 1); // Bottom line filled
                } else {
                    line = '*' + ' '.repeat(i * 2 - 1) + (i > 0 ? '*' : '') + ' '.repeat(n - i - 1);
                }
            } else {
                // For a filled triangle
                line = '*'.repeat(n) + ' '.repeat(n - i - 1);
            }

            console.log(line);
        }
    }
}

// Function to get user input
function getInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('> Enter the number:\n> ', (number) => {
        const n = parseInt(number);
        rl.question('> Select direction: (right/left)\n> ', (dir) => {
            const direction = dir.toLowerCase();
            rl.question('> Is it empty? (Y/n)\n> ', (empty) => {
                const isEmpty = empty.toLowerCase() === 'y';
                drawTriangle(n, direction, isEmpty);
                rl.close();
            });
        });
    });
}

// Start the input process
getInput();
