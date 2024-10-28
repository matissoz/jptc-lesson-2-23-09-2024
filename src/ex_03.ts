function printHollowSquare(n: number): void {
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            // First and last row: print all asterisks without spaces
            console.log('*'.repeat(n));
        } else {
            // Middle rows: print an asterisk at the start and end, spaces in between
            console.log('*' + ' '.repeat(n - 2) + '*');
        }
    }
}

const n = 5; // Example size
printHollowSquare(n);