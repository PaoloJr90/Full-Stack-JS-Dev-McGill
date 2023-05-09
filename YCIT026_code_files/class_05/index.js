const buttonJJ = document.getElementById("submit");

const inputJJ = document.getElementById("hello_input");

inputJJ.addEventListener("keydown", (event) => {
  console.log("One key is pressed");
  console.log(event);
  console.log(event.target.value);
  //
});

// the code below is using fetch api to get data from a remote server.
// it contains nested callback functions. It is more difficult to read and understand.
// buttonJJ.addEventListener("click", () => {
//     const id = inputJJ.value;
//     const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
//     const result = fetch(baseUrl)
//         .then((result1) => {
//             return result1.json();
//         })
//         .then((result2) => {
//             const findIndex = result2.find((item)=> {return item.id == id});
//             const reultDom = document.getElementById('result');
//             reultDom.innerHTML = findIndex.title;
//             console.log(findIndex);
//             fetch(`${baseUrl}/${findIndex.id}`)
//                 .then((result) => result.json())
//                 .then((result2) => {
//                     const resultAllDom = document.getElementById('result_all');
//                     resultAllDom.innerHTML = JSON.stringify(result2);
//                 });
//         })
//     console.log(inputJJ.value);
//     console.log(result);
// });

// using async await. This is the same as the above code, but it is more readable.
buttonJJ.addEventListener("click", async () => {
  const id = inputJJ.value;
  const baseUrl = "https://jsonplaceholder.typicode.com/todos";
  const resultRaw = await fetch(baseUrl);
  console.log(resultRaw);
  const result = await resultRaw.json();
  console.log(result);
  const findIndex = result.find((item) => {
    return item.id == id;
  });
  const reultDom = document.getElementById("result");
  reultDom.innerHTML = findIndex.title;
  const resultRaw2 = await fetch(`${baseUrl}/${findIndex.id}`);
  const result22 = await resultRaw2.json();
  const resultAllDom = document.getElementById("result_all");
  resultAllDom.innerHTML = JSON.stringify(result22);
});
