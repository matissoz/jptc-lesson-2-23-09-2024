import * as readline from 'readline';

function generatePattern(size: number, type: string): string {
    const lines: string[] = [];

    switch (type) {
        case 'a':
            // Pattern type a: Increasing number of hashes
            for (let i = 1; i <= size; i++) {
                lines.push('# '.repeat(i).trim());
            }
            break;

        case 'b':
            // Pattern type b: Decreasing number of hashes
            for (let i = size; i >= 1; i--) {
                lines.push('# '.repeat(i).trim());
            }
            break;

        case 'c':
            // Pattern type c: Right-aligned increasing hashes
            for (let i = 0; i < size; i++) {
                const spaces = ' '.repeat(i * 2); // 2 spaces per row
                lines.push(spaces + '# '.repeat(size - i).trim());
            }
            break;

        case 'd':
            // Pattern type d: Right-aligned decreasing hashes
            for (let i = size - 1; i >= 0; i--) {
                const spaces = ' '.repeat(i * 2); // 2 spaces per row
                lines.push(spaces + '# '.repeat(size - i).trim());
            }
            break;

        default:
            return "Invalid pattern type.";
    }

    return lines.join('\n');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askSizeAndType() {
    console.log("> Enter the size:");
    rl.question('> ', (sizeInput: string) => {
        const size = parseInt(sizeInput);
        if (isNaN(size) || size < 1) {
            console.log("Please enter a valid positive number");
            askSizeAndType();
            return;
        }

        console.log("> Select the type: (a/b/c/d)");
        rl.question('> ', (typeInput: string) => {
            const type = typeInput.toLowerCase();
            if (!['a', 'b', 'c', 'd'].includes(type)) {
                console.log("Please enter a valid type (a, b, c, or d)");
                askSizeAndType();
                return;
            }

            console.log(generatePattern(size, type));
            rl.close();
        });
    });
}

// Start the program
askSizeAndType();