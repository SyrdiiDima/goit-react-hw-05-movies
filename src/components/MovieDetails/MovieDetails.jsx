

import { useState } from 'react';
// import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet,useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import CastReviewsLink from 'components/CastReviewsLink/CastReviewsLink';


export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [backPath] = useState(location.state?.from ?? '/');

  const { title, poster_path, popularity, overview, genres } = movie;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
    {/* <h1>Detail info for movie</h1> */}
      <NavLink to={backPath}>Go back</NavLink>
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
      <CastReviewsLink />
      <Outlet /> 
    </>
  );
};

MovieDetails.propTypes = {
   movie: PropTypes.shape({
    
      title: PropTypes.string,
      popularity: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.string,
      poster_path: PropTypes.string,
    })
  
}
