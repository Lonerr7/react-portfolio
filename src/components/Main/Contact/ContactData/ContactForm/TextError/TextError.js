import s from './TextError.module.scss';

const TextError = (props) => {
  return <p className={s.textError}>{props.children}</p>;
};

export default TextError;
