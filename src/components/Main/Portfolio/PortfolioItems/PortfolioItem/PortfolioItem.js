import s from './PortfolioItem.module.scss';

const PortfolioItem = ({ imgSrc, title, descr, to, github, githubDescr }) => {
  return (
    <div className={s.portfolioItem}>
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className={s.portfolioItem__link}
      >
        <div className={s.portfolioItem__imgBox}>
          <img className={s.portfolioItem__img} src={imgSrc} alt="project" />
        </div>
        <h4 className={s.portfolioItem__title}>{title}</h4>
      </a>
      <p className={s.portfolioItem__descr}>{descr}</p>
      <a className={s.portfolioItem__githubLink} href={github} target="_blank" rel="noreferrer">
        {githubDescr}
      </a>
    </div>
  );
};

export default PortfolioItem;
