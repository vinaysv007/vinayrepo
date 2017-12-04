var deafaultPerson = {
    name: 'vinay',
    id: '103224'
};
var person = {
    name: 'veena',
    id: '2113'
};
function welcome(obj) {
    if (obj === void 0) { obj = deafaultPerson; }
    // console.log("Hello " + obj.name + " your id is " + obj.id);
    console.log("Hello " + obj.name + "  your id is " + obj.id);
}
welcome();
welcome(person);
var val = 100;
if (true) {
    var val_1 = 456;
    console.log("inside let:", val_1);
}
console.log("outside let:", val);
var a = [1, 2, 3];
var b = [2, 3];
var both = [0].concat(a, b);
console.log(both);
function adder(base) {
    var number = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        number[_i - 1] = arguments[_i];
    }
    number.forEach(function (number) {
        console.log(base + number);
    });
}
adder(3, 5, 7, 1);
