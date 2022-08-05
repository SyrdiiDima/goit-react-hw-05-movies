

// import { useState } from 'react';
// // import { LinkList } from 'components/LinkList/LinkList';
// import { NavLink, Outlet,useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import CastReviewsLink from 'components/CastReviewsLink/CastReviewsLink';


//  const MovieDetails = ({ movie }) => {
//   const location = useLocation();
//   const [backPath] = useState(location.state?.from ?? '/');

//   // const { title, poster_path, popularity, overview, genres } = movie;
//   const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//   return (
//     <>
//     {/* <h1>Detail info for movie</h1> */}
//       <NavLink to={backPath}>Go back</NavLink>
//       <div>
//         <img src={url} alt={movie.title} />
//         <h1>{movie.title}</h1>
//         <p>User state: {movie.popularity}</p>
//         <h2>Overview</h2>
//         <p>{movie.overview}</p>
//         <h3>Genres</h3>
//         <p>{movie.genres}</p>
//       </div>
//       <hr />
//       <h3>Aditional information</h3>
//       <CastReviewsLink />
//       <Outlet /> 
//     </>
//   );
// };


// export default MovieDetails;

// MovieDetails.propTypes = {
//    movie: PropTypes.shape({
    
//       title: PropTypes.string,
//       popularity: PropTypes.number,
//       overview: PropTypes.string,
//       genres: PropTypes.string,
//       poster_path: PropTypes.string,
//     })
  
// }


import { useState } from 'react';
// import { LinkList } from 'components/LinkList/LinkList';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CastReviewsLink from 'components/CastReviewsLink/CastReviewsLink';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const [backPath] = useState(location.state?.from ?? '/');

  const { title, poster_path, popularity, overview, genres } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <NavLink to={backPath}>Go back</NavLink>
      <div>
        <img src={imgUrl} alt="" />
        <h1>{title}</h1>
        <p>Popularity: {popularity}</p>
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