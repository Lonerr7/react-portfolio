import ListItem from './ListItem/ListItem';
import s from './RightNav.module.scss';

const RightNav = ({ open, navArr, setOpen }) => {
  const liElements = navArr.map((l, i) => (
    <ListItem
      key={i}
      classLiTitle={s.menu__listItem}
      classLinkTitle={s.menu__listLink}
      data={l.title}
      to={l.to}
      open={open}
      setOpen={setOpen}
    />
  ));

  return (
    <ul className={open ? s.menu__list : `${s.menu__list} ${s.closed}`}>
      {liElements}
    </ul>
  );
};

export default RightNav;
