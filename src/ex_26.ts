import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawMultiplicationBoard(n: number): void {
    // Print the top header row
    let header = " * |";
    for (let i = 1; i <= n; i++) {
        header += ` ${i.toString().padStart(3)} `;
    }
    console.log(header);

    // Print the separator line
    console.log('-'.repeat(header.length));

    // Print each row of the multiplication table
    for (let i = 1; i <= n; i++) {
        let row = `${i.toString().padStart(2)} |`; // Row header
        for (let j = 1; j <= n; j++) {
            row += ` ${ (i * j).toString().padStart(3)} `; // Fill row with products
        }
        console.log(row);
    }
}

rl.question("Enter the number for the multiplication board: ", (input) => {
    const n = parseInt(input);
    drawMultiplicationBoard(n);
    rl.close();
});
