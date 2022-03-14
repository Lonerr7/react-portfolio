import s from './AboutMe.module.scss';
import Myself from './Myself/Myself';

const AboutMe = () => {
  return (
    <div className={s.aboutMe}>
      <Myself />
    </div>
  )
}

export default AboutMe