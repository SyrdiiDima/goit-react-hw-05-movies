import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListMovies } from 'components/ListMovies/ListMovies';
import { Search } from 'components/Search/Search';
import { fetchMoviesQuery } from 'services/fetch-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const onSearchSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') return;
    fetchMoviesQuery(query).then(setMovies);
  }, [query]);
  return (
    <>
      <Search onSubmit={onSearchSubmit} />
      <ListMovies movies={movies} />
    </>
  );
};

export default Movies;
