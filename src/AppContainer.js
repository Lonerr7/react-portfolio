import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeLanguageSuccess, changeThemeSuccess } from './redux/appReducer';

const AppContainer = ({ theme, changeTheme, changeLanguage, language }) => {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      changeTheme(localStorage.getItem('theme'));
    } else {
      localStorage.setItem('theme', theme);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      changeLanguage(localStorage.getItem('language'));
    } else {
      localStorage.setItem('language', language);
    }
    // eslint-disable-next-line
  }, []);

  return <App />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
  language: state.app.language,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
  changeLanguage: changeLanguageSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
