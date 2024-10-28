let width = 4;
let height = 4;

for (let i = 0; i < height; i++) {
    let line = '';
    
    for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1) {
            if (j === 0 || j === width - 1) {
                line += '+';
            } else {
                line += ' - ';
            }
        }
        else {
            if (j === 0 || j === width - 1) {
                line += '|';
            } else {
                line += ' - ';
            }
        }
    }
    console.log(line);
}