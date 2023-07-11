let counter = 1;

while (true) {
  console.log("in the loop on iteration # " + counter);

  if (counter >= 10) {
    break;
  }

  counter++;
}

console.log("loop done");
