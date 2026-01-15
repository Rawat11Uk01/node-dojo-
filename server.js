const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/secret") {
    return res.end("the secret is you");
  }
  return res.end(`<h1 style={{border:1px solid red}}>hello world</h1>`);
});

server.listen(9000);
