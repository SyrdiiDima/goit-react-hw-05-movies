// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'; // ES6

// const MovieDetails = ({ film }) => {
//   const location = useLocation();
//   const { title, poster_path, overview, genres, vote_average } = film;
//   const pathBack = useState(location.state?.from ?? '/');
//   const img = `https://image.tmdb.org/t/p/w500${poster_path}`;

//   return (
//     <>
//       <NavLink to={pathBack}>Go Back</NavLink>
//       <div>
//         <img src={img} alt={poster_path} />
//         <h1>{title}</h1>
//         <p>User state: {vote_average}</p>
//         <h2>Overview</h2>
//         <p>{overview}</p>
//         <h2>Genres</h2>
//         <p>{genres}</p>
//         <hr />
//         <p>Additional information</p>
//       </div>
//     </>
//   );
// };

// MovieDetails.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     poster_path: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(
//       PropTypes.shape({ name: PropTypes.string.isRequired })
//     ),
//     vote_average: PropTypes.number.isRequired,
//   }),
// };

// export default MovieDetails;
import { useState } from 'react';
// import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet,useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [backPath] = useState(location.state?.from ?? '/');

  const { title, poster_path, vote_average, overview, genres } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <NavLink to={backPath}>Go back</NavLink>
      <div>
        <img src={imgUrl} alt="" />
        <h1>{title}</h1>
        <p>User state: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <hr />
      <h3>Aditional information</h3>
      {/* <LinkList /> */}
      {/* <Outlet /> */}
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