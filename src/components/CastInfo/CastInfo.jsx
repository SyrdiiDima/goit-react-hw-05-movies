import PropTypes from 'prop-types';

const CastInfo = ({ casts }) => {
  return (
    <ul>
      {casts.map(item => {
        const url = `https://image.tmdb.org/t/p/w200${item.profile_path}`;
        return (
          <li key={item.id}>
            <h3>{item.name}</h3>
            {item.profile_path ? (
              <img src={url} alt={item.name}></img>
            ) : (
              <p>{item.name}</p>
            )}
            <p>Character{item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastInfo;

CastInfo.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
