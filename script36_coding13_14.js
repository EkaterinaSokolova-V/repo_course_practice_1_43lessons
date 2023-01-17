'use strict;'

let str = "some";
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strObj);

console.dir([1,2,3]);
console.dir(1);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);
/*const jonh = {
    health: 100
};*/
//jonh.__proto__ = soldier;

//Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();
console.log(jonh);


//Coding Exercise 13
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

//console.log(shoppingMallData.shops[0].width);

console.log(isBudgetEnough(shoppingMallData));

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
/*function isBudgetEnough(data) {
    let square = [], volume = [];
    let moneyPerAll, sumVolumes = 0;
    for (let i in data.shops) {
        square[i] = data.shops[i].width * data.shops[i].length;
        volume[i] = square[i] * data.height;
        sumVolumes += volume[i];
    }
    moneyPerAll = sumVolumes * data.moneyPer1m3;
    console.log(moneyPerAll);
    if (moneyPerAll <= data.budget) {
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }
}*/

//Coding Exercise 14
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'someone'];
console.log(sortStudentsByGroups(students));
function sortStudentsByGroups(arr) {
    let arrGroup = [];
    arr.sort(); 
    for ( let i = 0 ; i <= arr.length - arr.length%3 ; i++ ) { 
        arrGroup.push(arr.splice(0, 3));
    }
    arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);
    return arrGroup;
    }