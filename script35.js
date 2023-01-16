'use strict;'

let a = 5,
    b = a;

b += 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copyFun(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 8
    }
};
const newNumbers = copyFun(numbers);
newNumbers.a = 33;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    i: 88
};

//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 222;
console.log(add);
console.log(clone);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[2] = "ggg";
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['1', '2', '3'],
      internet = [...video, ...blogs, 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 4, 7];
log(...num);

const array = ['w', '6'];
const nArr = [...array];
const g = {
    one: 1,
    two: 2
};
const nObj = {...g};
console.log(nObj);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },       
    showAgeAndLangs: function(plan) {
        let str = `Мне ${plan.age} и я владею языками:`;
        for (let key in plan.skills.languages) {
            str += " " + plan.skills.languages[key].toUpperCase();
        }
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//console.log(personalPlanPeter);

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}
//console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    let {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}
//console.log(showProgrammingLangs(personalPlanPeter));
const family = ['Peter', 'Ann', 'Alex', 'Linda'],
      f = [];

function showFamily(arr) {
    if (arr.length === 0) {return 'Семья пуста';}
    else {return `Семья состоит из: ${arr.join(" ")}`;}
}    
console.log(showFamily(f));


const favoriteCities = [' ', 'liSBon', 'ROME', 'miLan', 'Dublin'];

/*function standardizeStrings(arr) {
   return arr.join('\n').toLowerCase().trim(); 
}*/
function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string This is some strange string';
function reverse(str) {
    let newStr = '';
    if (typeof str == 'string') {
        newStr = str.split("").reverse().join("");
        /*for(let i = 1; i <= str.length; i++){
            newStr += str[str.length - i];
        }*/
        return newStr;
    } else { return  "Ошибка!";}
}
console.log(reverse(someString));
//console.log(reverse(2));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');