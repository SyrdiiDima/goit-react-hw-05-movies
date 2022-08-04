import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { fetchMoviesByQuery } from 'services/fetch-api';
import Search from 'components/Search/Search';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const onSearchSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') return;
    fetchMoviesByQuery(query).then(setMovies);
  }, [query]);
  return (
    <>
      <Search onSubmit={onSearchSubmit} />
      <ListMovies movies={movies} />
    </>
  );
};

export default Movies;
