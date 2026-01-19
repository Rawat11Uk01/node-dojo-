import express, { Request, Response } from "express";

import { NextFunction } from "express";
const morgan = require("morgan");
const moviesRoute = require("./routes/movie-route");
// Extend Request interface to include custom properties
declare global {
  namespace Express {
    interface Request {
      requestedAt?: string;
    }
  }
}

//this middleware add req body to req obj
const app = express();

const logger = function (_: Request, resp: Response, next: NextFunction) {
  console.log("i am being called");
  next();
};

app.use(express.json());
app.use(morgan("dev"));
app.use(logger);
app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestedAt = new Date().toISOString();
  next();
});

// route = http method + url + port
// app.get("/api/v1/movie", getAllMovies);
// app.post("/api/v1/movie", addMovie);
// app.get("/api/v1/movie/:id", getMovieById);
// app.patch("/api/v1/movie/:id", updateMovie);
// app.delete("/api/v1/movie/:id", deleteMovie);

app.use("/api/v1/movie", moviesRoute);

// create a server
// app.listen(3000, () => {
//   console.log("server has started");
// });

module.exports = app;
