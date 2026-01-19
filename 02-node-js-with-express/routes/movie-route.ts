const express = require("express");

const {
  getAllMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controller/movie-controller");

const moviesRoute = express.Router();
moviesRoute.route("/").get(getAllMovies).post(addMovie);
moviesRoute
  .route("/:id")
  .get(getMovieById)
  .patch(updateMovie)
  .delete(deleteMovie);

module.exports = moviesRoute;
