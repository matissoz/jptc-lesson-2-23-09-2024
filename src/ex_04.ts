const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printTriangle(n: number, char: string): void {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += char; 
            if (j < i - 1) {
                row += ' '; 
            }
        }
        console.log(row); 
    }
}

rl.question("Enter the size of the triangle: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    rl.question("Select the character: ", (charInput: string) => {
        const char: string = charInput.trim();

  
        if (char.length === 0) {
            console.log("Please enter a valid character.");
        } else {
            printTriangle(n, char);
        }

 
        rl.close();
    });
});