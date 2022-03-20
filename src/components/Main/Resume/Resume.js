import { connect } from 'react-redux';
import PageHeader from '../../common/PageHeader/PageHeader';
import s from './Resume.module.scss';

const Resume = ({ resume }) => {
  return (
    <div className={s.resume}>
      <PageHeader title={resume.title} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.app.currentLanguageInfo.main.resume,
});

export default connect(mapStateToProps, null)(Resume);
