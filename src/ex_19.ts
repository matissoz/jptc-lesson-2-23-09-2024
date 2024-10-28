function drawPattern(n: number): void {
    // Loop through each row
    for (let i = 0; i < n; i++) {
        // Left side numbers
        let leftPart: string = '';
        for (let j = n; j > i; j--) {
            leftPart += j + ' ';
        }

        // Spaces in the middle
        let spaces: string = ' '.repeat(4 * i); // 4 spaces for each row

        // Right side numbers
        let rightPart: string = '';
        for (let j = i + 1; j <= n; j++) {
            rightPart += j + ' ';
        }

        // Combine parts and print the row
        console.log(leftPart + spaces + rightPart.trim());
    }
}

// Example usage:
const inputNumber = 7; // Change this value to test with different numbers
drawPattern(inputNumber);
