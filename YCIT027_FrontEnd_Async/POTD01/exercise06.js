// Password Checker
// RegEx in JS to check password strength

const isSafe = (password) => {
  // Check the length of the password
  if (password.length < 6) {
    return false;
  }

  // Check for at least one uppercase letter
  // .test is a method of the RegEx object that returns true if the string matches the RegEx
  // RegEx is defined between the forward slashes
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for at least one digit
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check for at least one special character
  if (!/[^0-9a-zA-Z]/.test(password)) {
    return false;
  }

  // could also put all RegEx in one line:
  // if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^0-9a-zA-Z]).{6,}$/.test(password))
  // ?= is a positive lookahead assertion
  // .* is any character 0 or more times
  // ^0-9a-zA-Z is any character that is not 0-9, a-z, or A-Z
  // .{6,} is any character 6 or more times

  // The password meets all the criteria
  return true;
};

// sample tests
const password1 = "StrongPassword123!";
console.log(isSafe(password1)); // true

const password2 = "weak";
console.log(isSafe(password2)); // false
