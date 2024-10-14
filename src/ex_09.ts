import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function printPattern(n: number): void {
    for (let i = 1; i <= n; i++) {

        const leadingSpaces = ' '.repeat(n - i);

        const stars = '*'.repeat(i);
 
        console.log(`${leadingSpaces}${stars} | ${stars}`);
    }
}


rl.question("Enter the number: ", (sizeInput: string) => {
    const n: number = parseInt(sizeInput, 10);


    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        printPattern(n);
    }

    rl.close();
});