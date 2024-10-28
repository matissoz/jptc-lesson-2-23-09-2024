function generatePattern() {
    let n = 5;
    let direction = "right";
    let isEmpty = "n";

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = 0; j < n - i - 1; j++) {
            line += " ";
        }

        for (let j = 0; j < n; j++) {
            if (isEmpty.toLowerCase() === "n") {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

generatePattern();