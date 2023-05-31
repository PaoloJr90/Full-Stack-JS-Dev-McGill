const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];

function displayWord(word) {
  console.log(word);
}
  function filterByLength(array, callback) {
    const filteredArray = array.filter(word => word.length > 5);
    filteredArray.forEach(callback);
  }
  
  filterByLength(words, displayWord);