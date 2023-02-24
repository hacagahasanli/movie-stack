import axios from "axios";

const apiKey = "e7ebf3a9";

const baseURL = "http://www.omdbapi.com"

const API_END_POINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

export const fetchMovies = async (movieName) =>
  axios.get(`${API_END_POINT}&s=${movieName}`);

export const fetchMovie = async (movieId) =>
  axios.get(`${baseURL}/?i=${movieId}&apikey=${apiKey}`);