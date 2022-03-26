import ResumeItem from './ResumeItem/ResumeItem';
import s from './ResumeItems.module.scss';

const ResumeItems = ({ title, items }) => {
  const elements = items.map((i) => (
    <ResumeItem
      key={i.id}
      date={i.year}
      place={i.place}
      text={i.description}
      title={i.specialization}
    />
  ));

  return (
    <div className={s.resumeItems}>
      <h2 className={s.resumeItems__title}>{title}</h2>
      <div className={s.resumeItems__items}>{elements}</div>
    </div>
  );
};

export default ResumeItems;
