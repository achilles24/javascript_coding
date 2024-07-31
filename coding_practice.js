// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let arr1 = [3, 5, 7, 9, 11, 13, 17];
let arr2 = [3, 5, 6, 1, 2]
console.log("Try programiz.pro");

function missingNumber(param) {
    let lastNumber = param.at(-1);
    let size = param.length;
    let i = 0;
    for (; i < size; i++) {
        if (param[i+1] !== (param[i] + 2)) {
            return param[i]+2;
        }
    }
    return 'No Missing Number'
}
// let result = missingNumber(arr);


function findIntersection (param1, param2) {
    let set1 = new Set(param1);
    let result = param2.filter(each => set1.has(each));
    return result;
    
}
// let answer = findIntersection(arr1, arr2)

function findUnion (param1, param2) {
    let set1 = new Set(param1);
    let result = param2.filter(each => !set1.has(each));
    return [...param1, ...result];
    
}
// let answer = findUnion(arr1, arr2)

// 0,1,1,2,3,5,8
// F(n) = F(n-1) + F(n-2)
function fibonocci (num) {
    let result = [0, 1];
    for (let i = 2; i < num; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

function recursionFibonocci (num) {
    if (num === 0) return 0;
    if (num === 1) return  1;
    return recursionFibonocci(num-1) + recursionFibonocci(num-2);
}
// let answer = recursionFibonocci(10)

function reverse (param) {
    let sample = undefined;
    if (typeof param === 'string') {
        sample = param.split(""); // Use Split if it string 
    } else {
        sample = param;
    }
    let left = 0;
    let right = sample.length-1;
    while (left < right) {
        let temp = sample[right];
        sample[right] = sample[left];
        sample[left] = temp;
        left++;
        right--;
    }
    if (typeof param === 'string') {
        return sample.join(""); // Use Join if it string else return sample
    } else {
        return sample;
    }
}
// let answer = reverse([{'a': 1}, {'b': 2}])


console.log(answer);
