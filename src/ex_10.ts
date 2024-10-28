for (let i = 0; i < 5; i++) {
    let line = '';
    
    for (let space = 0; space < 4 - i; space++) {
        line += "  ";
    }
    
    let number = 1;
    
    for (let j = 0; j <= i; j++) {
        line += number + "   ";
        
        number = number * (i - j) / (j + 1);
    }
    
    console.log(line);
}