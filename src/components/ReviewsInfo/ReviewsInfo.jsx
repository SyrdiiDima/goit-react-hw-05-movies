import PropTypes from 'prop-types';

const ReviewsInfo = ({reviews}) => {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h3>Auutor {item.name}</h3>
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

export default ReviewsInfo;

ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
