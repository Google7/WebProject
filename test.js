var ss = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ],"name":"jian"}';
var obj = JSON.parse(ss);
console.log(typeof (obj));
console.log(obj)