function generatePattern(n) {
    let width = 2 * n;
  
    let topBottomRow = "";
    for (let i = 0; i < width; i++) {
      topBottomRow += "*";
    }
    console.log(topBottomRow + "   " + topBottomRow);
  
    for (let i = 1; i < n - 1; i++) {
      let line = "*";
  
      for (let j = 1; j < width - 1; j++) {
        line += "/";
      }
      line += "*";
  
      if (i === Math.floor(n / 2)) {
      
        line += "|||";
        line += line;
      } else {
      
        line += "   " + line;
      }
  
      console.log(line);
    }
  
    console.log(topBottomRow + "   " + topBottomRow);
  }
  
  generatePattern(3);
  console.log("\n");
  generatePattern(4);
  console.log("\n");
  generatePattern(5);