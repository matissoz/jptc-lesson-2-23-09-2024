function patternOne() {
    let line = "";
    for (let i = 0; i < 2; i++) {
        line += "*";
    }
    console.log(line);

    line = "";
    for (let i = 0; i < 2; i++) {
        line += "|";
    }
    console.log(line);
}

function patternTwo() {
    let width = 5;

    for (let i = 1; i <= 3; i++) {
        let line = "";

        for (let j = 0; j < width - i; j++) {
            line += "-";
        }

        for (let k = 0; k < 2 * i - 1; k++) {
            line += "*";
        }

        for (let j = 0; j < width - i; j++) {
            line += "-";
        }

        console.log(line);
    }

    for (let i = 0; i < 2; i++) {
        let line = "|";
        for (let j = 0; j < 3; j++) {
            line += "*";
        }
        line += "|";
        console.log(line);
    }
}

function patternThree() {
    let width = 7;

    for (let i = 2; i <= 4; i++) {
        let line = "";

        for (let j = 0; j < width - i; j++) {
            line += "-";
        }

        for (let k = 0; k < 2 * i; k++) {
            line += "*";
        }

        for (let j = 0; j < width - i; j++) {
            line += "-";
        }

        console.log(line);
    }

    for (let i = 0; i < 4; i++) {
        let line = "|";
        for (let j = 0; j < 6; j++) {
            line += "*";
        }
        line += "|";
        console.log(line);
    }
}

patternOne();
console.log("\n");
patternTwo();
console.log("\n");
patternThree();