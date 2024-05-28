import React from 'react';
import s from './ContactInfoItem.module.scss';

const ContactInfoItem = ({ img, title, descr }) => {
  return (
    <div className={s.contactInfoItem}>
      <div className={s.contactInfoItem__imgBox}>{img}</div>
      <div className={s.contactInfoItem__box}>
        <h4 className={s.contactInfoItem__title}>{title}</h4>
        <p className={s.contactInfoItem__descr}>{descr}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
