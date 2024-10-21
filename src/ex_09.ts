// Function to print the tree pattern
function printTree(n: number): void {
    // Calculate the width of the tree (to center the top and bottom trunk)
    const width = n * 2 + 3; // Total width including space for ' | '
  
    // Print the top vertical line centered above the tree
    const topTrunkSpaces = ' '.repeat((width - 1) / 2);
    console.log(topTrunkSpaces + '|');
  
    // Loop for each level of the tree
    for (let i = 1; i <= n; i++) {
      // Print leading spaces for alignment
      const spaces = ' '.repeat(n - i);
      
      // Create the left side of the tree
      const leftStars = '*'.repeat(i);
      
      // Create the right side of the tree
      const rightStars = '*'.repeat(i);
      
      // Combine the parts and print the tree level
      console.log(spaces + leftStars + ' | ' + rightStars);
    }
  
    // Print the trunk of the tree, centered below the last level
    const trunkSpaces = ' '.repeat((width - 1) / 2);
    console.log(trunkSpaces + '|');
  }
  
  // Hardcoded height of the tree
  const n = 4; // Change this number to generate a different size pattern
  printTree(n);