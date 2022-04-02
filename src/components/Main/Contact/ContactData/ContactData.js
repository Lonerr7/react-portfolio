import s from './ContactData.module.scss';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';

const ContactData = ({ contact, statusMessage, sendEmail }) => {
  return (
    <div className={s.contactData}>
      <ContactInfo contactItems={contact.contactInfo} />
      <ContactForm
        contactForm={contact.contactForm}
        statusMessage={statusMessage}
        sendEmail={sendEmail}
      />
    </div>
  );
};

export default ContactData;
