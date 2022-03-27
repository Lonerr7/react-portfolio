import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeLanguageSuccess, changeThemeSuccess } from './redux/appReducer';

const AppContainer = ({
  theme,
  changeTheme,
  changeLanguage,
  language,
  currentLanguageInfo,
}) => {
  // localStorage theme initialziation
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      changeTheme(localStorage.getItem('theme'));
    } else {
      localStorage.setItem('theme', theme);
    }
    // eslint-disable-next-line
  }, []);

  // localStorage language initialziation
  useEffect(() => {
    if (localStorage.getItem('language')) {
      changeLanguage(localStorage.getItem('language'));
    } else {
      localStorage.setItem('language', language);
      changeLanguage(language);
    }
    // eslint-disable-next-line
  }, []);

  if (!currentLanguageInfo) {
    return '';
  } else {
    return <App />;
  }
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
  language: state.app.language,
  currentLanguageInfo: state.app.currentLanguageInfo,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
  changeLanguage: changeLanguageSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
