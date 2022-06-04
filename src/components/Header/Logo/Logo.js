import { NavLink } from 'react-router-dom';
import s from './Logo.module.scss';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { splitString } from '../../../helpers/helpers';

const Logo = (props) => {
  const changedLanguage = props.lang === 'eng' ? 'ru' : 'eng';

  return (
    <div className={s.logoBox}>
      <NavLink className={s.logo__link} to="/react-portfolio">
        <div className={s.logo}>
          <p className={s.logo__symbol}>{props.logoInfo.img}</p>
          <p className={s.logo__text}>
            {splitString(props.logoInfo.name, ' ', 0)}
            <span> {splitString(props.logoInfo.name, ' ', 1)}</span>
          </p>
        </div>
      </NavLink>
      {props.theme === 'light' ? (
        <BsMoon
          className={s.themeSwitcher}
          onClick={props.themeChangeHandler}
        />
      ) : (
        <BsMoonFill
          className={s.themeSwitcherDark}
          onClick={props.themeChangeHandler}
        />
      )}
      <p
        className={s.languageSwitcher}
        onClick={() => {
          props.onLanguageChange(changedLanguage);
        }}
      >
        {props.lang === 'eng' ? 'Eng' : 'Ru'}
      </p>
    </div>
  );
};

export default Logo;
