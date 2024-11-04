import readline from 'readline';

function generateNumberPattern(rows: number): string {
    const lines: string[] = [];
    
    for (let row = 0; row < rows; row++) {
        const numbers: number[] = [];
        let currentNumber = Math.pow(2, row);
        
        
        for (let i = 0; i <= row; i++) {
            numbers.push(currentNumber);
            currentNumber = currentNumber / 2;
        }
        
        
        const formattedNumbers = numbers.map(num => {
            
            return num.toString().padStart(3);
        });
        
        
        const maxWidth = Math.pow(2, rows - 1).toString().length;
        const indentation = " ".repeat(maxWidth - Math.pow(2, row).toString().length);
        
        
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


askNumber();