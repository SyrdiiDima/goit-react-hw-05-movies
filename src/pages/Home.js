import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/fetch-api';
import { ListMovies } from 'components/ListMovies/ListMovies';

const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetchTrendMovies().then(setTrend);
  }, []);
  return <ListMovies movies={trend} />;
};
//
export default Home;
