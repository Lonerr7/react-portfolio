import BigContainer from '../common/BigContainer/BigContainer';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <BigContainer>
        <div className={s.footer__inner}>
          <div className={s.footer__links}>
            <a
              className={s.footer__link}
              href="https://github.com/Lonerr7"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <p className={s.footer__text}>
            © 2022. 
            <a
              className={s.footer__textLink}
              href="https://lmpixels.com/wp/leven-wp/full-width/"
              target="_blank"
              rel="noreferrer"
            >
                Design was taken from here
            </a>
          </p>
        </div>
      </BigContainer>
    </footer>
  );
};

export default Footer;
