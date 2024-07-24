// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let arr1 = [1,2,3,4,6];
let arr2 = [1,2,5,6,7];

let all = [1,2,3,4,1,6,3,9];

// let notUnique = [];
// let unique = [];
// for(let i=0; i<all.length; i++) {
//     if(!notUnique.includes(all[i])) {
//         notUnique.push(all[i]);
//     } else {
//         unique.push(all[i]);
//     }
// }
// Here we're using includes for each value so it becomes o(n^2)
// console.log(unique);

// let occurence = {};
// let duplicates = [];

// o(n) for checking occurrences
// for (let i = 0; i < all.length; i++) {
//     if (occurence[all[i]] === undefined) {
//         occurence[all[i]] = 1;
//     } else {
//         occurence[all[i]] += 1;
//     }
// }
// console.log(occurence);

// o(n) for checking count greater than 1
// for (let key in occurence) {
//     if (occurence[key] > 1) {
//         duplicates.push(key)
//     }
// }

// o(n)+o(n) => o(n+n) => o(n)
// console.log(duplicates)



// Union [1,2,3,4,5,6,7]
// let set1 = new Set(arr1);
// let filtered2 = arr2.filter(each => !set1.has(each));
// let union = [...arr1, ...filtered2];
// console.log(union)

// Intersection [1,2,6]
// let set2 = new Set(arr1);
// let intersection = arr2.filter(each => set2.has(each));
// console.log(intersection)

// if we use Array.prototype.includes then it'll end up with o(n^2) so we use HashMap
// let intersection = arr1.filter(each => arr2.includes(each));
// console.log(intersection);

// let arr1 = [1,2,3,4,6];
// let arr2 = [1,2,5,6,7];

let numberOccurrences = {};
let intersection = [];

// iterating to the array1 so, o(n)
for (let i = 0; i < arr1.length; i++) {
    if (numberOccurrences[arr1[i]] === undefined) {
        numberOccurrences[arr1[i]] = 1;
    } else {
        numberOccurrences[arr1[i]] += 1;
    }
}
// console.log(numberOccurrences);

// iterating to the array2 so, o(m)
for (let value of arr2) {
    if (numberOccurrences[value] > 0) {
        intersection.push(value);
    }
}
// so total o(n+m) it's efficient compared to using with Array.protype.includes
// console.log(intersection);

// let union = arr1.filter(each => !arr2.includes(each));
// console.log([...union, ...arr2]);
let union = [...arr1];

// Either do this for checking
// for (let value of arr2) {
//     if (numberOccurrences[value] === undefined) {
//         union.push(value);
//     }
// }

// or this using Set for uniqueness. both are 0(n+m)
// Add unique elements from arr2 to union
let unionSet = new Set(union); // Convert union to a Set for uniqueness
for (let num of arr2) {
    if (!unionSet.has(num)) {
        union.push(num);
    }
}
console.log(union);


let data = [
    {
        id: 1,
        name: 'prakash'
    },
    {
        id: 2,
        name: 'kumar'
    },
    {
        id: 3,
        name: 'achilles'
    },
];

// output: ['prakash', 'kumar', 'achilles']

let result = data.reduce((accumulator, value) => {
    accumulator.push(value.name); // don't directly return Array.protype.push because it return length of that array.
    return accumulator;
}, []);

console.log(result);
