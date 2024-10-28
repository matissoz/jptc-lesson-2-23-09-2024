for (let row = 0; row < 7; row++) {
    let line = "";
    for (let col = 0; col < 7; col++) {
      if (row === col || row + col === 6) { 
        line += "*";
      } else {
        line += ".";
      }
    }
    console.log(line);
  }