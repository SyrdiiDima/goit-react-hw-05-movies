

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [pathBack] = useState(location.state?.from ?? '/');

  const { title, poster_path, popularity, overview, genres } = movie;
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
      <hr />
      <h3>Aditional information</h3>
      <li key={1}>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li key={2}>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {

      title: PropTypes.string,
      popularity: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.string,
      poster_path: PropTypes.string,
  
};
