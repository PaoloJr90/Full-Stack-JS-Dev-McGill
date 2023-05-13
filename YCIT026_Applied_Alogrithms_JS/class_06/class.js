// addTodoInMyExam   ==> camal case notation
// AddTodoInMyExam  ==>  PascalCase

class User {
  // The body of class
}

const UserClass = class {
  // The body of class
};

const userClassInstance = new UserClass();
console.log("userClassInstance", userClassInstance);

const user1 = new User();

console.log("user1", user1);
console.log("user1 instanceof User", user1 instanceof User);
console.log("user1 instanceof UserClass", user1 instanceof UserClass);
