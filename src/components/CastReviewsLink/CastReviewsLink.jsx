import { NavLink } from 'react-router-dom';

 const CastReviewsLink = () => {
  return (
    <>
      <ul>
        <li key={1}>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li key={2}>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </>
  );
 };

export default CastReviewsLink;