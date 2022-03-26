import { connect } from 'react-redux';
import s from './WhatIDo.module.scss';
import WhatIDoItem from './WhatIDoItem/WhatIDoItem';

const WhatIDo = ({ skills }) => {
  const elements = skills.items.map((s) => (
    <WhatIDoItem key={s.id} title={s.title} img={s.img} text={s.text} />
  ));

  return (
    <section className={s.whatIDo}>
      <h2 className={s.whatIDo__title}>{skills.title}</h2>
      <div className={s.whatIDo__items}>{elements}</div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  skills: state.app.currentLanguageInfo.main.aboutMe.skills,
});

export default connect(mapStateToProps, null)(WhatIDo);
