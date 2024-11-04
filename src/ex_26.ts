import * as readline from 'readline';

// Function to generate and print the multiplication table
function generateMultiplicationTable(size: number): string {
    const table: string[] = [];
    // Create the header row
    const header = ' * |' + Array.from({ length: size }, (_, i) => ` ${i + 1}`.padStart(5)).join('');
    table.push(header);
    table.push('-'.repeat(header.length)); // Add a separator

    // Create each row of the multiplication table
    for (let i = 1; i <= size; i++) {
        const row = `${i.toString().padStart(2)} |` + // Row header
            Array.from({ length: size }, (_, j) => ` ${(i * (j + 1))}`.padStart(5)).join('');
        table.push(row);
    }

    return table.join('\n'); // Join the table rows with new lines
}

// Readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for the number
function askNumber() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const number = parseInt(input);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number.");
            askNumber(); // Ask again if input is invalid
            return;
        }

        // Generate and display the multiplication table
        console.log(generateMultiplicationTable(number));
        rl.close(); // Close the readline interface
    });
}

// Start the program
askNumber();