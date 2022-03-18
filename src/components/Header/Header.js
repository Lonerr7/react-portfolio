import s from './Header.module.scss';
import LogoContainer from './Logo/LogoContainer/LogoContainer';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__inner}>
          <LogoContainer />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
