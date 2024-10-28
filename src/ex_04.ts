import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number: ', (numberInput) => {
    const n = parseInt(numberInput);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
        rl.close();
    } else {
        rl.question('Select the character: ', (char) => {
            for (let i = 1; i <= n; i++) {
                console.log(char.repeat(i).split('').join(' '));
            }
            rl.close();
        });
    }
});
