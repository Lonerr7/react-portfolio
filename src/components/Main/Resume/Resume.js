import { connect } from 'react-redux';
import PageHeader from '../../common/PageHeader/PageHeader';
import s from './Resume.module.scss';
import ResumeInfo from './ResumeInfo/ResumeInfo';

// TODO: додлеать ResumeInfo и мб сделать блок сертификатов

const Resume = ({ resume }) => {
  return (
    <div className={s.resume}>
      <PageHeader title={resume.title} />
      <ResumeInfo
        educationItems={resume.education}
        experienceItems={resume.experience}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.app.currentLanguageInfo.main.resume,
});

export default connect(mapStateToProps, null)(Resume);
