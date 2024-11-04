import * as readline from 'readline';

function generatePattern(n: number): void {
    if (n < 3) {
        console.log("The number should be 3 or more.");
        return;
    }

    const asteriskPart = "*".repeat(2 * n);
    const spacePart = " ".repeat(n);
    console.log(asteriskPart + spacePart + asteriskPart); // **************       **************

    for (let i = 1; i <= n - 2; i++) {
        const middle = "/".repeat(2 * n - 2); 
        const row = "*" + middle + "*"; // *////////////* 

        if (i === Math.ceil((n - 2) / 2)) {
            const pipeRow = "*" + middle + "*" + "|".repeat(n) + "*" + middle + "*"; 
            console.log(pipeRow); // *////////////*|||||||*////////////*
        } else {
            console.log(row + spacePart + row); // *////////////*       *////////////*
        }
    }

    console.log(asteriskPart + spacePart + asteriskPart); //**************       **************
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (userAnswer) => {
    const inputNumber = parseInt(userAnswer, 10); // 4
    generatePattern(inputNumber);
    rl.close();
});

