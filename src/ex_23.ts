function drawPattern(size: number): void {
    const lines: string[] = [];
    const stopLine = `//${'_'.repeat(size - 3)}STOP!${'_'.repeat(size - 3)}\\\\`;
  
    
    for (let i = 0; i < size; i++) {
      const dots = '.'.repeat(size - i - 1);
      const underscores = '_'.repeat(2 * i + size);
      const line = `${dots}//${underscores}\\\\${dots}`;
      lines.push(line);
    }
  
    
    lines.push(stopLine);
  
    
    for (let i = size - 1; i >= 0; i--) {
      const dots = '.'.repeat(size - i - 1);
      const underscores = '_'.repeat(2 * i + size);
      const line = `${dots}\\\\${underscores}//${dots}`;
      lines.push(line);
    }
  
    
    console.log(lines.join('\n'));
  }
  
  
  const prompt = require("prompt-sync")();
  const input = parseInt(prompt("> Enter the number:\n> "), 10);
  drawPattern(input);