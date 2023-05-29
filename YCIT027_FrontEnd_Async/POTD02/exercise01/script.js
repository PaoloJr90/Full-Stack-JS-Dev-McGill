// Exercise 1: DOM
// Task 1 - select the h2 element with the text "Wonders from Antiquity"
const htmlElement = document.getElementsByTagName("h2")[0];
console.log(htmlElement.innerHTML);

// Task 2 - select the first h2 element; show the text of the element; show the number of h2 elements
const htmlElement2 = document.getElementsByTagName("h2");
console.log(htmlElement2[0].innerHTML);
console.log(htmlElement2.length);

// Task 3 - show all elements which belong to class "exists"
const existingElements = Array.from(document.getElementsByClassName("exists"));
existingElements.forEach((element) => {
  console.log(element.innerHTML);
});

// Task 4 - show element with the ID "new"
console.log(document.getElementById("new").innerHTML);

// Task 5 - show all <li> element of wonders that are both ancient and still exist
// console.log(document.getElementById("ancient").getElementsByClassName("exists").length);
const existsElements = document.getElementsByClassName("exists");
console.log(existsElements[0].innerHTML);

// Task 6 - use querySelectorAll() to display the count or length of the following:
// 1. all paragraphs
// 2. all paragraphs inside the "content" ID block
// 3. all elements with the "exists" class
// 4. all "ancient" wonders that still exist
// All paragraphs
console.log(document.querySelectorAll("p").length);
// All paragraphs inside the "content" ID block
console.log(document.querySelectorAll("#content p").length);
// All elements with the "exists" class
console.log(document.querySelectorAll(".exists").length);
// All "ancient" wonders that still exist
console.log(document.querySelectorAll("#ancient > .exists").length);

// Task 7 - get HTML content of the DOM element with ID "content"
console.log(document.getElementById("content").innerHTML);

// Task 8 - get textual content of the DOM element with ID "content"
console.log(document.getElementById("content").textContent);

// Task 9 - show href attribute of the first link
console.log(document.querySelector("a").getAttribute("href"));

// Task 10 - show ID attribute of the first list
console.log(document.querySelector("ul").id);
