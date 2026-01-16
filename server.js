const http = require("node:http");
const file = require("fs");
const url = require("url");
const replaceHtml = require("./modules/replace-html");

// creating a server
const htmlFile = file.readFileSync("./template/index.html", "utf-8");
const aboutHtml = file.readFileSync("./template/about.html", "utf-8");
const jsonData = JSON.parse(file.readFileSync("./data/product.json"));
let productListsHtml = file.readFileSync("./template/product.html", "utf-8");
const user = require("./modules/user");

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   console.log({ query });
//   if (pathname === "/secret") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end("the secret is you");
//   } else if (pathname === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end(aboutHtml);
//   } else if (pathname === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end(htmlFile);
//   } else if (pathname == "/products") {
//     res.writeHead(200, { "Content-type": "text/html" });

//     if (query.id) {
//       const product = jsonData.find((p) => p.id === parseInt(query.id));
//       if (product) {
//         const productPage = replaceHtml(productListsHtml, product);
//         return res.end(productPage);
//       }
//     }

//     let productHtmlArray = jsonData.map((prod) => {
//       return replaceHtml(productListsHtml, prod);
//     });

//     return res.end(
//       "<div style='display: flex; flex-wrap: wrap; gap: 20px; height: 100vh; padding: 20px;'>" +
//         productHtmlArray.join("") +
//         "</div>"
//     );
//   } else {
//     res.writeHead(404, "404: No page found");
//     return res.end("404: No page found");
//   }
// });
// starting a server

// server inherits from eventEmitter class

const server = http.createServer();

// server.on("request", (req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   console.log({ query });
//   if (pathname === "/secret") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end("the secret is you");
//   } else if (pathname === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end(aboutHtml);
//   } else if (pathname === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     return res.end(htmlFile);
//   } else if (pathname == "/products") {
//     res.writeHead(200, { "Content-type": "text/html" });

//     if (query.id) {
//       const product = jsonData.find((p) => p.id === parseInt(query.id));
//       if (product) {
//         const productPage = replaceHtml(productListsHtml, product);
//         return res.end(productPage);
//       }
//     }

//     let productHtmlArray = jsonData.map((prod) => {
//       return replaceHtml(productListsHtml, prod);
//     });

//     return res.end(
//       "<div style='display: flex; flex-wrap: wrap; gap: 20px; height: 100vh; padding: 20px;'>" +
//         productHtmlArray.join("") +
//         "</div>"
//     );
//   } else {
//     res.writeHead(404, "404: No page found");
//     return res.end("404: No page found");
//   }
// });

server.listen(9000);

/* emitting and handling custom events */
// let myEmitter = new user();

// myEmitter.on("userCreated", (user) => {
//   console.log("New user created:", user);
// });

// myEmitter.emit("userCreated", {
//   id: 1,
//   name: "Kashish",
// });

/* emitting and handling custom events */

// server.on("request", (req, resp) => {
//   file.readFile("./files/large-file.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     resp.end(data);
//   });
// });

// server.on("request",d (req, res) => {
//   const rs = file.createReadStream("./files/large-file.txt");

//   rs.on("data", (chunk) => {
//     res.write(chunk);
//   });

//   rs.on("end", () => {
//     res.end();
//   });

//   rs.on("error", (err) => {
//     res.statusCode = 500;
//     res.end("Error reading file");
//   });
// });

//backpre
