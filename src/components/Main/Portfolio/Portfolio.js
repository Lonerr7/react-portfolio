import s from './Portfolio.module.scss';
import pic from '../../../assets/images/Main/Portfolio/sass-landing.png';

const Portfolio = () => {
  return (
    <div className={s.portfolio}>
      <div>
        <img src={pic} alt="todo" />
      </div>
    </div>
  );
};

export default Portfolio;
