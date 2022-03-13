import s from './Header.module.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__inner}>
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
