function drawPattern(n: number): void {
    // Define the length of the symbols in each row
    const symbolLength = n - 2;

    // Create the upper part of the pattern
    for (let i = 0; i < symbolLength; i++) {
        if (i % 2 === 0) {
            // Even rows (0, 2, 4, ...) with asterisks
            const stars = '*'.repeat(symbolLength);
            console.log(`${stars}\\ /${stars}`);
        } else {
            // Odd rows (1, 3, 5, ...) with dashes
            const dashes = '-'.repeat(symbolLength);
            console.log(`${dashes}\\ /${dashes}`);
        }
    }

    // Print the middle line with "@"
    console.log(' '.repeat(n - 1) + '@');

    // Create the lower part of the pattern (same as upper part)
    for (let i = 0; i < symbolLength; i++) {
        if (i % 2 === 0) {
            // Even rows (0, 2, 4, ...) with asterisks
            const stars = '*'.repeat(symbolLength);
            console.log(`${stars}/ \\${stars}`);
        } else {
            // Odd rows (1, 3, 5, ...) with dashes
            const dashes = '-'.repeat(symbolLength);
            console.log(`${dashes}/ \\${dashes}`);
        }
    }
}

// Example usage:
const inputNumber = 4; // Change this to test different numbers
drawPattern(inputNumber);
