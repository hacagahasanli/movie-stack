import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../../redux';
import styled, { keyframes } from 'styled-components';
import { setMovieName } from '../../../redux/feature/movie-slice';
import { ErrorBoundary } from '../../ErrorBoundary';

const SearchInput = ({ type }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(
    sessionStorage.getItem('value') ?? 'santa'
  );

  const lStorage = (value) => sessionStorage.setItem('value', value);

  const movieFinder = (value) => {
    lStorage(value);
    dispatch(getMovies(value));
  };

  const searchMovieHandler = () => {
    if (!type) movieFinder(value);
  };

  const debounceHandler = (value) => {
    if (type) movieFinder(value);
  };

  useEffect(() => {
    dispatch(setMovieName(value));
    const timeoutId = setTimeout(() => debounceHandler(value), 400);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <ErrorBoundary>
      <Title>MovieStack</Title>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <FormElements>
          <Input
            type='text'
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button>
            <ButtonTop onClick={searchMovieHandler}>Button</ButtonTop>
          </Button>
        </FormElements>
      </FormContainer>
    </ErrorBoundary>
  );
};

export default React.memo(SearchInput);

const FormContainer = styled.form`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 358px) {
    min-width: 100%;
  }
`;
const Input = styled.input`
  font-family: -apple - system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans - serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: #fff;
  background-color: rgb(28, 28, 30);
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.93rem;
  min-width: 240px;
  max-width: 250px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(153, 208, 229, 0.186);
  }
  &:focus {
    box-shadow: 0 0 0 0.15vw rgba(153, 208, 229, 0.186);
  }

  @media screen and (max-width: 768px) {
    min-width: 180px;
    max-width: 200px;
    padding: 0.63rem;
  }
  @media screen and (max-width: 358px) {
    min-width: 100%;
    padding: 0.63rem;
    font-size: 0.8rem;
    min-width: 240px;
    max-width: 250px;
  }
`;
const FormElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 358px) {
    flex-direction: column;
  }
`;
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
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }
  @media screen and (max-width: 768px) {
    padding: 0.65em 1.1em;
    border-radius: 0.35em;
  }
`;
const Button = styled.button`
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: 0.75em;
  background: 0.75em;
  margin-left: 1rem;

  @media screen and (max-width: 358px) {
    width: 50%;
    margin-right: 1rem;
    padding: 0;
    font-size: 12px;
    border-radius: 0%;
    margin-top: 0.7rem;
  }
`;
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
`;
const Title = styled.h2`
  letter-spacing: 0.1rem;
  line-height: 1.25rem;
  margin-bottom: 0.15rem;
  font-size: 2rem;
  color: #c1c1c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-animation: ${trackingExpand} 2.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    alternate forwards;
  animation: ${trackingExpand} 2.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    alternate forwards;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    position: relative;
    top: 1rem;
  }
`;
