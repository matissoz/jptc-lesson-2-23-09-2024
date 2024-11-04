import * as readline from 'readline';

function printTriangle(rows: number, direction: string, isEmpty: boolean): void {
    for (let i = 0; i < rows; i++) {
        let line = '';
        if (direction === 'right') {
        
            line += ' '.repeat(rows - i - 1);
            
            if (isEmpty && i > 0 && i < rows - 1) {
          
                line += '*';
                line += ' '.repeat(rows - 2);
                line += '*';
            } else {
                
                line += '*'.repeat(rows);
            }
        } else {  
            
            line += ' '.repeat(i);
            
            if (isEmpty && i > 0 && i < rows - 1) {
                
                line += '*';
                line += ' '.repeat(rows - 2);
                line += '*';
            } else {
               
                line += '*'.repeat(rows);
            }
        }
        
        console.log(line);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter the number:\n', (rowsInput) => {
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