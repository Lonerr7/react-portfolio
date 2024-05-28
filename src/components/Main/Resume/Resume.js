import { connect } from 'react-redux';
import PageHeader from '../../common/PageHeader/PageHeader';
import Certificates from './Certificates/Certificates';
import s from './Resume.module.scss';
import ResumeInfo from './ResumeInfo/ResumeInfo';

const Resume = ({ resume }) => {
  return (
    <div className={s.resume}>
      <PageHeader title={resume.title} />
      <ResumeInfo education={resume.education} experience={resume.experience} />
      <Certificates
        certificates={resume.certificates.items}
        title={resume.certificates.title}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.app.currentLanguageInfo.main.resume,
});

export default connect(mapStateToProps, null)(Resume);
