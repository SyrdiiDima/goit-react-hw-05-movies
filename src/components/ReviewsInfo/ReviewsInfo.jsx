

import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({id,author,content}) => {
            return (
              <li key={id}>
                <h2>Auuthor: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry we don't have any information about this</p>
      )}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};