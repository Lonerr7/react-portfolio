import { useState } from 'react';
import { connect } from 'react-redux';
import Burger from './Burger/Burger';
import s from './Navbar.module.scss';
import RightNav from './RightNav/RightNav';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={s.menu}>
      <RightNav open={open} setOpen={setOpen} navArr={props.navArr} />
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  navArr: state.app.currentLanguageInfo.header.nav,
});

export default connect(mapStateToProps, null)(Navbar);
