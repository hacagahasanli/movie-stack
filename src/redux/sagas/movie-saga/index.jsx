import { takeLatest, put, fork, call } from "redux-saga/effects"
import { fetchMovie, fetchMovies } from "../../../api"
import { getMovie, getMovies, setMovie, setMovies } from "../../feature/movie-slice"

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload
    const response = yield call(fetchMovies, movieName)
    const data = response?.data?.Search
    if (response.status === 200) yield put(setMovies(data))
  } catch (error) {
    console.log(error, "error")
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const movieId = payload
    const response = yield call(fetchMovie, movieId)
    if (response.status === 200) yield put(setMovie(response?.data))
  } catch (error) {
    console.log(error, "error",)
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies, onLoadMoviesAsync)
}

function* onLoadMovie() {
  yield takeLatest(getMovie, onLoadMovieAsync)
}

export const moviesSaga = [fork(onLoadMovies), fork(onLoadMovie)]
