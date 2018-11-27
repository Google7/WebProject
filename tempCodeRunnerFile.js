function demo(c,d){
    console.log(this.a+this.b+c+d);
}
var obj = {
    a : 3,
    b : 4
}
demo.call(obj,1,2);
demo.apply(obj,[5,6]);

var obj = {
    user : "jian",
    fun : function(){
        console.log(this.user);
    }
}
obj.fun();

function aa(){
    this.user = "qichen";
}
var a = new aa();
console.log(a.user);

var fun = function(){
    console.log(fun.caller);
}
function bb(){
    fun();
}
bb();

var cc = function(x,y){
    console.log(arguments.length,arguments.callee.length,arguments.callee);
    console.log(x*y);
}
cc(1,2,3,4);

var dd = function(name,age){
    this.name = name,
    this.age = age
}
var obj = new dd("jian",23);
dd.prototype.ss = null;
obj.ss = 123;
console.log(obj.ss);

function ee(name,age){
    this.name = name,
    this.age = age
}
var obj = new ee("jian",23);
console.log(obj.constructor);