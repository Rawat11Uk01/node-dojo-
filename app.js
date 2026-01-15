// // import { calculateSum } from "./sum.js";

// require("./hello.js");
// const { calculateSum } = require("./calculate");
// const { multiply } = require("./calculate");

// let a = 5;
// let b = 6;
// console.log(this);
// console.log(calculateSum(a, b));
// console.log(multiply(a, b));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your name", (answer) => {
  console.log("your name is", answer);
  rl.close();
});

rl.on("close", () => {
  console.log("interface closed");
  process.exit(0);
});
