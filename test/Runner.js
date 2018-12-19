function obj(aa) {
    this.aa = aa;
    this.fun = function () {}
    var obj = new Object();
    obj.dd = "dd"
    return obj;
}
obj.bb = "bb";
obj.prototype.cc = "cc";
var o = new obj("aa");
console.log(o.dd);

function circle(r) {
    this.r = r;
}
circle.pi = 3.14;
circle.prototype.area = function () {
    return circle.pi;
}
var c = new circle(10);
console.log(c.area());

var circle2 = function () {
    var obj = new Object();
    obj.pi = 3.14;
    obj.area = function (r) {
        return this.pi * r;
    }
    return obj;
}
var c = new circle2();
console.log(c.area(2));

var circle3 = new Object();
circle3.pi = 3.14;
circle3.area = function (r) {
    return this.pi * r;
}
console.log(circle3.area(3));

var circle4 = {
    "pi": 3.14,
    "area": function (r) {
        return this.pi * r;
    }
}
console.log(circle4.area(4));

var circle5 = new Function("this.pi = 3.14,this.area = function(r){return this.pi * r}");
console.log(new circle5().area(5));

var dom = function () {}
dom.show = function () {
    console.log("show");
}
dom.prototype.display = function () {
    console.log("protype");
}
dom.show();
var d = new dom();
d.display();

var dom2 = function () {
    var obj = new Object();
    obj.name = "jian";
    this.sex = "boy";
    this.success = function () {
        console.log("success");
    }
    obj.fun = function () {
        console.log(this.name);
    }
    return obj;
}
var d = new dom2();
console.log(d.name);

var html = {
    name: "object",
    success: function () {
        this.say = function () {
            console.log("Hello");
        }
        console.log("World");
    }
}
html.success.prototype.show = function () {
    console.log("show");
}

var html2 = new Object();
html2.name = "object2";
html2.success = function () {
    this.say = function () {
        console.log("Hello2")
    }
    console.log("World2");
}
html2.success.prototype.show = function () {
    console.log("show2")
}

var ss = new html2.success();
console.log(html2.name);
ss.say();
html2.success();
ss.show();

var data = {
    table: [],
    tree: {}
};

(function (dm) {
    for (var i = 0; i < dm.table.rows; i++) {
        var row = dm.table.rows[i];
        for (var j = 0; j < row.cells; i++) {
            drawCell(i, j);
        }
    }
})(data);

var cacheBox = (function () {
    var cache = {};
    count = [];
    return {
        attr: function (id) {
            if (id in cache) {
                return cache[id];
            }
            var fdb = new uikit.webcrtl
        }
    }
})

var persion = function () {
    var name = "default";
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        }
    }
}();
console.log(persion.getName());
persion.setName("jian");
console.log(persion.getName());

function persion2() {
    var name = "default2";
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            return name = newName;
        }
    }
}
var p = new persion2();
p.setName("qichen");
console.log(p.getName());
var jian = function () {}
jian.prototype = new persion2();
jian.prototype.say = function () {
    console.log("jianqichen");
}
var j = new jian();
j.setName("jian");
j.say();
console.log(j.getName());