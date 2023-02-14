// create array that stores variable to loop through
const spinnerChar = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let timer = 0;

for (let char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, timer += 200)
}

// make prompt appear on the next line
setTimeout(() => {
  process.stdout.write('\n');
}, spinnerChar.length * 200)
