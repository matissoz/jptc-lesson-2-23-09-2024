function drawComplexHeart(scale: number): void {
    const width = scale * 6; // Make the width 6 times the scale for complexity
    const height = scale * 3; // Height is scaled by 3
  
    // Use a function to calculate the heart shape
    function heartEquation(x: number, y: number): boolean {
      const equationLeft = Math.pow(x * 0.05, 2) + Math.pow(y * 0.1, 2) - 1;
      return equationLeft * equationLeft * equationLeft - x * x * Math.pow(y * 0.1, 3) <= 0;
    }
  
    for (let y = height; y >= -height / 2; y--) {
      let line = '';
      for (let x = -width; x <= width; x++) {
        if (heartEquation(x, y)) {
          line += '*';
        } else {
          line += ' ';
        }
      }
      console.log(line);
    }
  }
  
  // Example usage
  const scaleInput = 5; // Change the scale to see different sizes of hearts
  drawComplexHeart(scaleInput);
  