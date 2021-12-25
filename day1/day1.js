const fs = require('fs');
const { listeners } = require('process');
const line = fs
    .readFileSync("day1-input.txt", { encoding: "utf-8" })
    .split('\n')
    .map((n) => parseInt(n))



//############### PART 1 ############### 
{
    let largerThanPrev = 0;
    let prev = line[0];

    for (let i = 0; i < line.length; i++) {
        prev = line[i - 1]
        if (line[i] > prev) largerThanPrev++
    }

    console.log(largerThanPrev);
}

//############### PART 2 ############### 
{
    let lastLines = 0;
    let position = 0;
    let largerThanPrevtotal = 0;

    for (let i = 3; i < line.length; i++) {
        position = line[i - 2] + line[i - 1] + line[i];
        lastLines = line[i - 3] + line[i - 2] + line[i - 1];

        if (position > lastLines) {
            largerThanPrevtotal++
        }
    }

    console.log(largerThanPrevtotal)
}
