for (let i = 0; i < 5; i++) {
    let line = '';
    let letter = String.fromCharCode(65 + i);  // Convert number to letter (A=65, B=66, etc.)
    
    // Add the letter i+1 times
    for (let j = 0; j <= i; j++) {
        line += letter + ' ';
    }
    
    console.log(line);
}