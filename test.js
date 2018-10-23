function demo(name, age) {
  this.name = name;
  this.age = age;
}
var ss = new demo("Hello", "World");
console.log(ss.name+ss.age)
