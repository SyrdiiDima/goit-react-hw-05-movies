import { useEffect, useState } from 'react';
import { fetchMovieTrends } from 'services/fetch-api';
import { ListMovies } from 'components/ListMovies/ListMovies';

export const Home = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetchMovieTrends().then(setTrend);
  }, []);

  return <ListMovies movies={trend} />;
};
