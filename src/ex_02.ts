import * as readline from 'readline';

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print a rectangle of size n x n
function printRectangle(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* '; // Add a star followed by a space
        }
        console.log(row.trim()); // Trim the trailing space and print the row
    }
}

// Read user input for n
rl.question("Enter the size of the rectangle: ", (answer) => {
    const n: number = parseInt(answer, 10);

    // Validate the input
    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        printRectangle(n);
    }

    // Close the readline interface
    rl.close();
});