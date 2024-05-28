import s from './Skill.module.scss';

const Skill = ({ skillTitle, value }) => {
  return (
    <div className={s.skill}>
      <div className={s.skill__textBox}>
        <h4 className={s.skill__title}>{skillTitle}</h4>
        <p className={s.skill__value}>{value}%</p>
      </div>
      <div className={s.skill__scaleBox}>
        <div
          className={s.skill__percentage}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
