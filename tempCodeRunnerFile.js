function demo(c, d) {
    console.log(this.a + this.b + c + d);
}
var obj1 = {
    a: 3,
    b: 4
}
demo.call(obj1, 1, 2);
demo.apply(obj1, [5, 6]);

var obj2 = {
    user: "jian",
    fun: function () {
        console.log(this.user, this.fun);
    }
}
obj2.fun();

function aa() {
    this.user = "qichen";
}
var a = new aa();
console.log(a.user);

var fun = function () {
    console.log(fun.caller);
}

function bb() {
    fun();
}
bb();

var cc = function (x, y) {
    console.log(arguments, arguments.length, arguments.callee.length, arguments.callee);
    console.log(x * y);
    return x + y;
}
cc(2, 3, 4);
var dd = function (name, age) {
    this.name = name,
        this.age = age
}
var obj3 = new dd("jian", 23);
dd.prototype.ss = 123;
console.log(obj3.ss, obj3.name);

function ee(name) {
    this.name = name,
        this.age = 23
}
var obj4 = new ee("jian");
console.log(obj4.constructor.toString(), obj4.age);
var dd = '{ "employees" : [{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(dd);
console.log(dd, obj.employees[0].firstName);
var a = {
    x: 1
};

function aaa(a) {
    a.x++;
    console.log(a.x);
}
aaa(a);
console.log(a.x);

function test() {
    return this.firstName + this.lastName;
}
var demo = {
    firstName: "jian",
    lastName: "qichen",
    age: 23,
    fun: test
}
console.log(demo.fun());

function test2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var xx = new test2("aaa", "bbb");
console.log(xx);

function fun1() {
    var n = 1;
    add = function () {
        n += 1;
    }

    function fun2() {
        console.log(n);
    }
    return fun2;
}

var res = fun1();
res();
add();
res();

var object = {
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };
    }
};

console.log(object.getNameFunc()());

function abc(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
var asd = new abc("jian","qichen");
abc.prototype.age = 23;
console.log(asd.age);
console.log(abc.prototype);

var bibi = function () {
    var count = 1;
    return function () {
        console.log(count);
        return count += 1;
    }
}();
bibi();
bibi();
bibi();

function call1(callback){
    console.log("aaa");
    var a = 3;
    var b = 4;
    return callback(a,b);
}
function call2(a,b){
    console.log("bbb");
    return a * b;
}

var nn = call1(call2);
console.log(nn);

console.log(eval("5*5"));