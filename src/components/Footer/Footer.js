import { connect } from 'react-redux';
import BigContainer from '../common/BigContainer/BigContainer';
import s from './Footer.module.scss';

const Footer = ({ footer }) => {
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
              {footer.designLinkText}
            </a>
          </p>
        </div>
      </BigContainer>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  footer: state.app.currentLanguageInfo.footer,
});

export default connect(mapStateToProps, null)(Footer);
