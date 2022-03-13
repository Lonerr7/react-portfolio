import { useState } from 'react';
import Burger from './Burger/Burger';
import s from './Navbar.module.scss';
import RightNav from './RightNav/RightNav';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={s.menu}>
      <RightNav open={open} />
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
