import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card, CardMedia, Grid, CardContent, Typography } from '@mui/material';
import { noImage } from '../../assets';

export const MovieItem = ({ movie }) => {
  const { imdbID, Poster, Title, Year } = movie;
  const poster = Poster.substring(0, 4) === 'http' ? Poster : noImage;

  return (
    <Grid key={imdbID} container item style={{ padding: '1rem' }}>
      <Card
        sx={{ minWidth: '350px', maxWidth: '450px', background: '#EBEBEB' }}
      >
        <StyledLink to={`/movie/${imdbID}`}>
          <CardMedia component='img' height='350' image={poster} alt={Title} />
          <CardContent>
            <Typography
              style={{ fontWeight: 700, textDecoration: 'none' }}
              variant='body2'
              color='RGB(26, 26, 26)'
            >
              {Title}
            </Typography>
            <Typography style={{ fontWeight: 700 }} color='text.primary'>
              {Year}
            </Typography>
          </CardContent>
        </StyledLink>
      </Card>
    </Grid>
  );
};

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
