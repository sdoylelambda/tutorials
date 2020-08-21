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

let aa: string[] = ['TS', 'JS'];
let ab: Array<string> = ['TS', 'JS'];

let ac: [number, string];

const ad = 10;

enum fruit {
  apple = 1,
  banana,
  mango,
  orange,
}

let fruitname: string = fruit[2];
console.log(fruitname);

let ag: Object;

// let vs var
function myFunc() {
  for (var i = 0; i >= 2; i++) {
    console.log('ya');
  }
  console.log('final value of is is', i);
}

myFunc();

let w = function (x, y) {
  return x * y;
};

console.log(w(4, 6));

let ex = (a) => console.log(a);

// classes
class myClass {
  // parameter decleration
  j: number;
  constructor(k: number) {
    this.j = k;
  }
  value() {
    return 'the number is ' + this.j;
  }
}

let newClass = new myClass(4);
console.log(newClass.value());

interface myInts {
  s: number;
  t: string;
  myFunc();
}

class A implements myInts {
  s: number;
  t: string;
  constructor(s: number, t: string) {
    this.s = s;
    this.t = t;
  }
  myFunc() {
    console.log('interface ' + this.s + ' ' + this.t);
  }
}

let o = new A(1, 'hi');
console.log(o.myFunc());
