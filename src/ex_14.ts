import * as readline from 'readline';

function createDiamond(n: number): string[] {
    const pattern: string[] = [];
    const middle = Math.floor(n / 2); 

    for (let i = 0; i < middle + 1; i++) {
        let line = '-'.repeat(middle - i);
        if (i === 0) {
            line += '*'; 
        } else {
            line += '*' + '-'.repeat(i * 2 - 1) + '*'; 
        }
        line += '-'.repeat(middle - i);
        pattern.push(line);
    }

    for (let i = middle - 1; i >= 0; i--) {
        let line = '-'.repeat(middle - i); 
        if (i === 0) {
            line += '*'; 
        } else {
            line += '*' + '-'.repeat(i * 2 - 1) + '*'; 
        }
        line += '-'.repeat(middle - i);
        pattern.push(line);
    }

    return pattern;
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
        const diamond = createDiamond(inputNumber);
        console.log(diamond.join('\n')); 
    }

    rl.close(); 
});