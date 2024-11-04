const readline = require('readline');

function generateHeart(size: number, text: string = ""): string {
    const lines: string[] = [];
    const width = size;
    
    // Generate top curves of the heart
    lines.push("  *****     *****");
    lines.push(" *******   *******");
    lines.push("********* *********");
    
    // Middle line with text if provided
    if (text) {
        const totalWidth = 19; // Width of the pattern
        const padding = Math.floor((totalWidth - text.length) / 2);
        const middleLine = "*".repeat(padding) + text + "*".repeat(totalWidth - padding - text.length);
        lines.push(middleLine);
    } else {
        lines.push("*".repeat(19)); // Full line of stars if no text
    }
    
    // Generate bottom part of heart
    let stars = 17; // Starting number of stars for the descending part
    let spaces = 1;  // Starting number of spaces for indentation
    
    while (stars >= 1) {
        lines.push(" ".repeat(spaces) + "*".repeat(stars));
        stars -= 2;
        spaces += 1;
    }
    
    return lines.join('\n');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askSize() {
    console.log("> Enter the number:");
    rl.question('> ', (sizeInput: string) => {
        const size = parseInt(sizeInput);
        if (isNaN(size)) {
            console.log("Please enter a valid number");
            askSize();
            return;
        }

        console.log("> What should we print on it?");
        rl.question('> ', (text: string | undefined) => {
            console.log(generateHeart(size, text));
            rl.close();
        });
    });
}

// Start the program
askSize();