import { useState } from 'react';
import s from './PortfolioControls.module.scss';

const PortfolioControls = ({ filterPortfolioItemsHandler }) => {
  const [active, setActive] = useState(1);

  return (
    <div className={s.portfolioControls}>
      <ul className={s.portfolioControls__list}>
        <li
          className={
            active === 1
              ? `${s.portfolioControls__item} ${s.active}`
              : s.portfolioControls__item
          }
          onClick={() => {
            filterPortfolioItemsHandler('');
            setActive(1);
          }}
        >
          All
        </li>
        <li
          className={
            active === 2
              ? `${s.portfolioControls__item} ${s.active}`
              : s.portfolioControls__item
          }
          onClick={() => {
            filterPortfolioItemsHandler('react');
            setActive(2);
          }}
        >
          ReactJs
        </li>
        <li
          className={
            active === 3
              ? `${s.portfolioControls__item} ${s.active}`
              : s.portfolioControls__item
          }
          onClick={() => {
            filterPortfolioItemsHandler('nextjs');
            setActive(3);
          }}
        >
          Next.js
        </li>
        <li
          className={
            active === 4
              ? `${s.portfolioControls__item} ${s.active}`
              : s.portfolioControls__item
          }
          onClick={() => {
            filterPortfolioItemsHandler('landing');
            setActive(4);
          }}
        >
          HTML/CSS
        </li>
      </ul>
    </div>
  );
};

export default PortfolioControls;
