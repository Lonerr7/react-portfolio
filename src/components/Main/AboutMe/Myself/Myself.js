import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Myself.module.scss';

const Myself = ({ myself, currentLanguage }) => {
  return (
    <section className={s.myself}>
      <div className={s.myself__box}>
        <div className={s.myself__imgBox}></div>
        <div className={s.myself__textBox}>
          <h4 className={s.myself__subtitle}>{myself.job}</h4>
          <h1 className={s.myself__title}>{myself.name}</h1>
          <p className={s.myself__text}>{myself.aboutMeDescr}</p>
          <div className={s.myself__links}>
            {currentLanguage === 'eng' ? (
              <a
                className={`${s.myself__link} ${s.myself__link_download}`}
                href="https://drive.google.com/file/d/14qOvWwUl4K1mbalxt5J4pXfCei0SfeP2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {myself.buttons.download}
              </a>
            ) : (
              <a
                className={`${s.myself__link} ${s.myself__link_download}`}
                href="https://drive.google.com/file/d/1yfc0Qs6ChhJEiGEFaRVekyewedQwsVKD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {myself.buttons.download}
              </a>
            )}
            <NavLink
              to="/contact"
              className={`${s.myself__link} ${s.myself__link_contact}`}
            >
              {myself.buttons.contact}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  myself: state.app.currentLanguageInfo.main.aboutMe.myself,
  currentLanguage: state.app.language,
});

export default connect(mapStateToProps, null)(Myself);
