import React, { useEffect } from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTrail, animated } from 'react-spring';
import noImage from "../../assets/images/noImage.jpg"


const Movies = () => {
  const { moviesList } = useSelector((state) => state.movie)

  const trail = useTrail(moviesList?.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 35 },
    delay: 200,
  });

  return <Grid sx={{ flexGrow: 1 }} justifyContent="center" container>
    <Grid item xs={9}>
      <Grid container justifyContent="center">
        {trail?.map((style, index) =>
          <animated.div key={moviesList[index].id} style={style}>
            <MovieItem key={moviesList[index].Title} movie={moviesList[index]} />
          </animated.div>
        )}
      </Grid>
    </Grid>
  </Grid>
}

const MovieItem = ({ movie }) => {
  const { imdbID, Poster, Title, Year } = movie
  const poster = Poster.substring(0, 4) === "http" ? Poster : noImage
  return <Grid key={imdbID} container item style={{ padding: "1rem" }}>
    <Card sx={{ width: "350", background: "#EBEBEB" }}>
      <Link to={`/movie/${imdbID}`}>
        <CardMedia component="img" height="350" image={poster} alt={Title} />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography style={{ fontWeight: 700 }} variant="body2" color="RGB(26, 26, 26)">{Title}</Typography>
          <Typography style={{ fontWeight: 700 }} color="text.primary">{Year}</Typography>
        </CardContent>
      </Link>
    </Card>
  </Grid >
}

export default Movies


// useEffect(() => {
  // fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${category}&api_key=${apiKey}&format=json`)
  //   .then(response => response.json())
  //   .then(data => {
  //     const tracks = data.tracks.track;
  //     // Do something with the tracks
  //   })
  //   .catch(error => console.error(error));
  // http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&limit=${limit}&format=json
//   fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&limit=${limit}&format=json`)
//     .then(response => response.json())
//     .then(data => {
//       const tracks = data.results.trackmatches.track;
//       console.log(tracks, "TRACKS");
//       // Do something with the tracks
//     })
//     .catch(error => console.error(error));
// }, [])

// const apiKey = '66a6ed0c5bed492cdb27050deddffbad';
// const query = 'despacito';
// const limit = 10;\

// function handleLoadMore() {
//   // Make the API request to retrieve the next 5 tracks
//   axios.get('http://ws.audioscrobbler.com/2.0/', {
//     params: {
//       method: 'chart.gettoptracks',
//       api_key: 'YOUR_API_KEY',
//       format: 'json',
//       limit: 5,
//       page: 2
//     }
//   })
//     .then(response => {
//       const data = response.data.tracks.track;
//       setTracks(prevTracks => [...prevTracks, ...data]);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }