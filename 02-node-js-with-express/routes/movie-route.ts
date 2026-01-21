const express = require("express");

const {
  getAllMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  checkMovie,
  validateMovieBody,
} = require("../controller/movie-controller");

const router = express.Router();

router.param("id", checkMovie);

router.route("/").get(getAllMovies).post(validateMovieBody, addMovie);
router.route("/:id").get(getMovieById).patch(updateMovie).delete(deleteMovie);

module.exports = { moviesRoute: router };
