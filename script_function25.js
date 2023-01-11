'use strict';
window.onload;
//prompt("hi!");
let num =20;
function showFirstMessage(text){
    console.log(text);
   let num =22;
   console.log(num);
}
showFirstMessage("hello");
console.log(num);

function calc(a, b) {
    return a * b;
}

console.log(calc(1, 3));


const logger = function() {
    console.log("hi");   
};
logger();


const calc1 = (a, b) => {
    return a + b;
};
console.log(calc1(1, 2));

const conv = (amount, constanta) => amount * constanta ;
console.log(conv(1, 2));

const usdCurr = 28;
const discount = 0.9;

const convert = (amount, curr) => curr*amount;
/*function convert(amount, curr) {
    //console.log(curr*amount);
    return curr*amount;
}*/

const promotion = result => console.log(result*discount);
/*function promotion (result){
    console.log(result*discount);
}*/
let n = convert(500, usdCurr);
promotion(n);

function sayHello(name) {
    return  `Привет, ${name}!`;
    }
console.log(sayHello("Антон"));

function returnNeighboringNumbers(number) {
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    return arr;
}
console.log(returnNeighboringNumbers(0));

function getMathResult(num1, num2) {
    let r = [];
    let str = num1;
    r[0] = num1;
   
    if (num2 <= 0 || typeof num2 !== "number") {
        str = num1;
    } else {
            for (let i = 1; i < num2; i ++){
            r[i] = r[i-1] + num1;
            str += "---" + r[i]; 
            }
    }

    return str;
}
console.log(getMathResult(3, 0));