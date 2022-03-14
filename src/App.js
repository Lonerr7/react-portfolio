import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AboutMe from './components/Main/AboutMe/AboutMe';
import Main from './components/Main/Main';
import Resume from './components/Main/Resume/Resume';
import Portfolio from './components/Main/Portfolio/Portfolio';
import Contact from './components/Main/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <div className="container">
          <div className="main__inner">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default App;
