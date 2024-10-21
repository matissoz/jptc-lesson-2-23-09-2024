function generatePattern(n: number): void {
    const middle = Math.floor(n / 2); // Middle row determines max number of stars

    // Upper part of the pattern (with hyphens and increasing stars)
    for (let i = 0; i <= middle; i++) {
        const hyphens = '-'.repeat(middle - i);  // Decreasing hyphens
        const stars = '*'.repeat(2 * i + 1);     // Increasing stars
        console.log(`${hyphens}${stars}${hyphens}`);
    }

    // Lower part of the pattern (with bars and stars)
    const lowerStars = '*'.repeat(2 * middle - 1); // 2 less than the stars above
    for (let i = 0; i < n - middle - 1; i++) {
        console.log(`|${lowerStars}|`);
    }
}

// Example usage:
const n = 5; // Example for n = 5
generatePattern(n);
