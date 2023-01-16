"use strict;"

const arr = [11, 20, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}
//arr.pop();
arr.push(10);

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}*/
//arr[99] = 0;
//console.log(arr[88]);
//console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} in array ${arr}`);
});

const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));