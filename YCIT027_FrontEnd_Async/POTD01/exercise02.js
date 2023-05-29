// Library Management
// Type conversion

// librarian entered all data with type string
const id = "123";
const available = "true";
const count = "5";
const name = "Sherlock Holmes";
const author = "Arthur Conan Doyle";

// convert data to the correct types using type conversion
const ans = {
  id: Number(id),
  available: Boolean(available),
  count: Number(count),
  name: String(name),
  author: String(author),
};

//console.log(typeof ans);
console.log(typeof ans.id);
console.log(typeof ans.available);
console.log(typeof ans.count);
console.log(typeof ans.name);
console.log(typeof ans.author);
