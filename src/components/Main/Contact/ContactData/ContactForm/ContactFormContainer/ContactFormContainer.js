import { connect } from 'formik';
import ContactForm from '../ContactForm';

const ContactFormContainer = () => {
  return <ContactForm />;
};

export default connect()(ContactForm);
