import s from './PortfolioControls.module.scss';

const PortfolioControls = () => {
  return (
    <div className={s.portfolioControls}>
      <ul className={s.portfolioControls__list}>
        <li className={`${s.portfolioControls__item} ${s.active}`}>All</li>
        <li className={s.portfolioControls__item}>ReactJs</li>
        <li className={s.portfolioControls__item}>HTML/CSS</li>
      </ul>
    </div>
  );
};

export default PortfolioControls;
