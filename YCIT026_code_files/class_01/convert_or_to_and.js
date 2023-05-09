// !(!bcondition1) || !(bcondition2))

const boolean1 = true;
const boolean2 = true;

if (boolean1 || boolean2) {
  // same as (true || true) = true
  console.log("Solution1 True");
  // prints "Solution1 True"
  // if statement was looking for a true condition
}

if (!(!boolean1 && !boolean2)) {
  // same as (!(!true && !true))
  // then it becomes (!(!true && false))
  // then it becomes (!(false && false))
  // then it becomes (!(false))
  // then it becomes (true)
  console.log("Solution2 True");
  // prints "Solution2 True"
  // if statement was looking for a true condition
}
