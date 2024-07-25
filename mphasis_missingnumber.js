let input = [1, 2, 3, 5, 7, 9];

let lastNumber = input.at(-1);
let output = [];
let idx = 0;
for (let i = 0; i < lastNumber; i++) {
  idx = idx + 1;
  if (input[i] !== idx) {
    output.push(idx);
    idx = idx + 1;
  }
  if (input[i] == lastNumber) {
    break;
  }
}
console.log(output);
