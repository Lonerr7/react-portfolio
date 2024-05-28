import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeLanguageSuccess,
  changeThemeSuccess,
} from '../../../../redux/appReducer';
import Logo from '../Logo';

const LogoContainer = (props) => {
  const themeChangeHandler = () => {
    if (props.theme === 'light') {
      props.changeTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (props.theme === 'dark') {
      props.changeTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const onLanguageChange = (newLanguage) => {
    props.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', props.theme);
  }, [props.theme]);

  return (
    <Logo
      theme={props.theme}
      themeChangeHandler={themeChangeHandler}
      logoInfo={props.logoInfo}
      lang={props.lang}
      onLanguageChange={onLanguageChange}
    />
  );
};

const mapStateToProps = (state) => ({
  logoInfo: state.app.currentLanguageInfo.header.logo,
  lang: state.app.language,
  theme: state.app.theme,
});

const dispatchToProps = {
  changeLanguage: changeLanguageSuccess,
  changeTheme: changeThemeSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(LogoContainer);
