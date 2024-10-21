function drawDoublingTriangle(n: number): void {
    const lines: string[] = [];

    // Generate each line
    for (let i = 0; i < n; i++) {
        const lineNumbers: number[] = [];

        // Populate numbers for the current row
        for (let j = 0; j <= i; j++) {
            // Each number starts as 1 and is multiplied by 2^i
            lineNumbers.push(Math.pow(2, i - j)); // 2^(i-j) for each column
        }

        // Create a formatted string for the current line, joining with spaces
        const lineString = lineNumbers.join('    ');
        lines.push(lineString);
    }

    // Print each line
    for (const line of lines) {
        console.log(line);
    }
}

// Example usage:
const inputNumber = 8; // Change this to test different sizes
drawDoublingTriangle(inputNumber);
