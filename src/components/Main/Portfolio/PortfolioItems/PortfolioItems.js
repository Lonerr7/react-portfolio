import PortfolioControls from './PortfolioControls/PortfolioControls';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import s from './PortfolioItems.module.scss';

const PortfolioItems = ({ items }) => {
  const elements = items.map((i) => (
    <PortfolioItem
      key={i.id}
      title={i.title}
      descr={i.descr}
      imgSrc={i.imgSrc}
      to={i.to}
    />
  ));

  return (
    <div className={s.portfolioItems}>
      <PortfolioControls />
      <div className={s.portfolioItems__inner}>{elements}</div>
    </div>
  );
};

export default PortfolioItems;
