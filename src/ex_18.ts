const readline = require('readline');

function generateNumberPattern(rows: number): string {
    const lines: string[] = [];
    
    for (let row = 0; row < rows; row++) {
        const numbers: number[] = [];
        let currentNumber = Math.pow(2, row);
        
        // Generate numbers for current row
        for (let i = 0; i <= row; i++) {
            numbers.push(currentNumber);
            currentNumber = currentNumber / 2;
        }
        
        // Format the numbers with proper spacing
        const formattedNumbers = numbers.map(num => {
            // Convert number to string and pad with spaces to width of 4
            return num.toString().padStart(3);
        });
        
        // Add proper indentation based on the max width
        const maxWidth = Math.pow(2, rows - 1).toString().length;
        const indentation = " ".repeat(maxWidth - Math.pow(2, row).toString().length);
        
        // Join numbers with 4 spaces between them
        lines.push(indentation + formattedNumbers.join("    "));
    }
    
    return lines.join('\n');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const number = parseInt(input);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number");
            askNumber();
            return;
        }
        
        console.log(generateNumberPattern(number));
        rl.close();
    });
}

// Start the program
askNumber();