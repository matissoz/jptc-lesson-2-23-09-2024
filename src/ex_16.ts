function drawPattern(n: number): void {
    if (n < 3) {
      console.log("Number must be 3 or greater.");
      return;
    }
  
    // Top wave line
    let topLine = "/";
    for (let i = 0; i < n - 1; i++) {
      topLine += "^";
    }
    topLine += "\\";
    for (let i = 0; i < n - 1; i++) {
      topLine += "_";
    }
    topLine += "/";
    console.log(topLine);
  
    // Vertical walls (n - 2 lines of |)
    for (let i = 0; i < n - 2; i++) {
      console.log("|" + " ".repeat(2 * (n - 1)) + "|");
    }
  
    // Bottom wave line
    let bottomLine = "\\";
    for (let i = 0; i < n - 1; i++) {
      bottomLine += "_";
    }
    bottomLine += "/";
    for (let i = 0; i < n - 1; i++) {
      bottomLine += "^";
    }
    bottomLine += "\\";
    console.log(bottomLine);
  }
  
  // Example usage:
  const inputNumber: number = 8;  // You can change this value to test different numbers
  drawPattern(inputNumber);
  