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


function fun1() {
    var f = 1;

    function fun2() {
        document.getElementById("span").innerHTML = f;
        f += 1;
    }
    return fun2;
}

var res = fun1();

var bibi = function () {
    var count = 0;
    return function () {
        document.getElementById("span").innerHTML = count;
        count += 1;
    }
}();


function haha() {
    document.getElementById("span").innerHTML = new Date();
}

function zzz() {
    var t1 = document.createElement("span");
    var c1 = document.createTextNode("test1");
    t1.appendChild(c1);
    var qwe = document.getElementById("div");
    qwe.insertBefore(t1,qwe.childNodes[4]);
}
