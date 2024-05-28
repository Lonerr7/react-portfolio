import s from './BigContainer.module.scss';

const BigContainer = (props) => {
  return <div className={s.bigContainer}>{props.children}</div>;
};

export default BigContainer;
