import { connect } from 'react-redux';
import Container from '../../common/Container/Container';
import PageHeader from '../../common/PageHeader/PageHeader';
import s from './Contact.module.scss';
import ContactData from './ContactData/ContactData';

const Contact = ({ contact }) => {
  return (
    <div className={s.contact}>
      <PageHeader title={contact.title} />
      <div className={s.contact__inner}>
        <Container>
          <ContactData contact={contact} />
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contact: state.app.currentLanguageInfo.main.contact,
});

export default connect(mapStateToProps, null)(Contact);
