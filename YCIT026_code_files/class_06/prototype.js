// String.prototype.limit = function (length) {
//     return this.length > length ? this.substring(0, length) + "..." : this;
// }
Object.prototype.limit = function (length) {
  if (typeof this == "object") {
    return this.slice(0, length);
  }
  return this.length > length ? this.substring(0, length) + "..." : this;
};
Array.prototype.length2 = 1;
Object.prototype.length2 = 5;
Object.prototype.showPassword = () => {
  console.log("here is my password");
};

console.log(String);

var str = "JavaScript is often described as a prototype-based language";

const abcd = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(str);
console.log(str.limit(5));

console.log(String instanceof Object);

console.log(abcd.limit(2));
console.log(abcd.length2);

const var2 = 11;
console.log(var2);
var2.showPassword();

console.log(new Number(1));
