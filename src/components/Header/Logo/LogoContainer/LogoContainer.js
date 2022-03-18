import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeLanguageSuccess } from '../../../../redux/appReducer';
import Logo from '../Logo';

const LogoContainer = (props) => {
  const [theme, setTheme] = useState('light');

  const themeChangeHandler = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  const onLanguageChange = (newLanguage) => {
    props.changeLanguage(newLanguage);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Logo
      theme={theme}
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
});

const dispatchToProps = {
  changeLanguage: changeLanguageSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(LogoContainer);
