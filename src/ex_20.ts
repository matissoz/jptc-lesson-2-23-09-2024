function drawAsteriskPattern(n: number): void {
    // Loop through each row from n down to 1
    for (let i = n; i >= 1; i--) {
        let lineNumbers: string[] = [];

        // Generate numbers for the current row
        for (let j = 1; j <= i; j++) {
            lineNumbers.push(j.toString()); // Convert numbers to string
        }

        // Join numbers with asterisks and print the line
        console.log(lineNumbers.join(' * '));
    }
}

// Example usage:
const inputNumber = 4; // Change this value to test with different numbers
drawAsteriskPattern(inputNumber);
