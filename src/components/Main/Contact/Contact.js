import { connect } from 'react-redux';
import Container from '../../common/Container/Container';
import PageHeader from '../../common/PageHeader/PageHeader';
import s from './Contact.module.scss';
import ContactData from './ContactData/ContactData';
import { sendEmail } from '../../../redux/formReducer';

const Contact = ({ contact, statusMessage, sendEmail }) => {
  return (
    <div className={s.contact}>
      <PageHeader title={contact.title} />
      <div className={s.contact__inner}>
        <Container>
          <ContactData
            contact={contact}
            statusMessage={statusMessage}
            sendEmail={sendEmail}
          />
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contact: state.app.currentLanguageInfo.main.contact,
  statusMessage: state.form.statusMessage,
});

const dispatchToProps = {
  sendEmail,
};

export default connect(mapStateToProps, dispatchToProps)(Contact);
