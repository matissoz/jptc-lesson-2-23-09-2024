import * as readline from 'readline';

function printTriangle(rows: number, direction: string, isEmpty: boolean): void {
    for (let i = 0; i < rows; i++) {
        let line = '';
        if (direction === 'right') {
            // Add spaces for right alignment
            line += ' '.repeat(rows - i - 1);
            
            if (isEmpty && i > 0 && i < rows - 1) {
                // For empty triangles (middle rows), print border stars with spaces
                line += '*';
                line += ' '.repeat(rows - 2);
                line += '*';
            } else {
                line += '*'.repeat(rows);
            }
        } else {  // left direction
            if (isEmpty && i > 0 && i < rows - 1) {
                // For empty triangles (middle rows), print border stars with spaces
                line += '*';
                line += ' '.repeat(rows - 2);
                line += '*';
            } else {
                // For first and last rows, or when not empty, print full stars
                line += '*'.repeat(rows);
            }
            // Add spaces after the pattern for left alignment
            line += ' '.repeat(rows - i - 1);
        }
        
        console.log(line);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter the number:', (rowsInput) => {
        const rows = parseInt(rowsInput, 10);
        if (isNaN(rows) || rows < 1) {
            console.log("Please enter a valid number greater than 0.");
            return getUserInput();
        }

        rl.question('Select direction: (right/left)\n', (direction) => {
            if (direction !== 'right' && direction !== 'left') {
                console.log("Please enter 'right' or 'left'.");
                return getUserInput();
            }

            rl.question('Is it empty? (Y/n)\n', (emptyInput) => {
                const isEmpty = emptyInput.toLowerCase() === 'y';
                printTriangle(rows, direction, isEmpty);
                rl.close();
            });
        });
    });
}

getUserInput();