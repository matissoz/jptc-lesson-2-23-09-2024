import { createInterface } from "readline";

type DrawPatternArgs = { rows: number; direction: string; isEmpty: boolean };

function drawPattern({ rows, direction, isEmpty }: DrawPatternArgs): void {
  for (let i = 0; i < rows; i++) {
    let line: string;
    let stars: string;

    if(isEmpty && i < rows - 1) {
        stars = "*" + " ".repeat(rows - 2) + "*"
    } else {
        stars = "*".repeat(rows)
    }

    if (direction === "right") {
      line = " ".repeat(rows - i - 1) + stars;
    } else {
      line = stars + " ".repeat(rows - i - 1);
    }

    console.log(line);
  }
}

// function drawPattern({ rows, direction, isEmpty }: DrawPatternArgs): void {
//     for (let i = 0; i < rows; i++) {
//       const stars =
//         isEmpty && i < rows - 1
//           ? "*" + " ".repeat(rows - 2) + "*"
//           : "*".repeat(rows);
//       const line =
//         direction === "right"
//           ? " ".repeat(rows - i - 1) + stars
//           : stars + " ".repeat(rows - i - 1);
  
//       console.log(line);
//     }
//   }
  

function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the number of rows: ", (number) => {
    const n = parseInt(number);
    rl.question("Select direction (right/left): ", (dir) => {
      const direction = dir.toLowerCase();
      rl.question("Is it empty? (y/n): ", (empty) => {
        const isEmpty = empty.toLowerCase() === "y";
        drawPattern({ rows: n, direction, isEmpty});
        rl.close();
      });
    });
  });
}

main();
