// function that will be called when the user clicks the button
// the function will display and alert window with the text "Hello, " and the name entered by the user
function greeting(name) {
  console.log(`Hello, ${name}`);
}

// function that will be called when the user clicks the button
// the function will display a prompt window with the text "Please enter your name."
// the function will call the function greeting and pass the name entered by the user as an argument
function processUserInput(callback) {
  const name = console.log("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
