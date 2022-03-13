import { NavLink } from 'react-router-dom';
import s from './Logo.module.scss';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Logo = () => {
  const [theme, setTheme] = useState('light');

  const themeChangeHandler = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={s.logoBox}>
      <NavLink className={s.logo__link} to="/">
        <div className={s.logo}>
          <p className={s.logo__symbol}>V</p>
          <p className={s.logo__text}>
            Vanya
            <span>Karabankov</span>
          </p>
        </div>
      </NavLink>
      {theme === 'light' ? (
        <BsMoon className={s.themeSwitcher} onClick={themeChangeHandler} />
      ) : (
        <BsMoonFill className={s.themeSwitcherDark} onClick={themeChangeHandler} />
      )}
    </div>
  );
};

export default Logo;
