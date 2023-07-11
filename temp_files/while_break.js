let counter = 0;

while (counter <= 10) {
  counter++;
  console.log("in the loop");

  if (counter < 5) {
    continue;
  }

  console.log("out of the loop");
  break;
}
