import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieWithId } from 'services/fetch-api';
const Movie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieWithId(id).then(setMovie);
  }, [id]);
  return <MovieDetails movie={movie} />;
};

export default Movie;
