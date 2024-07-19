const odd = [3, 5, 7, 9, 11, 13, 17];

function missingOddNumber(param) {
  let start = param[0];
  let end = param.at(-1);
  let idx = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      if (param[idx] === i) {
        idx = idx + 1;
      } else {
        return i;
      }
    }
  }
  return 'No Missing NUmber';
}

function findNext(param) {
  let size = param.length;
  for (let i = 0; i < size - 1; i++) {
    if (param[i + 1] != param[i] + 2) {
      return param[i] + 2;
    }
  }
  return 'No Missing Number';
}

let result = findNext(odd);
console.log(result);
