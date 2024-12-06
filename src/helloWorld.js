function log(a) {
    console.log(a);
}
var a = 'hello world';
log(a);
// var [identifier]: [type] = value;
// var [identifier]: [type];
// var [identifier]: value;
// any
// var [identifier];
var aa = ['TS', 'JS'];
var ab = ['TS', 'JS'];
var ac;
var ad = 10;
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["banana"] = 2] = "banana";
    fruit[fruit["mango"] = 3] = "mango";
    fruit[fruit["orange"] = 4] = "orange";
})(fruit || (fruit = {}));
var fruitname = fruit[2];
console.log(fruitname);
var ag;
// let vs var
function myFunc() {
    for (var i = 0; i >= 2; i++) {
        console.log('ya');
    }
    console.log('final value of is is', i);
}
myFunc();
var w = function (x, y) {
    return x * y;
};
console.log(w(4, 6));
var ex = function (a) { return console.log(a); };
// classes
var myClass = /** @class */ (function () {
    function myClass(k) {
        this.j = k;
    }
    myClass.prototype.value = function () {
        return 'the number is ' + this.j;
    };
    return myClass;
}());
var newClass = new myClass(4);
console.log(newClass.value());
var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log('interface ' + this.s + ' ' + this.t);
    };
    return A;
}());
var o = new A(1, 'hi');
console.log(o.myFunc());
