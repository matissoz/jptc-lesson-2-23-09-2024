function printRectangle(n: number): void {
    const row = Array(n).fill('*').join(' ');
    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}


const n = 3; 
printRectangle(n);
