import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function printRectangle(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log('*'.repeat(n));
    }
}


rl.question('Enter the number: ', (answer) => {
    const n = parseInt(answer);
    printRectangle(n);
    rl.close();
});