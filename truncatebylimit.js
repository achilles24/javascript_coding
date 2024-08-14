const title = 'Pasta with tomato and sauce';

function truncate(param, limit = 15) {
  let newTitle = [];
  let len = param.length;
  if (len >= limit) {
    param.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')}...`;
  }
  return param;
}

const result = truncate(title);
console.log(result);
