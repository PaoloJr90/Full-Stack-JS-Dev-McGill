var name = "David";

function getName() {
  console.log(name);
  console.log(name2);
  console.log(name3);
  console.log(this.name);
}
var name2 = "Paolo";
var name3;

const obj = {
  name: "John",
  print: getName,
};

obj.print();
