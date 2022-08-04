import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/fetch-api';
import { ListMovies } from 'components/ListMovies/ListMovies';
import Search from 'components/Search/Search';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const onSubmitSearch = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (query === '') return;
    fetchMoviesByQuery(query).then(setMovies);
  }, [query]);
  return (
    <>
      <Search onSubmit={onSubmitSearch} />
      <ListMovies movies={movies} />
    </>
  );
};

export default Movies;
