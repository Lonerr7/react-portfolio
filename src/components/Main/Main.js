import s from './Main.module.scss';

const Main = (props) => {
  return <div className={s.main}>{props.children}</div>;
};

export default Main;
