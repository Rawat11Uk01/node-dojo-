// Modules protects their variable and functions from other modules or from leaking outside
// Every file in nodejs is treated as a module
// To export something from a module we use 'module.exports' object
// To import something from a module we use 'require' function

export function calculateSum(a, b) {
  return a + b;
}

// module.exports = calculateSum;
// Exporting as an object
// module.exports = { calculateSum };
