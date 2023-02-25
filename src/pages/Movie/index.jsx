import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie, resetMovie } from "../../redux/feature/movie-slice";
import styles from "../../styles.module.css"
import noImage from "../../assets/images/noImage.jpg"
import styled from "styled-components";

export const Movie = () => {
  const dispatch = useDispatch()
  const { movie: { Poster, Title, Year, Plot, Director } } = useSelector((state) => state.movie)
  const { id } = useParams()
  const navigate = useNavigate()
  let image = noImage;

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id))
    }
  }, [id])

  if (Poster !== "N/A") {
    image = Poster
  }

  const goBackHandler = () => {
    navigate("/")
    dispatch(resetMovie())
  }

  return <section className={styles.section}>
    <>
      <div>
        <Image src={image} alt={Title} />
      </div>
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {Title}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h5">
          Year:{Year}
        </Typography>
        <Typography align="left" variant="body1" gutterBottom component="p">
          {Plot}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          Director: {Director}
        </Typography>
        <Button variant="contained" onClick={goBackHandler}>
          Go Back
        </Button>
      </div>
    </>
  </section>
};


const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`



export default Movie;
