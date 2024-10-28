import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawCube(n: number): void {
    for (let i = 0; i < n; i++) {
        // Start with a space for every second row
        const row = (i % 2 === 1 ? ' ' : '') + '# '.repeat(n);
        
        // Print the row
        console.log(row.trim());
    }
}

rl.question("Enter the number for the cube scale: ", (input) => {
    const n = parseInt(input);
    drawCube(n);
    rl.close();
});
