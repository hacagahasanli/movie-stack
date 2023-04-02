import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { getNextSetMovie } from '../../redux/feature/movie-slice';
import { Grid } from '@mui/material';
import { NotFound } from '../NotFound';
import { v4 } from 'uuid';
import { MovieItem } from '../MovieItem';

const Movies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const showPage = window.innerWidth > 768 ? 'Page' : '';
  const { name } = useSelector((state) => state.movie);
  const { moviesList, error } = useSelector((state) => state.movie);

  const trail = useTrail(moviesList?.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 35 },
    delay: 300,
  });

  useEffect(() => {
    setPage(1);
  }, [name]);

  useEffect(() => {
    dispatch(getNextSetMovie({ movieName: name, page: page }));
  }, [page]);

  return (
    <Grid
      sx={{ flexGrow: 1, position: 'relative' }}
      justifyContent='center'
      container
    >
      <NextMovie
        onClick={() => setPage(page + 1)}
      >{`Next ${showPage}`}</NextMovie>
      <PrevMovie
        onClick={() => page >= 2 && setPage(page - 1)}
      >{`Prev ${showPage}`}</PrevMovie>

      {error?.noMoreRelated ? (
        <NotFound error={error?.noMoreRelated} />
      ) : (
        <Grid item xs={9}>
          <Grid container justifyContent='center'>
            {trail?.map((style, index) => (
              <animated.div key={v4()} style={style}>
                <MovieItem
                  key={moviesList[index].Title}
                  movie={moviesList[index]}
                />
              </animated.div>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Movies;

const BottonStyle = styled.span`
  max-width: 10rem;
  padding: 0.46rem 1.5rem;
  border-radius: 0.4rem;
  color: white;
  border: 3px dashed black;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
  /* background:#e8e8e8; */
  cursor: pointer;
  z-index: 10;
  margin: auto;
  bottom: 2.2%;
  position: fixed;

  @media screen and (max-width: 768px) {
    padding: 0;
    min-width: 60px;
    min-height: 40px;
    font-size: 0.9rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 42%;
    margin-bottom: -0.5rem;
  }
`;
const NextMovie = styled(BottonStyle)`
  right: 1rem;
  @media screen and (max-width: 768px) {
    right: 1rem;
    bottom: 2rem;
  }
`;
const PrevMovie = styled(BottonStyle)`
  left: 1rem;
  @media screen and (max-width: 768px) {
    left: 0.84rem;
    bottom: 2rem;
  }
`;
