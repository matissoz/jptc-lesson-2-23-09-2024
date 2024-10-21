function printAlphabetTriangle(n: number): void {
    // Loop through each row
    for (let i = 0; i < n; i++) {
      // Get the current letter based on the ASCII value of 'A' (65)
      const letter = String.fromCharCode(65 + i);
  
      // Create the row with the current letter repeated (i + 1) times
      const row = Array(i + 1).fill(letter).join(' ');
  
      // Print the row
      console.log(row);
    }
  }
  
  // Hardcoded height of the triangle
  const n = 5; // Change this number to generate a different size triangle
  printAlphabetTriangle(n);