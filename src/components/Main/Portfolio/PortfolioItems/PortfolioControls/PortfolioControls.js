import s from './PortfolioControls.module.scss';

const PortfolioControls = ({ filterPortfolioItemsHandler }) => {
  return (
    <div className={s.portfolioControls}>
      <ul className={s.portfolioControls__list}>
        <li
          className={`${s.portfolioControls__item} ${s.active}`}
          onClick={() => {
            filterPortfolioItemsHandler('');
          }}
        >
          All
        </li>
        <li
          className={s.portfolioControls__item}
          onClick={() => filterPortfolioItemsHandler('react')}
        >
          ReactJs
        </li>
        <li
          className={s.portfolioControls__item}
          onClick={() => filterPortfolioItemsHandler('landing')}
        >
          HTML/CSS
        </li>
      </ul>
    </div>
  );
};

export default PortfolioControls;
