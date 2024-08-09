let str1 = 'hello';
let str2 = 'world 123';

function mergeString(param1, param2) {
  let res = '';
  let i = 0;
  for (; i < param1.length && i < param2.length; i++) {
    res = res + param1[i] + param2[i];
  }
  // if (param1.length > i) {
  //   res = res + param1.substring(i, param1.length);
  // } else {
  //   res = res + param2.substring(i, param2.length);
  // }
  while (i < param1.length || i < param2.length) {
    if (i < param1.length) {
      res = res + param1[i];
    } else {
      res = res + param2[i];
    }
    i++;
  }
  return res;
}

let result = mergeString(str1, str2);
console.log(result);
