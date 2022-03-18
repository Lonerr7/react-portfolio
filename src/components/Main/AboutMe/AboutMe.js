import s from './AboutMe.module.scss';
import Myself from './Myself/Myself';
import WhatIDo from './WhatIDo/WhatIDo';

const AboutMe = () => {
  return (
    <div className={s.aboutMe}>
      <Myself />
      <WhatIDo />
    </div>
  )
}

export default AboutMe