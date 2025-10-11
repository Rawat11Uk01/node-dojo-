// Modules protects their variable and functions from other modules or from leaking outside
// Every file in nodejs is treated as a module
// To export something from a module we use 'module.exports' object
// To import something from a module we use 'require' function

// In nodejs, 'this' keyword in a module points to 'module.exports' object

console.log(this); // empty object
function calculateSum(a, b) {
  return a + b;
}

module.exports = calculateSum;
