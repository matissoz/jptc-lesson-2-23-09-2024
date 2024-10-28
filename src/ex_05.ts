// Function to print the X pattern
function printXPattern(n: number): void {
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        // Condition for placing an asterisk
        if (i === j || i + j === n - 1) {
          row += '*';
        } else {
          row += '.';
        }
      }
      console.log(row);
    }
  }
  
  // Hardcoded size of the pattern
  const n = 5; // Change this number to generate a different size pattern
  printXPattern(n);
  