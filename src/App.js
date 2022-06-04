import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutMe from './components/Main/AboutMe/AboutMe';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { Suspense } from 'react';

const Resume = React.lazy(() => import('./components/Main/Resume/Resume'));
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
              <Route path="/react-portfolio" element={<AboutMe />} />
              <Route path="/react-portfolio/resume" element={<Resume />} />
              <Route
                path="/react-portfolio/portfolio"
                element={<Portfolio />}
              />
              <Route path="/react-portfolio/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
