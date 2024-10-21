function printPascalsTriangle(n: number): void {
    // Create a 2D array to hold the values of Pascal's Triangle
    const triangle: number[][] = [];
  
    // Build Pascal's Triangle
    for (let row = 0; row < n; row++) {
      triangle[row] = []; // Initialize the current row
  
      for (let col = 0; col <= row; col++) {
        // The first and last values in each row are always 1
        if (col === 0 || col === row) {
          triangle[row][col] = 1;
        } else {
          // Each interior value is the sum of the two values above it
          triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }
      }
    }
  
    // Print the triangle in a centered format
    for (let row = 0; row < n; row++) {
      // Print leading spaces for center alignment
      const spaces = ' '.repeat((n - row - 1) * 2); // Adjust spacing for center alignment
      process.stdout.write(spaces); // Print leading spaces
  
      // Print the values in the current row, separated by spaces
      console.log(triangle[row].join('   '));
    }
  }
  
  // Hardcoded height of the pyramid
  const n = 5; // Change this number to generate a different size pyramid
  printPascalsTriangle(n);
  