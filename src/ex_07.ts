// Function to print the rectangular pattern
function printRectangle(n: number): void {
    // Print the top border
    let topBorder = '+ ' + '- '.repeat(n - 1) + '+';
    console.log(topBorder);
  
    // Print the middle rows
    for (let i = 0; i < n - 1; i++) {
      console.log('| ' + '- '.repeat(n - 1) + '|');
    }
  
    // Print the bottom border
    console.log(topBorder);
  }
  
  // Hardcoded size of the rectangle
  const n = 4; // Change this number to generate a different size pattern
  printRectangle(n);
  