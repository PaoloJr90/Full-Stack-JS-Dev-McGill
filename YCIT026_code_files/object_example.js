function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

myFunc = () => {
  for (let key in circle) {
    if (typeof circle[key] !== "function") console.log(key, circle[key]);
  }
};

myFunc();
