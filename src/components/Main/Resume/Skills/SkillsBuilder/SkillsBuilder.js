import Skill from './Skill/Skill';
import s from './SkillsBuilder.module.scss';

const SkillsBuilder = ({ items, title }) => {
  const elements = items.map((s) => <Skill key={s.id} skillTitle={s.title} value={s.percent} />);

  return (
    <div className={s.skillsBuilder}>
      <h2 className={s.skillsBuilder__title}>{title}</h2>
      <div className={s.skillsBuilder__items}>{elements}</div>
    </div>
  );
};

export default SkillsBuilder;
