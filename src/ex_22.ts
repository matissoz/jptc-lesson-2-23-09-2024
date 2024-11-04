import * as readline from 'readline';

function generatePattern(n: number, direction: string): string {
    const lines: string[] = [];

    
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(i); 
        const stars = '*'.repeat(n - i); 
        lines.push(spaces + stars); 
    }

    
    for (let i = n - 1; i >= 1; i--) {
        const spaces = ' '.repeat(n - i); 
        const stars = '*'.repeat(i); 
        lines.push(spaces + stars); 
    }

    
    if (direction === 'L') {
        return lines.map(line => line.padStart(n)).join('\n'); 
    }
    
    return lines.join('\n'); 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumberAndDirection() {
    console.log("> Enter the number:");
    rl.question('> ', (numberInput: string) => {
        const number = parseInt(numberInput);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number");
            askNumberAndDirection();
            return;
        }

        console.log("> Select direction: (R/L)");
        rl.question('> ', (directionInput: string) => {
            const direction = directionInput.toUpperCase();
            if (direction !== 'R' && direction !== 'L') {
                console.log("Please enter a valid direction (R or L)");
                askNumberAndDirection();
                return;
            }

            console.log(generatePattern(number, direction));
            rl.close();
        });
    });
}


askNumberAndDirection();