Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  if (initialValue != undefined) {
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

Array.prototype.myMap = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(callback(this[i], i, this));
  }
  return array;
};

Array.prototype.myFilter = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};

const reduce = [1, 2, 3].myReduce((acc, prev, idx) => {
  return acc + prev;
}, 0);
// const addOne = [1, 2, 3].myMap((each, idx) => {
//   return (each + 1);
// });
const filter = [1, 2, 3].myFilter((each) => each < 3);
console.log(reduce);
