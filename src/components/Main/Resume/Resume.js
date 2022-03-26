import { connect } from 'react-redux';
import PageHeader from '../../common/PageHeader/PageHeader';
import Certificates from './Certificates/Certificates';
import s from './Resume.module.scss';
import ResumeInfo from './ResumeInfo/ResumeInfo';
import Skills from './Skills/Skills';

// TODO: додлеать ResumeInfo и мб сделать блок сертификатов

const Resume = ({ resume }) => {
  return (
    <div className={s.resume}>
      <PageHeader title={resume.title} />
      <ResumeInfo
        educationItems={resume.education}
        experienceItems={resume.experience}
      />
      <Certificates certificates={resume.certificates.items} title={resume.certificates.title} />
      <Skills skills={resume.skills} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.app.currentLanguageInfo.main.resume,
});

export default connect(mapStateToProps, null)(Resume);
