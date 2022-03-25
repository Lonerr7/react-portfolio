import s from './Certificate.module.scss';

const Certificate = ({ logo, title, descr, date, to }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className={s.certificate}>
      <div className={s.certificate__logoBox}>{logo}</div>
      <div className={s.certificate__textBox}>
        <h4 className={s.certificate__title}>{title}</h4>
        <p className={s.certificate__descr}>{descr}</p>
        <p className={s.certificate__date}>{date}</p>
      </div>
    </a>
  );
};

export default Certificate;
