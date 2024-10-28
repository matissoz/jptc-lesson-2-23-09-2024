import * as readline from 'readline';

function generatePattern(n: number): void {
    for (let i = 0; i < n; i++) {

        const letter = String.fromCharCode(65 + i); 
        

        const row = Array(i + 1).fill(letter).join(' ');
        
        console.log(row);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (answer) => {
    const inputNumber = parseInt(answer, 10);
    
    if (inputNumber < 1) {
        console.log("Please enter a number greater than 0.");
    } else {
        generatePattern(inputNumber);
    }

    rl.close();
});