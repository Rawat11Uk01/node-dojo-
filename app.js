// import { calculateSum } from "./sum.js";

require("./hello.js");
const { calculateSum } = require("./calculate");
const { multiply } = require("./calculate");

let a = 5;
let b = 6;
console.log(this);
console.log(calculateSum(a, b));
console.log(multiply(a, b));
