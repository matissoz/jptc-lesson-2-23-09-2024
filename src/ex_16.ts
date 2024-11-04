import readline from 'readline';

function generateCat(size: number) {
    if (size < 3) return "Size must be at least 3";
    
    const cat = [];
    
    
    cat.push("/^^\\__/^^\\");
    
    
    for (let i = 0; i < size - 3; i++) {
        cat.push("|        |");
    }
    
    
    cat.push("|   __   |");
    
    
    cat.push("\\__/  \\__/");
    
    return cat.join('\n');
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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


askSize();