import express, { type Express } from "express";
const app: Express = express();

app.get("/", (req, res) => {
  res.end("hello world");
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
