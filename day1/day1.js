const fs = require('fs');
const line = fs
    .readFileSync("day1-input.txt", { encoding: "utf-8" })
    .split('\n')
    .map((n) => parseInt(n))

let largerThanPrev = 0;
let prev = line[0];

for(let i = 0; i < line.length; i++) {
    prev = line[i - 1]
    if(line[i] > prev) largerThanPrev++
}

console.log(largerThanPrev);