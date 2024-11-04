import * as readline from 'readline';


function generateMultiplicationTable(size: number): string {
    const table: string[] = [];
    
    const header = ' * |' + Array.from({ length: size }, (_, i) => ` ${i + 1}`.padStart(5)).join('');
    table.push(header);
    table.push('-'.repeat(header.length)); 

    
    for (let i = 1; i <= size; i++) {
        const row = `${i.toString().padStart(2)} |` + 
            Array.from({ length: size }, (_, j) => ` ${(i * (j + 1))}`.padStart(5)).join('');
        table.push(row);
    }

    return table.join('\n'); 
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askNumber() {
    console.log("> Enter the number:");
    rl.question('> ', (input: string) => {
        const number = parseInt(input);
        if (isNaN(number) || number < 1) {
            console.log("Please enter a valid positive number.");
            askNumber(); 
            return;
        }

        
        console.log(generateMultiplicationTable(number));
        rl.close(); 
    });
}


askNumber();