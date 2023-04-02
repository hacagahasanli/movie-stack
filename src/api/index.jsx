import axios from 'axios';

const apiKey = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

const models = {
  sameFuncModels: {
    firstRenderMovies: 'firstRenderMovies',
    nextMovieSet: 'nextMovieSet',
  },
  getDetailsByMovieId: 'getDetailsByMovieId',
};

export const fetchMovies = async (movieName) =>
  await axiosInstance.get(`/?i=tt3896198&apikey=${apiKey}&s=${movieName}`, {
    model: 'firstRenderMovies',
  });

export const fetchMovie = async (movieId) =>
  await axiosInstance.get(`/?i=${movieId}&apikey=${apiKey}`, {
    model: 'getDetailsByMovieId',
  });

export const getNextMovieSet = async ({ movieName, page }) =>
  await axiosInstance.get(
    `/?apikey=${apiKey}&s=${movieName}&page=${page}`,
    { model: 'nextMovieSet' },
    {
      model: 'nextMovieSet',
    }
  );

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return new Error('Something went wrong!');
    if (models?.sameFuncModels[response.config.model]) {
      const data = response?.data?.Search ?? response?.data;
      return data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
