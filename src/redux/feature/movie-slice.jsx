import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
  toManyResult: "",
  noMoreRelated: ""
}

const movieSlice = createSlice({
  name: "MovieReducer",
  initialState: {
    moviesList: [],
    movie: {},
    name: "santa",
    error: initialValue,
    page: 1
  },
  reducers: {
    getMovies: (name) => name,
    setMovies: (state, action) => {
      const { response, errorType } = action.payload;
      if (Array.isArray(response)) {
        state.moviesList = [...response]
        state.error = Object.assign({}, initialValue)
      }
      else state.error[errorType] = response?.Error
    },
    getMovie: (id) => id,
    setMovie: (state, action) => {
      const movie = action.payload;
      state.movie = movie;
    },
    getNextSetMovie: (searchTerms) => searchTerms,
    resetMovie: (state) => {
      state.movie = Object.assign({}, {})
    },
    setMovieName: (state, action) => {
      state.name = action.payload;
    },
  },
})

export const { getMovies, setMovies, getMovie, setMovie, resetMovie, getNextSetMovie, setMovieName } = movieSlice.actions

export const movieReducer = movieSlice.reducer
