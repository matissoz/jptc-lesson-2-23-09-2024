function printTriangle(n: number, symbol: string): void {
    for (let i = 1; i <= n; i++) {
      console.log(symbol.repeat(i).split('').join(' '));
    }
  }
  
  const n = 5; // Size of the triangle
  const symbol = '$'; // Symbol to be used
  printTriangle(n, symbol);