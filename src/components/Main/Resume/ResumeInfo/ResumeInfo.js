import s from './ResumeInfo.module.scss';
import Container from '../../../common/Container/Container';
import ResumeItems from './ResumeItems/ResumeItems';

const ResumeInfo = ({ educationItems, experienceItems }) => {
  return (
    <div className={s.resumeInfo}>
      <Container>
        <div className={s.resumeInfo__inner}>
          <ResumeItems title="Education" items={educationItems} />
          <ResumeItems title="Experience" items={experienceItems} />
        </div>
      </Container>
    </div>
  );
};

export default ResumeInfo;
