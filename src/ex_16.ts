import readline from 'readline';

function generateCat(size: number) {
    if (size < 3) return "Size must be at least 3";
    
    const cat = [];
    
    // Top of the head with ears
    cat.push("/^^\\__/^^\\");
    
    // Generate empty body lines based on size
    for (let i = 0; i < size - 3; i++) {
        cat.push("|        |");
    }
    
    // Add mouth line
    cat.push("|   __   |");
    
    // Bottom line
    cat.push("\\__/  \\__/");
    
    return cat.join('\n');
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user and display cat
function askSize() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const size = parseInt(input);
        if (isNaN(size)) {
            console.log("Please enter a valid number");
            askSize();
            return;
        }
        
        console.log(generateCat(size));
        rl.close();
    });
}

// Start the program
askSize();