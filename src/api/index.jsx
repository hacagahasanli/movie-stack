import axios from "axios";

const apiKey = "e7ebf3a9";

const axiosInstance = axios.create({
  baseURL: "http://www.omdbapi.com"
})

// const baseURL = "http://www.omdbapi.com"
// http://www.omdbapi.com/?i=tt3896198&apikey=e7ebf3a9&s=santa
// const API_END_POINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

const models = {
  sameFuncModels: {
    firstRenderMovies: "firstRenderMovies",
    nextMovieSet: "nextMovieSet"
  },
  getDetailsByMovieId: "getDetailsByMovieId",
}

export const fetchMovies = async (movieName) => await axiosInstance.get(`/?i=tt3896198&apikey=${apiKey}&s=${movieName}`, {
  model: "firstRenderMovies"
});


export const fetchMovie = async (movieId) => await axiosInstance.get(`/?i=${movieId}&apikey=${apiKey}`, {
  model: "getDetailsByMovieId"
});

export const getNextMovieSet = async ({ movieName, page }) =>
  axiosInstance.get(`/?apikey=${apiKey}&s=${movieName}&page=${page}`, { model: "nextMovieSet" }, {
    model: 'nextMovieSet'
  })


axiosInstance.interceptors.response.use(
  response => {
    if (models?.sameFuncModels[response.config.model]) {
      if (response.status === 200) {
        const data = response?.data?.Search ?? response?.data
        return data
      }
    }
    return response
  },
  error => {
    console.error(`Error received for ${error.config.url}: ${error.message}`);
    return Promise.reject(error);
  }
);

// http://www.omdbapi.com/?apikey=${apiKey}&type=movie&r=json&plot=short&page=${Math.floor(Math.random() * 100) + 1}