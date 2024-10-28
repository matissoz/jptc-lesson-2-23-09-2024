let firstLine = '     |';
console.log(firstLine);

for (let i = 1; i <= 4; i++) {
    let line = '';
    
    for (let j = 0; j < 4 - i; j++) {
        line += ' ';
    }
    
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    
    line += ' | ';
    
    for (let j = 0; j < i; j++) {
        line += '*';
    }
    
    console.log(line);
}