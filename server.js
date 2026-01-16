const http = require("node:http");
const file = require("fs");
const url = require("url");
const replaceHtml = require("./modules/replace-html");
// creating a server
const htmlFile = file.readFileSync("./template/index.html", "utf-8");
const aboutHtml = file.readFileSync("./template/about.html", "utf-8");
const jsonData = JSON.parse(file.readFileSync("./data/product.json"));
let productListsHtml = file.readFileSync("./template/product.html", "utf-8");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log({ query });
  if (pathname === "/secret") {
    res.writeHead(200, { "content-type": "text/html" });
    return res.end("the secret is you");
  } else if (pathname === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    return res.end(aboutHtml);
  } else if (pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    return res.end(htmlFile);
  } else if (pathname == "/products") {
    res.writeHead(200, { "Content-type": "text/html" });

    if (query.id) {
      const product = jsonData.find((p) => p.id === parseInt(query.id));
      if (product) {
        const productPage = replaceHtml(productListsHtml, product);
        return res.end(productPage);
      }
    }

    let productHtmlArray = jsonData.map((prod) => {
      return replaceHtml(productListsHtml, prod);
    });

    return res.end(
      "<div style='display: flex; flex-wrap: wrap; gap: 20px; height: 100vh; padding: 20px;'>" +
        productHtmlArray.join("") +
        "</div>"
    );
  } else {
    res.writeHead(404, "404: No page found");
    return res.end("404: No page found");
  }
});
// starting a server
server.listen(9000);
