import s from './ContactForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from './TextError/TextError';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactForm = ({ contactForm }) => {
  const {
    title,
    namePh,
    emailPh,
    subjectPh,
    messagePh,
    buttonText,
    nameError,
    emailError,
    emailValidation,
    subjectError,
    messageError,
  } = contactForm;

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = yup.object({
    name: yup.string().required(nameError),
    email: yup.string().email(emailValidation).required(emailError),
    subject: yup.string().required(subjectError),
    message: yup.string().required(messageError),
  });

  const onSubmit = (values) => {
    emailjs
      .send(`service_eexb4xr`, `template_xe8z7e7`, values, `zdvAJ-1O0OuUkJ5Tj`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div className={s.contactForm}>
      <h2 className={s.contactForm__title}>{title}</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className={s.contactForm__form}>
          <div className={s.contactForm__formControls}>
            <div className={s.contactForm__formControl}>
              <label htmlFor="name" />
              <Field
                className={s.contactForm__input}
                name="name"
                id="name"
                type="text"
                placeholder={namePh}
              />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className={s.contactForm__formControl}>
              <label htmlFor="email" />
              <Field
                className={s.contactForm__input}
                name="email"
                id="email"
                type="text"
                placeholder={emailPh}
              />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className={s.contactForm__formControl}>
              <label htmlFor="subject" />
              <Field
                className={s.contactForm__input}
                name="subject"
                id="subject"
                type="text"
                placeholder={subjectPh}
              />
              <ErrorMessage name="subject" component={TextError} />
            </div>
            <button className={s.contactForm__btn} type="submit">
              {buttonText}
            </button>
          </div>
          <div className={s.contactForm__textareaBox}>
            <label htmlFor="message" />
            <Field
              className={s.contactForm__textarea}
              component="textarea"
              placeholder={messagePh}
              id="message"
              name="message"
            />
            <ErrorMessage name="message" component={TextError} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
