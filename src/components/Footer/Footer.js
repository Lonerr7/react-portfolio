import BigContainer from '../common/BigContainer/BigContainer';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <BigContainer>
        <div className={s.footer__inner}>
          <div className={s.footer__links}>
            <a
              href="https://github.com/Lonerr7"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <p>
            © 2021.
            <a href="https://lmpixels.com/wp/leven-wp/full-width/">
              Design was taken from
            </a>
          </p>
        </div>
      </BigContainer>
    </footer>
  );
};

export default Footer;
