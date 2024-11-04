const readline = require('readline');

function generateHeart(size: number, text: string = ""): string {
    const lines: string[] = [];
    const width = size;
    
    
    lines.push("  *****     *****");
    lines.push(" *******   *******");
    lines.push("********* *********");
    
    
    if (text) {
        const totalWidth = 19; 
        const padding = Math.floor((totalWidth - text.length) / 2);
        const middleLine = "*".repeat(padding) + text + "*".repeat(totalWidth - padding - text.length);
        lines.push(middleLine);
    } else {
        lines.push("*".repeat(19)); 
    }
    
    
    let stars = 17; 
    let spaces = 1; 
    
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


askSize();