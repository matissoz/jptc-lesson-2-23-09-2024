let size = 6;
for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '.';
    }
    for (let k = 0; k < size - i; k++) {
        line += '*';
    }
    
    console.log(line);
}