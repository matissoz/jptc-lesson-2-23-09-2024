// Function to print the right-aligned triangle pattern
function printRightAlignedTriangle(n: number): void {
    for (let i = 0; i < n; i++) {
      // Generate leading dots
      const dots = '.'.repeat(i);
      // Generate asterisks
      const stars = '*'.repeat(n - i);
      // Print the combined result
      console.log(dots + stars);
    }
  }
  
  // Hardcoded size of the pattern
  const n = 5; // Change this number to generate a different size pattern
  printRightAlignedTriangle(n);
  