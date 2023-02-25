import styled from "styled-components";
import React, { useEffect } from "react";
import styles from "../../styles.module.css"
import { ErrorBoundary } from "../../components";
import { Button, Typography } from "@mui/material";
import noImage from "../../assets/images/noImage.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie, resetMovie } from "../../redux/feature/movie-slice";

const customColor = "rgb(229, 9, 20)";
export const Movie = () => {
  const dispatch = useDispatch()
  const { movie } = useSelector((state) => state.movie)
  const { id } = useParams()
  const navigate = useNavigate()

  const { Poster, Title, Year, Plot, Director, Released, Actors, Writer, Ratings } = movie
  let image = noImage;
  let rating = null;

  const buttonStyle = {
    background: customColor,
    color: "#cfcccc",
    position: "absolute",
    bottom: "0.35rem",
    padding: "0.6rem 1.5rem",
    fontWeight: 600,
    position: "absolute",
    right: 0,
  }

  if (Array.isArray(Ratings)) rating = Ratings[0].Value;

  useEffect(() => {
    if (id) dispatch(getMovie(id))
  }, [id])

  if (Poster !== "N/A") image = Poster

  const goBackHandler = () => {
    navigate("/")
    dispatch(resetMovie())
  }

  const movieDetails = [
    {
      value: Title,
      variant: "h3",
      component: "h3",
      id: "title",
      color: customColor
    },
    {
      value: `${Year}`,
      variant: "h5",
      component: "h5",
      id: "year"
    },
    {
      value: `Released:${Released}`,
      variant: "body2",
      component: "p",
      id: "released"
    },
    {
      value: Plot,
      variant: "body1",
      component: "p",
      id: "plot"
    },
    {
      value: `Actors : ${Actors}`,
      variant: "h6",
      component: "h6",
      id: "actors"
    },
    {
      value: `Director : ${Director}`,
      variant: "h6",
      component: "h6",
      id: "director"
    },
    {
      value: rating,
      variant: "h6",
      component: "h6",
      id: "rating"
    },
  ]

  return (
    <ErrorBoundary>
      <section className={styles.section}>
        {
          Object.keys(movie).length !== 0 ?
            <>
              <div>
                <Image src={image} alt={Title} />
              </div>
              <div>
                {movieDetails?.map(({ value, variant, component, id, color = "#c0c0c0" }) =>
                  <Typography key={id} align="left" gutterBottom {...{ variant, component, color }} >
                    {value}
                  </Typography>
                )}
              </div>
              <Button style={buttonStyle} onClick={goBackHandler}>
                Go Back
              </Button>
            </>
            :
            <Loading>
              <span>Loading...</span>
            </Loading>
        }
      </section>
    </ErrorBoundary >
  )
};

const Loading = styled.div`
  width: 100%;
  min-height: 400px;
  color:#c0c0c0;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`
export default Movie;
