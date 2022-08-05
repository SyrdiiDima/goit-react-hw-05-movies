import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/fetch-api';
import { ListMovies } from 'components/ListMovies/ListMovies';
export const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetchTrendMovies().then(setTrend);
  }, []);
  return <ListMovies movies={trend} />;
};
