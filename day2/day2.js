const fs = require('fs')

const lines = fs
    .readFileSync("day2-input.txt", { encoding: 'utf-8' })
    .split('\n')
    .map((x) => {
        const [direction, n] = x.split(' ');
        return { direction, n: +n }
    })

//############### PART 1 ############### 
{

let horizontal = 0;
let depth = 0;

for(let i = 0; i < lines.length; i++) {
    if(lines[i].direction == 'forward') horizontal += lines[i].n;
    if(lines[i].direction == 'down') depth += lines[i].n;
    if(lines[i].direction == 'up') depth -= lines[i].n;
}

console.log(depth * horizontal);
}

//############### PART 2 ############### 
{

    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    
    for(let i = 0; i < lines.length; i++) {
        if(lines[i].direction == 'forward') {
            horizontal += lines[i].n;
            depth += aim * lines[i].n;
        }

        if(lines[i].direction == 'down') {
            aim += lines[i].n;
        }
    
        if(lines[i].direction == 'up') {
            aim -= lines[i].n;
        }
    }
    
    console.log(depth * horizontal);
}