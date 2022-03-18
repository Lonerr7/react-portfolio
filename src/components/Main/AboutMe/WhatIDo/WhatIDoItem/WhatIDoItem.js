import s from './WhatIDoItem.module.scss';

const WhatIDoItem = (props) => {
  return (
    <div className={s.whatIDoItem}>
      <div className={s.whatIDoItem__imgBox}>{props.img}</div>
      <div className={s.whatIDoItem__textBox}>
        <h4 className={s.whatIDoItem__title}>{props.title}</h4>
        <p className={s.whatIDoItem__text}>{props.text}</p>
      </div>
    </div>
  );
};

export default WhatIDoItem;
