
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printFilledRectangle(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = '*'.repeat(n); 
        console.log(row); 
    }
}

rl.question("Enter the size of the rectangle: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        printFilledRectangle(n);
    }

    rl.close();
});