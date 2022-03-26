import Container from '../../../common/Container/Container';
import s from './Skills.module.scss';
import SkillsBuilder from './SkillsBuilder/SkillsBuilder';

const Skills = ({ skills }) => {
  return (
    <div className={s.skills}>
      <Container>
        <div className={s.skills__inner}>
          <SkillsBuilder
            title={skills.codingSkills.title}
            items={skills.codingSkills.items}
          />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
