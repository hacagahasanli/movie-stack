import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../../redux"
import styled, { keyframes } from "styled-components"
import { setMovieName } from "../../../redux/feature/movie-slice"

export const SearchInput = ({ type }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const ref = useRef()
    // let timeoutId = null;
    const { moviesList: { data } } = useSelector((state) => state.movie)

    const searchMovieHandler = () => !type && dispatch(getMovies(ref.current.value))

    const handler = (value) => type && dispatch(getMovies(value))

    useEffect(() => {
        dispatch(setMovieName(value))
        const timeoutId = setTimeout(() => handler(value), 450)

        return () => clearTimeout(timeoutId)
    }, [value])

    useEffect(() => {
        dispatch(getMovies("santa"))
    }, [])

    return <>
        <Title>Search Fav Movie App</Title>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormElements>
                <Input
                    type="text"
                    fullWidth
                    // ref={ref}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button>
                    <ButtonTop onClick={searchMovieHandler}>Button</ButtonTop>
                </Button>
            </FormElements>
            {data?.Error && <p className={errorMessage}>{data.Error}</p>}
        </FormContainer>
    </>
}

// useEffect(() => {
//     fetch(`http://www.omdbapi.com/?apikey=${"e7ebf3a9"}&s=${"spider"}&page=${3}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
// }, [])

const FormContainer = styled.form`
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    font-family: -apple - system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans - serif;
    font-weight: 500;
    font-size: .8vw;
    color: #fff;
    background-color: rgb(28, 28, 30);
    box-shadow: 0 0 .4vw rgba(0, 0, 0, 0.5), 0 0 0 .15vw transparent;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    padding: 0.9vw;
    min-width: 240px;
    max-width: 250px;
    transition: .4s;

    &:hover {
        box-shadow: 0 0 0 .15vw rgba(153, 208, 229, 0.186);
    }
    &:focus {
        box-shadow: 0 0 0 .15vw rgba(153, 208, 229, 0.186);
    }
`
const FormElements = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonTop = styled.span`
    display: block;
    box-sizing: border-box;
    border: 2px solid #000000;
    border-radius: 0.55em;
    padding: 0.95em 1.5em;
    background: #e8e8e8;
    color: #000000;
    transition: transform 0.1s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
    }

`
const Button = styled.button`
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: 0.75em;
    background: 0.75em;
    margin-left: 1rem;
`
const trackingExpand = keyframes`
   0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`
const Title = styled.h2`
  letter-spacing: 0.1rem;
  line-height: 1.25rem;
  margin-bottom: 0.15rem;
  font-size: 2rem;
  color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
	-webkit-animation: ${trackingExpand} 2.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) alternate forwards;
	animation: ${trackingExpand} 2.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) alternate forwards;

`