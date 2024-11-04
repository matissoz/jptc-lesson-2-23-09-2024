import * as readline from 'readline';

function generatePattern(n: number): string {
    const lines: string[] = [];

   
    for (let row = n; row >= 1; row--) {
       
        const line = Array.from({ length: row }, (_, i) => (i + 1).toString()).join(" * ");
        lines.push(line);
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