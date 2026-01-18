import express, { Request, Response } from "express";
import * as fs from "fs";
import { Movie } from "./types/movie";
import { NextFunction } from "express";
const morgan = require("morgan");

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

const movies: Movie[] = JSON.parse(
  fs.readFileSync("./data/movies.json", "utf-8"),
);

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

const getAllMovies = (req: Request, resp: Response) => {
  resp.status(200).json({
    status: "success",
    data: movies,
    requestedAt: req.requestedAt,
    count: movies.length,
  });
};

const addMovie = (req: Request, resp: Response) => {
  const newId = movies.length + 1;

  const newMovie = Object.assign({ id: newId }, req.body);
  movies.push(newMovie);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      resp.status(500).send("Something went wrong");
    }
    resp.status(201).send({
      status: "success",
      data: movies,
    });
  });
};

const getMovieById = (req: Request, resp: Response) => {
  const params = req.params;
  const movie = movies.find((m) => m.id == Number(params.id));
  if (!movie) {
    resp.status(404).json({
      status: "Failed",
      message: `Movie with id ${params.id} not found`,
    });
    return;
  }
  const respBody = {
    status: "success",
    body: movies.filter((m) => m.id == Number(params.id)),
  };
  return resp.status(200).json(respBody);
};

const updateMovie = (req: Request, resp: Response) => {
  const movieId = req.params.id;
  const body = req.body;
  const movieToUpdate = movies.find((m) => m.id == Number(movieId));

  if (!movieToUpdate) {
    resp.status(404).json({
      status: "Failed",
      message: `Movie with id ${movieId} not found`,
    });
    return;
  }
  // const movieIndex = movies.indexOf(movieToUpdate)
  const updatedMovie = { ...movieToUpdate, ...body };

  fs.writeFile(
    "./data/movies.json",
    JSON.stringify([...movies.filter((m) => m.id !== +movieId), updatedMovie]),
    (err) => {
      if (err) {
        resp.status(500).send("Something went wrong");
      }
      resp.status(200).send({
        status: "success",
        data: updatedMovie,
      });
    },
  );
};

const deleteMovie = (req: Request, resp: Response) => {
  const movieId = req.params.id;

  if (!movieId) {
    resp.status(404).json({
      status: "Failed",
      message: `Movie with id ${movieId} not found`,
    });
    return;
  }

  fs.writeFile(
    "./data/movies.json",
    JSON.stringify(movies.filter((m) => m.id !== +movieId)),
    (err) => {
      if (err) {
        resp.status(500).send("Something went wrong");
      }
      resp.status(200).send({
        status: "success",
        message: "Movie deleted successfully",
      });
    },
  );
};

// route = http method + url + port
// app.get("/api/v1/movie", getAllMovies);
// app.post("/api/v1/movie", addMovie);
// app.get("/api/v1/movie/:id", getMovieById);
// app.patch("/api/v1/movie/:id", updateMovie);
// app.delete("/api/v1/movie/:id", deleteMovie);

const moviesRoute = express.Router();

moviesRoute.route("/").get(getAllMovies).post(addMovie);
moviesRoute
  .route("/:id")
  .get(getMovieById)
  .patch(updateMovie)
  .delete(deleteMovie);

app.use("/api/v1/movie", moviesRoute);

// create a server
app.listen(3000, () => {
  console.log("server has started");
});
