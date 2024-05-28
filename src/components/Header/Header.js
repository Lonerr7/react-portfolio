import BigContainer from '../common/BigContainer/BigContainer';
import s from './Header.module.scss';
import LogoContainer from './Logo/LogoContainer/LogoContainer';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <BigContainer>
        <div className={s.header__inner}>
          <LogoContainer />
          <Navbar />
        </div>
      </BigContainer>
    </header>
  );
};

export default Header;
