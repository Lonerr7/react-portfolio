import s from './ResumeInfo.module.scss';
import Container from '../../../common/Container/Container';
import ResumeItems from './ResumeItems/ResumeItems';

const ResumeInfo = ({ education, experience }) => {
  return (
    <div className={s.resumeInfo}>
      <Container>
        <div className={s.resumeInfo__inner}>
          <ResumeItems title={education.title} items={education.items} />
          <ResumeItems title={experience.title} items={experience.items} />
        </div>
      </Container>
    </div>
  );
};

export default ResumeInfo;
