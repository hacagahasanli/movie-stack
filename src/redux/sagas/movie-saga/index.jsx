import { takeLatest, put, fork, call } from "redux-saga/effects"
import { fetchMovie, fetchMovies, getNextMovieSet } from "../../../api"
import { getMovie, getMovies, setMovie, setMovies, getNextSetMovie } from "../../feature/movie-slice"

function* GetMoviesAsync({ payload }) {
  try {
    const movieName = payload
    const response = yield call(fetchMovies, movieName)
    const data = response?.data?.Search ?? response?.data
    if (response.status === 200) yield put(setMovies(data))
  } catch (error) {
    console.log(error, "error")
  }
}

function* GetMovieAsync({ payload }) {
  try {
    const movieId = payload
    const response = yield call(fetchMovie, movieId)
    if (response.status === 200) yield put(setMovie(response?.data))
  } catch (error) {
    console.log(error, "error",)
  }
}

function* GetNextSetMovieAsync({ payload }) {
  try {
    const movieTerm = payload
    const response = yield call(getNextMovieSet, movieTerm)
    const data = response?.data?.Search
    if (response.status === 200) yield put(setMovies(data))
  } catch (error) {
    console.log(error, "error",)
  }
}


function* GetNextSetMovie() {
  yield takeLatest(getNextSetMovie, GetNextSetMovieAsync)
}


function* GetMovies() {
  yield takeLatest(getMovies, GetMoviesAsync)
}

function* GetMovie() {
  yield takeLatest(getMovie, GetMovieAsync)
}

export const moviesSaga = [fork(GetMovies), fork(GetMovie), fork(GetNextSetMovie)]
