import * as readline from 'readline';


function printTriangle(rows: number, direction: string, isEmpty: boolean): void {
    for (let i = 0; i < rows; i++) {
        let line = '';
        if (direction === 'right') {
          
            line += ' '.repeat(rows - i - 1); 
            if (isEmpty) {
              
                line += '*';
                if (i > 0) {
                    line += ' '.repeat(i * 2 - 1); 
                    line += '*';
                } else {
                    line += '*'.repeat(rows); 
                }
            } else {
             
                line += '*'.repeat(rows);
            }
        } else {
           
            if (isEmpty) {
             
                if (i === rows - 1) {
                    line += '*'.repeat(rows); 
                } else {
                    line += '*';
                    line += ' '.repeat(rows - 2); 
                    line += '*';
                }
            } else {
    
                line += '*'.repeat(rows); 
            }
            line += ' '.repeat(i); 
        }
        
        console.log(line.trimEnd());
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter the number: ', (rowsInput) => {
        const rows = parseInt(rowsInput, 10);
        if (isNaN(rows) || rows < 1) {
            console.log("Please enter a valid number greater than 0.");
            return getUserInput();
        }

        rl.question('Select direction: (right/left) ', (direction) => {
            if (direction !== 'right' && direction !== 'left') {
                console.log("Please enter 'right' or 'left'.");
                return getUserInput();
            }

            rl.question('Is it empty? (Y/n) ', (emptyInput) => {
                const isEmpty = emptyInput.toLowerCase() === 'y';
                printTriangle(rows, direction, isEmpty);

                getUserInput();
            });
        });
    });
}

// Start the input process
getUserInput();