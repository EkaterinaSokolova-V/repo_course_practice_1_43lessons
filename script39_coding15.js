'use script;'
/*
// to string
// 1)
console.log(typeof(String(null)));
console.log(String(null));
//concatination
// 2)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To number
//1)
console.log(null);
console.log(Number(null));
console.log(Number('5'));

//2)
console.log(typeof(+ '4'));

//3)
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

let answer = + prompt('Hello');

//To boolean
//1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('5')));

//3)
console.log(typeof(!!'5'));
console.log(!!'5');
*/
//40
/*let number = 5; debugger
function logNumber() {
    //let number = 4; debugger
    console.log(number);
}
number = 6;
logNumber(); debugger

function createCounter() { debugger
    let counter = 0;
    const myFunction = function() {
    counter += 1; debugger
    return counter; debugger
    }
    return myFunction;
}
debugger
const increment = createCounter();
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);

{
    let m = "dfgdfg";
}
console.log(m);

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num); //error
}

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();

  const user = {
    name1: 'Alex',
    age: 25
}
const {name1, age} = user;
console.log(name1);
console.log(age+5);


function foo(a,b) {
    const [arr] = a;
    const {eng} = b;
    console.log(typeof eng);
    return `${arr[0]} ${eng}`;
}
 
const result = foo(['Привет', 'Hello'], { eng: 'World', ru: 'Мир'});
console.log(result);


//41. Задачи с собеседований на понимание основ
let x1 = 5; 
console.log( x1++ ); 
console.log( x1 ); 

console.log( [] + false - null + true ); 
console.log( typeof ([] + false - null +true) ); 

let y = 1; 
let x = y = 2; 
console.log(x); 

console.log([ ] + 1 + 2);
console.log(typeof([ ] + 1 + 2));

console.log( "1"[0] );

console.log( "" && 2 && 1 && null && 0 && undefined);
console.log( undefined && null );

let a = 1, b = 1;
console.log(!!( a && b ) === (a && b));
console.log(!!( a && b ) ); //true
console.log(a && b);        //1

console.log( null || 2 && 3 || 4 ); 

let a1 = [1, 2, 3], b1 = [1, 2, 3]; 
console.log(a1 == b1); //false

console.log(typeof(+"Infinity"));
//alert( +"Infinity" ); 

console.log("Ёжик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || falsе);
*/

//Coding Exercise 15
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

/*function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow)); */

/*function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[3], restorantData.menu[1], restorantData.averageLunchPrice));*/

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    //copy.waitors = [...data.waitors];
    copy.waitors = {name: 'Mike', age: 32};

    //copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);