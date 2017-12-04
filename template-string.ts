var deafaultPerson = {
    name: 'vinay',
    id: '103224'
};

var person = {
    name: 'veena',
    id: '2113'
};

function welcome(obj = deafaultPerson) {
    // console.log("Hello " + obj.name + " your id is " + obj.id);
    console.log(`Hello ${obj.name}  your id is ${obj.id}`);
}

welcome();
welcome(person);

let val = 100;
if (true) {
    let val = 456;
    console.log("inside let:", val);
}
console.log("outside let:", val);

let a = [1, 2, 3];
let b = [2, 3];
let both = [0, ...a, ...b];
console.log(both);

function adder(base, ...number) {
    number.forEach(function (number) {
        console.log(base + number);
    });
}

adder(3, 5, 7, 1)