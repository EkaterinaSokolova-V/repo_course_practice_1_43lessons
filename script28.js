'use strict';
const str = "fdTkdhfj";
//console.log (str.toUpperCase());
console.log (str.toLowerCase());
console.log (str);

let fruit = "Some fruit";
console.log (fruit.indexOf("11"));

const logg = "Hello world!";
console.log (logg.slice(-6,-1));
console.log (logg.substring(6, 11));
console.log (logg.substr(6, 5));

const num = 23.5;
console.log (Math.round(num));
const test = "12.2px 55";
console.log (parseInt(test));
console.log (parseFloat(test));

function calculateVolumeAndArea(l) {
    if (l < 0 || typeof l == "string" || !Number.isInteger(l)) {
        return "При вычислении произошла ошибка";
    } else {
        let s = 6*Math.pow(l,2);
        let v = Math.pow(l,3); 
        return `Объем куба: ${v} , площадь всей поверхности: ${s}`;
    }
 }    
 console.log(calculateVolumeAndArea(-11));

 function getCoupeNumber(seat) {
    if (Number.isInteger(seat) && seat <= 36 && seat >= 1) {
        return Math.floor(seat/4) + 1;
    } else if(seat > 36 || seat == 0) {
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
 }
console.log(getCoupeNumber(-33));

function getTimeFromMinutes(min) {
    let hText;
    if (min < 0 || !Number.isInteger(min) ) {
        return "Ошибка, проверьте данные";
    } else if (min >= 0 && min <= 600) {
        let h = Math.floor(min/60);
        let m = min - h*60;
        if (h == 1) {
            hText = "час";
        } else if (h >= 2 && h <= 4) {
            hText = "часа";
        } else {
            hText = "часов";
        }
        return `Это ${h} ${hText} и ${m} минут`;
    }
}
console.log(getTimeFromMinutes(50.5));

function findMaxNumber(a, b, c, d) {
    if( ( a != "undefined" && b != "undefined" && c != "undefined" && d != "undefined") && 
        ( typeof a == "number" && typeof b == "number" && typeof c == "number" && typeof d == "number" ) ) {
            return Math.max(a, b ,c, d);
    } else {
        return 0;
    }
}
console.log(findMaxNumber(10,0,6.4,20));

function fib(n) {
   let fib = [n];
   let str = "0 1";
   if (n === "" || n === 0 || typeof n !== "number" || !Number.isInteger(n) ) {return "";}
   else if (n == 1) {return "0";}
   else{
    fib[0] = 0;
    fib[1] = 1;
    for(let i = 1; i < n-1; i++) {
        fib[i+1] = fib[i] + fib[i-1];
        str += " " + fib[i+1];
    }
    return str;    
   }
}
console.log(fib(6));