import { useState } from 'react';
// import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [pathBack] = useState(location.state?.from ?? '/');

  const { title, genres, overview, popularity, poster_path } = movie;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <NavLink to={pathBack}>Go back</NavLink>
      <div>
        <img src={url} alt={title} />
        <h1>{title}</h1>
        <p>User state: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>

      <h3>Aditional information</h3>

      <li>
        <NavLink to={`cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </li>
      {/* { <Outlet /> } */}
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
