import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListMovies = ({ movies }) => {
  const location = useLocation();
  let url = location.pathname !== '/movies' ? '/movies/' : '';
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`${url}${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};