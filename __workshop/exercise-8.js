// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that adds "Hello " to every element of an array of names
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greet(list) {
  let newArray;
  const helloString = 'Hello ';

  newArray = list.map(function(listItem){
    return helloString.concat(listItem); 
  });

  return newArray;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greet(["David", "Billy", "Lisa", "Jennifer"]));

// Create more test cases.
console.log(greet(["Mario", "Peach", "Link", "Yoshi"]));

// This is needed for automated testing (more on that later)
module.exports = greet;
