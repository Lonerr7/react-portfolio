import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutMe from './components/Main/AboutMe/AboutMe';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { Suspense } from 'react';

const Portfolio = React.lazy(() =>
  import('./components/Main/Portfolio/Portfolio')
);
const Contact = React.lazy(() => import('./components/Main/Contact/Contact'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <div className="main__inner">
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
