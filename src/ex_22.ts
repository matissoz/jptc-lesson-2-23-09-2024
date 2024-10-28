function drawTriangles(n: number, direction: string): void {
    // Upper inverted triangle
    for (let i = n; i > 0; i--) {
        let line: string;

        if (direction === 'R') {
            // Right-aligned
            line = '*'.repeat(i);
        } else { // direction === 'L'
            // Left-aligned
            line = ' '.repeat(n - i) + '*'.repeat(i);
        }

        console.log(line);
    }

    // Lower triangle
    for (let i = 2; i <= n; i++) {
        let line: string;

        if (direction === 'R') {
            // Right-aligned
            line = '*'.repeat(i);
        } else { // direction === 'L'
            // Left-aligned with decreasing spaces
            line = ' '.repeat(i - 1) + '*'.repeat(i);
        }

        console.log(line);
    }
}

// Set the scale and direction here
const scale = 5; // Change this value for different scales
const direction = 'L'; // Change to 'R' for right alignment

drawTriangles(scale, direction);
