import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printPattern(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = '.'.repeat(i) + '*'.repeat(n - i); 
        console.log(row);
    }
}

rl.question("Enter the number: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        printPattern(n);
    }

    rl.close();
});