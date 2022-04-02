import s from './AboutMe.module.scss';
import Myself from './Myself/Myself';
import WhatIDo from './WhatIDo/WhatIDo';
import Container from '../../common/Container/Container';

const AboutMe = () => {
  return (
    <div className={s.aboutMe}>
      <Container>
        <Myself />
        <WhatIDo />
      </Container>
    </div>
  );
};

export default AboutMe;
