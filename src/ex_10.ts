import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function generatePascalsTriangle(n: number): number[][] {
    const triangle: number[][] = [];
    for (let i = 0; i < n; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }
    return triangle;
}


function printPascalsTriangle(triangle: number[][], n: number) {
    for (let i = 0; i < n; i++) {
        
        let line = ' '.repeat((n - i - 1) * 2); 
        for (let j = 0; j <= i; j++) {
            line += triangle[i][j] + '   '; 
        }
        console.log(line.trimEnd());
    }
}

rl.question('Enter the number: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Please enter a valid number greater than 0.");
    } else {
        const triangle = generatePascalsTriangle(n);
        printPascalsTriangle(triangle, n);
    }
    rl.close();
});
