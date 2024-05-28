import s from './ContactData.module.scss';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';

const ContactData = ({ contact }) => {
  return (
    <div className={s.contactData}>
      <ContactInfo contactItems={contact.contactInfo} />
      <ContactForm />
    </div>
  );
};

export default ContactData;
