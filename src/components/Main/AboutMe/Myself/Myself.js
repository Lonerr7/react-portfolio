import { NavLink } from 'react-router-dom';
import s from './Myself.module.scss';

const Myself = () => {
  return (
    <section className={s.myself}>
      <div className={s.myself__box}>
        <div className={s.myself__imgBox}></div>
        <div className={s.myself__textBox}>
          <h4 className={s.myself__subtitle}>Frontend-developer</h4>
          <h1 className={s.myself__title}>Ivan Karabankov</h1>
          <p className={s.myself__text}>
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <div className={s.myself__links}>
            <a
              className={`${s.myself__link} ${s.myself__link_download}`}
              href="link"
            >
              Download CV
            </a>
            <NavLink
              to="/contact"
              className={`${s.myself__link} ${s.myself__link_contact}`}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myself;
