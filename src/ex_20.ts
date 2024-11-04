import * as readline from 'readline';

function generatePattern(n: number): string {
    const lines: string[] = [];

    // Generate each line
    for (let row = n; row >= 1; row--) {
        // Create an array with numbers from 1 up to the current row number
        const line = Array.from({ length: row }, (_, i) => (i + 1).toString()).join(" * ");
        lines.push(line);
    }
    
    // Join all lines with a newline character
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
        
        console.log(generatePattern(number));
        rl.close();
    });
}

// Start the program
askNumber();