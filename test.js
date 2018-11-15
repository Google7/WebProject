var str = "d5r44va8wet4vbad8aebadhtyui4564pjmbn666";

function findNum(str) {
    var tmp = "";
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var cur = str[i];
        if (!isNaN(cur)) {
            tmp += cur;
        } else {
            if (tmp) {
                arr.push(tmp);
                tmp = "";
            }
        }
    }
    if (tmp) {
        arr.push(tmp);
    }
    return arr;
}
var obj = findNum(str);
console.log(obj);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));