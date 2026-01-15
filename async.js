// xyz.js

console.log("Hello world");

var a = 107;
var b = 20;

//synchronous
// Assuming 'fs' is a module that has been required elsewhere
// e.g., const fs = require('fs');

fs.readFileSync("./file.txt", "utf8"); //10ms
console.log("this will execute only after file read");

// Assuming 'Https' is a module that has been required elsewhere
// e.g., const Https = require('https');

Https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data success");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

//Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a + b; // Note: 'a' and 'b' are from the global scope of this module
  return result;
}
