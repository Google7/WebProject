var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greet(param) {
    return "Hello" + " " + param.firstName + param.lastName;
}
var user = new Student("jian", "qichen");
console.log(greet(user));
function info(_a) {
    var name = _a.name, age = _a.age;
    console.log(name + "*" + age);
}
var msg = {
    name: "jian",
    age: 23
};
info(msg);
function printLabel(labelObj) {
    console.log(labelObj.label + "*" + labelObj.size);
}
printLabel({ label: "labelStr", size: 10 });
function createSquare(config) {
    var newSquare = { color: "red", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
console.log(createSquare({ color: "red", width: 100 }));
var squareOption = { color: "green", width: 250 };
console.log(createSquare(squareOption));
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch("hello", "ll"));
var myArray;
myArray = ["one", "two"];
console.log(myArray[0]);
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (h, m) {
        this.currentTime = h + ":" + m;
    };
    Clock.prototype.getTime = function () {
        console.log(this.currentTime);
    };
    Clock.prototype.tick = function () { };
    return Clock;
}());
var DateClock = /** @class */ (function () {
    function DateClock(yy, mm) {
        this.currentTime = yy + " " + mm;
    }
    DateClock.prototype.setTime = function (yy, mm) {
        this.currentTime = yy + ":" + mm;
    };
    DateClock.prototype.getTime = function () {
        console.log(this.currentTime);
    };
    DateClock.prototype.tick = function () {
        console.log("DateClock");
    };
    return DateClock;
}());
function createClock(ctor, h, m) {
    return new ctor(h, m);
}
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var date = new Clock();
date.setTime(hours, minutes);
date.getTime();
var time = createClock(DateClock, new Date().getFullYear(), new Date().getMonth() + 1);
time.getTime();
time.tick();
var square = {};
square.color = "green";
square.sideLength = 250;
square.penWidth = 500;
function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var count = getCounter();
count(110);
count.reset();
count.interval = 456;
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        console.log("Snake");
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var sam = new Snake("jian");
sam.move(10);
var Persion = /** @class */ (function () {
    function Persion(name) {
        this.name = name;
    }
    return Persion;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getPrint = function () {
        return "Hello my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Persion));
var employee = new Employee("jian", "club");
employee.fullName = "JianQichen";
if (employee.fullName) {
    console.log(employee.fullName);
}
console.log(employee.getPrint());
var Message = /** @class */ (function () {
    function Message(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name + "*" + this.age);
    }
    return Message;
}());
new Message("jian", 23);
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistance = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid = new Grid(5);
console.log(grid.calculateDistance({ x: 10, y: 20 }));
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log(this.name);
    };
    return Department;
}());
var AccountDeparment = /** @class */ (function (_super) {
    __extends(AccountDeparment, _super);
    function AccountDeparment() {
        return _super.call(this, "AccountDeparment") || this;
    }
    AccountDeparment.prototype.printMeeting = function () {
        console.log("printMeeting");
    };
    return AccountDeparment;
}(Department));
var account = new AccountDeparment();
account.printMeeting();
account.printName();
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello" + " " + this.greeting;
        }
        else {
            return Greeter.staticGreeting;
        }
    };
    Greeter.staticGreeting = "Hello there";
    return Greeter;
}());
var greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.staticGreeting = "Hey there";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = { x: 1, y: 2, z: 3 };
console.log(point);
var deck = {
    suits: ["one", "two", "three", "four", "five"],
    cards: [1, 2, 3, 4, 5],
    createCard: function () {
        var _this = this;
        return function () {
            var pickedSuit = 2;
            var pickedCard = 3;
            return {
                suit: _this.suits[pickedSuit],
                card: _this.cards[pickedCard]
            };
        };
    }
};
var cardPicker = deck.createCard();
var pickedCard = cardPicker();
console.log(pickedCard.suit + " " + pickedCard.card);
