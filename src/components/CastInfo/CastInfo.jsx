

import PropTypes from 'prop-types';
import css from './CastInfo.module.css'
export const CastInfo = ({ casts }) => {
  return (
    <ul>
      {casts.map(item => {
        const url = `https://image.tmdb.org/t/p/w200${item.profile_path}`;
        return (
        
          <li key={item.id} className={css.item}>
            {item.profile_path ? (
                <img src={url} alt={item.name} className={css.image}/>
            ) : (
              <p>{item.name}</p>
            )}

            <h2 >{item.name}</h2>
            
            <p>Character: {item.character}</p>
            <hr />
            </li>
          
          
        );
      })}
    </ul>
  );
};

CastInfo.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};