import PropTypes from 'prop-types';

export const ReviewsInfo = ({reviews}) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h3>Auuthor {item.author}</h3>
                <p>{item.content}</p>
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



ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string.isRequired,
    })
  ),
};