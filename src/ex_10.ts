import * as readline from 'readline';


function generatePascalsTriangle(n: number): number[][] {
    const triangle: number[][] = [];

    for (let row = 0; row < n; row++) {
        triangle[row] = new Array(row + 1); 

     
        triangle[row][0] = 1;
        triangle[row][row] = 1;

   
        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }
    }

    return triangle;
}


function printPascalsTriangle(triangle: number[][], n: number): void {
    const maxWidth = n * 2; 

    for (let row = 0; row < triangle.length; row++) {
 
        const line = triangle[row].join('   '); 

        const padding = ' '.repeat(maxWidth - (row * 2)); 
 
        console.log(padding + line); 
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
        const triangle = generatePascalsTriangle(inputNumber);
        printPascalsTriangle(triangle, inputNumber);
    }

    rl.close(); 
});