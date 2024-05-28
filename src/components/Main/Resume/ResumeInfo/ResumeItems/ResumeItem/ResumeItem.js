import s from './ResumeItem.module.scss';

const ResumeItem = ({ date, place, title, text }) => {
  return (
    <div className={s.resumeItem}>
      <div className={s.resumeItem__datePlace}>
        <p className={s.resumeItem__date}>{date}</p>
        <p className={s.resumeItem__place}>{place}</p>
      </div>
      <div className={s.resumeItem__box}>
        <h4 className={s.resumeItem__title}>{title}</h4>
        <p className={s.resumeItem__text}>{text}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
