'use strict';
function first() {
    // do something
    setTimeout(function(){ 
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("I learn: " + lang);
    callback();
}
function done() {
    console.log('I`ve passed this lesson');
}

learnJS("JavaScript", done);

/*learnJS("JavaScript", function() {
    console.log('I`ve passed this lesson');
});*/

const obj = new Object;
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border:'black',
        bg: 'red',
    },
    makeTest: function() {
       console.log("Test"); 
    }
};

const {border, bg} = options.colors;
console.log(border);

options.makeTest();

console.log(Object.keys(options));

/*console.log(options.colors.bg);
delete options.name;
options.sname = "www";
console.log(options);*/
let counter = 0;
for (let key in options) {
    if (typeof options[key] === "object") {
        for (let i in options[key]) {
            console.log(`Property ${i} is ${options[key][i]}`);
            counter++;
        }
    } else {
          console.log(`Property ${key} is ${options[key]}`);
          counter++;  
    }
}
console.log(counter);


