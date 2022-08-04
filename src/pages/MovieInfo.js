import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieWithId } from 'services/fetch-api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMovieWithId(id).then(setMovie);
  }, [id]);
  return <MovieDetails movie={movie} />;
};

export default Movie;
