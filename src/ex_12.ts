function generatePattern(n: number): void {
    const starsBlock = '*'.repeat(2 * n);          // Block of stars (first and last rows)
    const slashesBlock = '/' .repeat(2 * n - 2);   // Block of slashes (middle rows)
    const middleBars = '|'.repeat(n);              // Bars in the second row
    const spaceBetweenBlocks = ' '.repeat(4);      // 4 spaces between blocks

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            // First and last rows are stars with 4 spaces in between
            console.log(`${starsBlock}${spaceBetweenBlocks}${starsBlock}`);
        } else if (i === 1) {
            // Second row with bars between the two blocks
            console.log(`*${slashesBlock}*${middleBars}*${slashesBlock}*`);
        } else {
            // Rows with slashes and 4 spaces in between
            console.log(`*${slashesBlock}*${spaceBetweenBlocks}*${slashesBlock}*`);
        }
    }
}

// Example usage without user input:
const n = 4; // Set the value of n here
generatePattern(n);
