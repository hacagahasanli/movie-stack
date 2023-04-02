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
      <StyledCard>
        <StyledLink to={`/movie/${imdbID}`}>
          <CardMedia
            component='img'
            height='350px'
            image={poster}
            alt={Title}
          />
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
      </StyledCard>
    </Grid>
  );
};

const StyledCard = styled(Card)`
  min-width: 350px;
  max-width: 450px;
  background: #ebebeb;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
