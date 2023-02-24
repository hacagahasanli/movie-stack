import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../../redux"
import styled, { keyframes } from "styled-components"

export const SearchInput = ({ type }) => {
    const dispatch = useDispatch()
    const [onChangeName, setOnChangeName] = useState("santa")
    const [onClickName, setOnClickName] = useState("santa")
    const { moviesList: { data } } = useSelector((state) => state.movie)

    const searchMovieHandler = () => dispatch(getMovies(onClickName))

    useEffect(() => {
        dispatch(getMovies(onChangeName))
    }, [onChangeName])

    return <>
        <Title>Search Fav Movie App</Title>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormElements>
                {type ? <Input
                    type="text"
                    fullWidth
                    value={onChangeName}
                    onChange={(e) => setOnChangeName(e.target.value)}
                /> :
                    <Input
                        type="text"
                        fullWidth
                        value={onClickName}
                        onChange={(e) => setOnClickName(e.target.value)}
                    />
                }
                <Button >
                    <ButtonTop onClick={searchMovieHandler}>Button</ButtonTop>
                </Button>
            </FormElements>
            {data?.Error && <p className={errorMessage}>{data.Error}</p>}
        </FormContainer>
    </>
}



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