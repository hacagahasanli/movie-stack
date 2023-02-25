import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { getNextSetMovie } from "../../redux/feature/movie-slice";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { NotFound } from "../NotFound";
import { noImage } from "../../assets";
import { v4 } from "uuid";

const Movies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const showPage = window.innerWidth > 768 ? "Page" : "";
  const { name } = useSelector((state) => state.movie);
  const { moviesList, error } = useSelector((state) => state.movie);

  const trail = useTrail(moviesList?.length, {
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
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
      sx={{ flexGrow: 1, position: "relative" }}
      justifyContent="center"
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
          <Grid container justifyContent="center">
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

const MovieItem = ({ movie }) => {
  const { imdbID, Poster, Title, Year } = movie;
  const poster = Poster.substring(0, 4) === "http" ? Poster : noImage;

  return (
    <Grid key={imdbID} container item style={{ padding: "1rem" }}>
      <Card sx={{ width: "350", background: "#EBEBEB" }}>
        <StyledLink to={`/movie/${imdbID}`}>
          <CardMedia component="img" height="350" image={poster} alt={Title} />
          <CardContent>
            <Typography
              style={{ fontWeight: 700, textDecoration: "none" }}
              variant="body2"
              color="RGB(26, 26, 26)"
            >
              {Title}
            </Typography>
            <Typography style={{ fontWeight: 700 }} color="text.primary">
              {Year}
            </Typography>
          </CardContent>
        </StyledLink>
      </Card>
    </Grid>
  );
};

export default Movies;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
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
    min-width: 80px;
    min-height: 80px;
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
  }
`;
const PrevMovie = styled(BottonStyle)`
  left: 1rem;
  @media screen and (max-width: 768px) {
    left: 0.84rem;
  }
`;
