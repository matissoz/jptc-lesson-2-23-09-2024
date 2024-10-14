import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printDiamondPattern(n: number): void {
    const size = 2 * n - 1; 

    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
         
            const distance = Math.abs(n - 1 - i) + Math.abs(n - 1 - j);
            if (distance === n - 1) {
                row += '*';
            } else {
                row += '.';
            }
        }
        console.log(row);
    }
}

rl.question("Enter the number: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        printDiamondPattern(n);
    }

    rl.close();
});