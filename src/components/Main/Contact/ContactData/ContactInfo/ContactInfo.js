import s from './ContactInfo.module.scss';
import ContactInfoItem from './ContactInfoItem/ContactInfoItem';

const ContactInfo = ({ contactItems }) => {
  const elements = contactItems.map((c) => (
    <ContactInfoItem key={c.id} img={c.img} title={c.title} descr={c.descr} />
  ));

  return <div className={s.contactInfo}>{elements}</div>;
};

export default ContactInfo;
