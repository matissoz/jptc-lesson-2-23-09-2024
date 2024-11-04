const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function printRectanglePattern(n: number): void {

    console.log('+' + ' -'.repeat(n - 1) + ' +');

    for (let i = 0; i < n - 1; i++) {
        console.log('|' + ' -'.repeat(n - 1) + ' |');
    }

    console.log('+' + ' -'.repeat(n - 1) + ' +');
}

rl.question("Enter the number: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);


        if (isNaN(n) || n <= 1) {
        console.log("Please enter a valid positive number greater than 1.");
    } else {
        printRectanglePattern(n);
    }

    rl.close();
});