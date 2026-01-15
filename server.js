const http = require("node:http");
const file = require("fs");
// creating a server
const htmlFile = file.readFileSync("./template/index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/secret") {
    return res.end("the secret is you");
  }
  return res.end(htmlFile);
});
// starting a server
server.listen(9000);
