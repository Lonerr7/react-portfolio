import s from './Burger.module.scss';

const Burger = ({ open, setOpen }) => {
  return (
    <div
      className={s.burger}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;
