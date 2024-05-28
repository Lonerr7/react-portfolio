import { connect } from 'react-redux';
import Container from '../../common/Container/Container';
import PageHeader from '../../common/PageHeader/PageHeader';
import s from './Portfolio.module.scss';
import PortfolioItems from './PortfolioItems/PortfolioItems';

const Portfolio = ({ portfolio }) => {
  return (
    <div className={s.portfolio}>
      <PageHeader title={portfolio.title} />
      <Container>
        <PortfolioItems items={portfolio.currentItems} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  portfolio: state.app.currentLanguageInfo.main.portfolio,
});

export default connect(mapStateToProps, null)(Portfolio);
