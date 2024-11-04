import * as readline from 'readline';

function generatePattern(size: number): string {
    const lines: string[] = [];

    for (let i = 0; i < size; i++) {
        const hashes = '# '.repeat(size).trim(); 
        if (i % 2 === 1) {
            
            lines.push(' ' + hashes);
        } else {
            
            lines.push(hashes);
        }
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