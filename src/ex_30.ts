import * as readline from 'readline';

function generatePattern(size: number, type: string): string {
    const lines: string[] = [];

    switch (type) {
        case 'a':

            for (let i = 1; i <= size; i++) {
                const numbers = Array.from({ length: i }, (_, index) => index + 1).join(' ');
                lines.push(numbers);
            }
            break;

        case 'b':
            for (let i = 0; i < size; i++) {
                const spaces = ' '.repeat(i * 2); 
                const numbers = Array.from({ length: size - i }, (_, index) => index + 1).join(' ');
                lines.push(spaces + numbers);
            }
            break;

        case 'c':
            for (let i = 1; i <= size; i++) {
                const spaces = ' '.repeat((size - i) * 2);
                const numbers = Array.from({ length: i }, (_, index) => index + 1).join(' ');
                lines.push(spaces + numbers);
            }
            break;

        case 'd':
            for (let i = size; i >= 1; i--) {
                const numbers = Array.from({ length: i }, (_, index) => i - index).join(' ');
                lines.push(numbers);
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

askSizeAndType();