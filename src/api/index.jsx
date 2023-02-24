import axios from "axios";

const apiKey = "e7ebf3a9";

const baseURL = "http://www.omdbapi.com"

const API_END_POINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

export const fetchMovies = async (movieName) =>
  axios.get(`${API_END_POINT}&s=${movieName}`);

export const fetchMovie = async (movieId) =>
  axios.get(`${baseURL}/?i=${movieId}&apikey=${apiKey}`);

export const getNextMovieSet = async ({ movieName, page }) =>
  axios.get(`${baseURL}/?apikey=${apiKey}&s=${movieName}&page=${page}`)

// http://www.omdbapi.com/?apikey=${apiKey}&type=movie&r=json&plot=short&page=${Math.floor(Math.random() * 100) + 1}