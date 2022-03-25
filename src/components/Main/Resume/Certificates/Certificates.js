import Container from '../../../common/Container/Container';
import Certificate from './Certificate/Certificate';
import s from './Certificates.module.scss';

const Certificates = ({ certificates, title }) => {
  const elements = certificates.map((c) => (
    <Certificate
      key={c.id}
      date={c.date}
      logo={c.icon}
      descr={c.descr}
      title={c.title}
      to={c.to}
    />
  ));

  return (
    <div className={s.certificates}>
      <Container>
        <h2 className={s.certificates__title}>{title}</h2>
        <div className={s.certificates__inner}>{elements}</div>
      </Container>
    </div>
  );
};

export default Certificates;
