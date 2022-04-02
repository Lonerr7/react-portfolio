import emailjs from '@emailjs/browser';

export const formApi = {
  sendMessage(values) {
    return emailjs.send(
      `service_eexb4xr`,
      `template_xe8z7e7`,
      values,
      `zdvAJ-1O0OuUkJ5Tj`
    );
  },
};
