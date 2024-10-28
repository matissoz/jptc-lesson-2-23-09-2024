import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateMultiplicationTable(n: number) {
    let header = ' * |';
    for (let i = 1; i <= n; i++) {
        header += `  ${i.toString().padStart(2)} `;
    }
    console.log(header);

    console.log('-'.repeat(header.length));

    for (let i = 1; i <= n; i++) {
        let row = `${i.toString().padStart(2)} |`;
        for (let j = 1; j <= n; j++) {
            row += `  ${(i * j).toString().padStart(2)} `;
        }
        console.log(row);
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        generateMultiplicationTable(n);
    }
    rl.close();
});
