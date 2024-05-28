import BigContainer from '../BigContainer/BigContainer';
import s from './PageHeader.module.scss';

const PageHeader = ({ title }) => {
  return (
    <div className={s.pageHeader}>
      <BigContainer>
        <div className={s.pageHeader__inner}>
          <h1 className={s.pageHeader__title}>{title}</h1>
        </div>
      </BigContainer>
    </div>
  );
};

export default PageHeader;
