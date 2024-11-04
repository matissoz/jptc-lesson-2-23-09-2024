const readline = require('readline');

function generatePattern(n: number) {
    const lines = [];
    
    
    for (let row = 0; row < n; row++) {
        const line = [];
        
        
        for (let i = n; i > row; i--) {
            line.push(i.toString());
        }
        
        
        const spaces = " ".repeat(4 * row);
        line.push(spaces);
        
        
        for (let i = row + 1; i <= n; i++) {
            line.push(i.toString());
        }
        
        
        lines.push(line.join(" "));
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
        
        console.log(generatePattern(number));
        rl.close();
    });
}


askNumber();