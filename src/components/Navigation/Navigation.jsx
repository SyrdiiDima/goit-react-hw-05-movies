import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink
       
        to="/"
        // className={css.link}
        className={({ isActive }) =>
          `${css.link}` + (isActive ? ` ${css.activeLink}` : '')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        // className={css.link}
        className={({ isActive }) =>
          `${css.link}` + (isActive ? ` ${css.activeLink}` : '')
        }
      >
        Movies
      </NavLink>
      <hr />
    </nav>
  );
};


