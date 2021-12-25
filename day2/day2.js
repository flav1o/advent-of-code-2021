const fs = require('fs')

let horizontal = 0;
let depth = 0;


const lines = fs
    .readFileSync("day2-input.txt", { encoding: 'utf-8' })
    .split('\n')
    .map((x) => {
        const [direction, n] = x.split(' ');
        return { direction, n: +n }
    })

for(let i = 0; i < lines.length; i++) {
    if(lines[i].direction == 'forward') horizontal += lines[i].n;
    if(lines[i].direction == 'down') depth += lines[i].n;
    if(lines[i].direction == 'up') depth -= lines[i].n;
}
console
console.log(depth * horizontal);