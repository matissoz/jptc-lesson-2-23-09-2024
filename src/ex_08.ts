let n = 4; 

for (let i = 1; i <= n; i++) {
  let line = "";

  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }

  for (let k = 1; k <= i; k++) {
    line += "*";
    if (k < i) line += " ";
  }

  console.log(line);
}

for (let i = n - 1; i >= 1; i--) {
  let line = "";

  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }

  for (let k = 1; k <= i; k++) {
    line += "*";
    if (k < i) line += " ";
  }

  console.log(line);
}
