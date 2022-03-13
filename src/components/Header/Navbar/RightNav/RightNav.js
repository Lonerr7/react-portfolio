import { NavLink } from 'react-router-dom';
import s from './RightNav.module.scss';

const RightNav = ({open}) => {
  return (
    <ul className={open ? s.menu__list : `${s.menu__list} ${s.closed}`}>
      <li className={s.menu__listItem}>
        <NavLink className={s.menu__listLink} to="/">
          About Me
        </NavLink>
      </li>
      <li className={s.menu__listItem}>
        <NavLink className={s.menu__listLink} to="/resume">
          Resume
        </NavLink>
      </li>
      <li className={s.menu__listItem}>
        <NavLink className={s.menu__listLink} to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className={s.menu__listItem}>
        <NavLink className={s.menu__listLink} to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default RightNav;
