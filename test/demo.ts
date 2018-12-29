class Student {
  fullName: string;
  constructor(public firstName, public lastName) {
    this.fullName = firstName + " " + lastName;
  }
}

interface IPersion {
  firstName: string;
  lastName: string;
}
function greet(param: IPersion) {
  return "Hello" + " " + param.firstName + param.lastName;
}
let user = new Student("jian", "qichen");
console.log(greet(user));

type C = { name: string; age: number };
function info({ name, age }: C): void {
  console.log(name + "*" + age);
}
var msg: any = {
  name: "jian",
  age: 23
};
info(msg);

interface ILabelValue {
  label: string;
  size: number;
}
function printLabel(labelObj: ILabelValue) {
  console.log(labelObj.label + "*" + labelObj.size);
}
printLabel({ label: "labelStr", size: 10 });

interface ISquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: ISquareConfig): { color: string; area: number } {
  let newSquare = { color: "red", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width;
  }
  return newSquare;
}
console.log(createSquare({ color: "red", width: 100 }));
let squareOption = { color: "green", width: 250 };
console.log(createSquare(squareOption as ISquareConfig));

interface ISearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: ISearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  if (result == -1) {
    return false;
  } else {
    return true;
  }
};
console.log(mySearch("hello", "ll"));

interface IStringArray {
  [index: number]: string;
}
let myArray: IStringArray;
myArray = ["one", "two"];
console.log(myArray[0]);

interface IClockInterface {
  [index: number]: any;
  currentTime: string;
  setTime(h: number, m: number);
  getTime();
  tick();
}

interface IClockConstructor {
  new (h: number, m: number): IClockInterface;
}

class Clock implements IClockInterface {
  constructor() {}
  currentTime: string;
  setTime(h: number, m: number) {
    this.currentTime = h + ":" + m;
  }
  getTime() {
    console.log(this.currentTime);
  }
  tick() {}
}

class DateClock implements IClockInterface {
  constructor(yy: number, mm: number) {
    this.currentTime = yy + " " + mm;
  }
  currentTime: string;
  setTime(yy: number, mm: number) {
    this.currentTime = yy + ":" + mm;
  }
  getTime() {
    console.log(this.currentTime);
  }
  tick() {
    console.log("DateClock");
  }
}

function createClock(
  ctor: IClockConstructor,
  h: number,
  m: number
): IClockInterface {
  return new ctor(h, m);
}

let hours: number = new Date().getHours();
let minutes: number = new Date().getMinutes();
let date = new Clock();
date.setTime(hours, minutes);
date.getTime();
let time = createClock(
  DateClock,
  new Date().getFullYear(),
  new Date().getMonth() + 1
);
time.getTime();
time.tick();

interface IShape {
  color: string;
}

interface IPenStroke {
  penWidth: number;
}

interface ISquare extends IShape, IPenStroke {
  sideLength: number;
}

let square = <ISquare>{};

square.color = "green";
square.sideLength = 250;
square.penWidth = 500;

interface ICounter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): ICounter {
  let counter = <ICounter>function(start: number) {
    console.log(start);
  };
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let count = getCounter();
count(110);
count.reset();
count.interval = 456;

class Control {
  public state: any;
}

interface ISelectControl extends Control {
  select(): void;
}

class Button extends Control {
  select() {}
}

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance) {
    console.log("Snake");
    super.move(distance);
  }
}

let sam: Animal = new Snake("jian");
sam.move(10);

class Persion {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Persion {
  private department: string;
  fullName: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getPrint() {
    return `Hello my name is ${this.name} and I work in ${this.department}`;
  }
}

let employee = new Employee("jian", "club");
employee.fullName = "JianQichen";
if (employee.fullName) {
  console.log(employee.fullName);
}
console.log(employee.getPrint());

class Message {
  readonly name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(this.name + "*" + this.age);
  }
}
new Message("jian", 23);

class Grid {
  constructor(public scale: number) {}
  static origin = { x: 0, y: 0 };
  calculateDistance(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

let grid = new Grid(5);
console.log(grid.calculateDistance({ x: 10, y: 20 }));

abstract class Department {
  constructor(public name: string) {}
  printName() {
    console.log(this.name);
  }
  abstract printMeeting(): void;
}

class AccountDeparment extends Department {
  constructor() {
    super("AccountDeparment");
  }
  printMeeting() {
    console.log("printMeeting");
  }
}

let account = new AccountDeparment();
account.printMeeting();
account.printName();

class Greeter {
  static staticGreeting = "Hello there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello" + " " + this.greeting;
    } else {
      return Greeter.staticGreeting;
    }
  }
}

let greeter1: Greeter = new Greeter();
console.log(greeter1.greet());
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.staticGreeting = "Hey there";
let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

class Point {
  x: number;
  y: number;
}

interface IPoint extends Point {
  z: number;
}

let point: IPoint = { x: 1, y: 2, z: 3 };
console.log(point);

interface ICard {
  suit: string;
  card: number;
}
interface IDeck {
  suits: string[];
  cards: number[];
  createCard(this: IDeck): () => ICard;
}

let deck: IDeck = {
  suits: ["one", "two", "three", "four", "five"],
  cards: [1, 2, 3, 4, 5],
  createCard: function(this: IDeck) {
    return () => {
      let pickedSuit = 2;
      let pickedCard = 3;
      return {
        suit: this.suits[pickedSuit],
        card: this.cards[pickedCard]
      };
    };
  }
};

let cardPicker = deck.createCard();
let pickedCard = cardPicker();
console.log(pickedCard.suit + " " + pickedCard.card);


