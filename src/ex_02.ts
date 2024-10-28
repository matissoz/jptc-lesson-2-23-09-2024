const prompt = require('prompt-sync')();

function printRectangle(n: number): void {
    const row = Array(n).fill('*').join(' ');
    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}

console.log('Enter the number:');
const n = parseInt(prompt(''));
printRectangle(n);