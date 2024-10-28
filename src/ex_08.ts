// Function to print a single centered asterisk
function printSingleAsterisk(n: number): void {
    const spaces = ' '.repeat(n - 1); // Calculate leading spaces to center the asterisk
    console.log(spaces + '*'); // Print a single centered asterisk
  }
  
  // Function to print the diamond pattern
  function printDiamond(n: number): void {
    // Upper part of the diamond
    for (let i = 1; i <= n; i++) {
      // Print leading spaces
      const spaces = ' '.repeat(n - i);
      // Print stars with spaces in between
      const stars = '* '.repeat(i).trim();
      console.log(spaces + stars);
    }
  
    // Lower part of the diamond
    for (let i = n - 1; i >= 1; i--) {
      // Print leading spaces
      const spaces = ' '.repeat(n - i);
      // Print stars with spaces in between
      const stars = '* '.repeat(i).trim();
      console.log(spaces + stars);
    }
  }
  
  // Hardcoded size of the diamond
  const n = 4; // Change this number to generate a different size pattern
  
  // Call the function to print the single asterisk centered above the diamond
  printSingleAsterisk(n);
  
  // Call the function to print the diamond
  printDiamond(n);
  
  