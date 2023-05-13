// !(!bcondition1) || !(bcondition2))

const boolean1 = true;
const boolean2 = false;

if (boolean1 && boolean2) {
  // this = (true && false) = false
  console.log("Solution1 True");
  // nothing gets printed since the condition is false
  // if statement was looking for a true condition
}

if (!(!boolean1 || !boolean2)) {
  // this = (!(!true || !false))
  // then it becomes (!(!true || true))
  // then is becomes (!(false || true))
  // then it becomes (!(true))
  // then it becomes (false)
  console.log("Solution2 True");
  // nothing gets printed since the condition is false
  // if statement was looking for a true condition
}
