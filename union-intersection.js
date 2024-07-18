console.log("welcome");

let arr1 = [1,2,3,4,5];
let arr2 = [1,2,9,5,7];

function intersection (val1, val2) {
  return val1.filter(each => val2.includes(each));
}

function concatenate (val1, val2) {
  return [...val1, ...val2];
}

function union (val1, val2) {
  let response = val2.filter(each => !val1.includes(each));
  return [...val1, ...response]
}

function unique (val1, val2) {
  let res1 = new Set(val1);
  let res2 = new Set(val2);
  let uni1 = val2.filter(each => !res1.has(each));
  let uni2 = val1.filter(each => !res2.has(each));
  return [...uni1, ...uni2];
}

let response = intersection(arr1, arr2);
let response1 = concatenate(arr1, arr2);
let response2 = union(arr1, arr2);
let response3 = unique(arr1, arr2)

console.log(response);
console.log(response1);
console.log(response2);
console.log(response3);
