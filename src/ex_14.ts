function generateDiamondPattern(n: number): void {
    // If n is even, use n - 1 for the number of rows
    const rows = n % 2 === 0 ? n - 1 : n; 
    const mid = Math.floor(rows / 2); // Determine the middle of the diamond

    // Upper part of the diamond
    for (let i = 0; i <= mid; i++) {
        const hyphens = '-'.repeat(mid - i); // Decreasing hyphens
        if (i === 0) {
            // First row with two stars
            console.log(`${hyphens}**${hyphens}`);
        } else {
            // Rows with one star on each end and a hyphen in the middle
            const middleHyphens = '-'.repeat(2 * i - 1); // Middle hyphens
            console.log(`${hyphens}*-${middleHyphens}*${hyphens}`);
        }
    }

    // Lower part of the diamond
    for (let i = mid - 1; i >= 0; i--) {
        const hyphens = '-'.repeat(mid - i); // Decreasing hyphens
        if (i === 0) {
            // Last row with two stars
            console.log(`${hyphens}**${hyphens}`);
        } else {
            // Rows with one star on each end and a hyphen in the middle
            const middleHyphens = '-'.repeat(2 * i - 1); // Middle hyphens
            console.log(`${hyphens}*-${middleHyphens}*${hyphens}`);
        }
    }
}

// Example usage:
const n = 4; // You can set this to any even or odd number
generateDiamondPattern(n);
