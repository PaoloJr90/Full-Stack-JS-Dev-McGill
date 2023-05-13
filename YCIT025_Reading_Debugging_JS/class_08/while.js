let counter = 0;
let flag = true;

//while loop will execute the code block as long as the condition is true
while (flag) {
    console.log('counter=', counter);
    counter++;
    if (counter > 1000) {
        flag = false;
    }
}

// do while loop will execute the code block at least once, and then it will check the condition
counter = 0;
do {
    console.log('counter1=', counter);
    counter++;
    if (counter > 1000) {
        flag = false;
    }
}
while (flag)