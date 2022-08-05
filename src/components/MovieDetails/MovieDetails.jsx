

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css'
import { HiChevronDoubleLeft } from "react-icons/hi";


export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [pathBack] = useState(location.state?.from ?? '/');

  const { title, poster_path, popularity, overview, genres } = movie;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <NavLink to={pathBack} className={css.go_back}>
        <HiChevronDoubleLeft size={15}/>Go back 
      </NavLink>
      <div className={css.info_block}>
        <img src={url} alt={title} className={css.image} />
        
        <div>
        <h1 className={css.title}>{title}</h1>
        <p className={css.user_score}>User score: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
        </div>
        </div>
      <hr />
      <h3 className={css.add_info}>Aditional information</h3>
      <li key={1} className={css.liItem}>
          <NavLink to={'cast'} className={css.cast_item} >Cast</NavLink>
        </li>
        <li key={2} className={css.liItem}>
          <NavLink to={'reviews'} className={css.cast_item}>Reviews</NavLink>
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
