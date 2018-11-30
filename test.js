window.onload = function () {
    for (let i = 0; i < 100; i++) {
        var span = document.createElement("span");
        span.innerHTML = "O(∩_∩)O哈哈~";
        var p = document.createElement("p");
        var list = document.getElementById("list");
        list.append(span);
        list.append(p);
    }
};
var mywin = window.open("", "", "width=200,height=100,left=500,top=300");
mywin.document.write("哈哈哈");
mywin.focus();
mywin.close();

var ipt;
var n = 0;
var t;
var dt = new Date();

function hit() {
    var r = confirm("你是傻逼吗？");
    if (!r) {
        hit();
    }
}

function begin() {
    t = setInterval("add()", 100);
}

function add() {
    ipt = document.getElementById("num");
    ipt.setAttribute("value", new Date());
}

function end() {
    clearInterval(t);
}

function ddd() {
    document.getElementById("span").innerHTML = eee();
}

var eee = (function () {
    var count = 0;
    return function () {
        return count += 1;
    }
})();

function fun1() {
    var f = 1;

    function fun2() {
        //alert(f);
        f += 1;
    }
    return fun2;
}

var res = fun1();
res();

