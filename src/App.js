import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutMe from './components/Main/AboutMe/AboutMe';
import Main from './components/Main/Main';
import Resume from './components/Main/Resume/Resume';
import Portfolio from './components/Main/Portfolio/Portfolio';
import Contact from './components/Main/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/common/Container/Container';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Container>
          <div className="main__inner">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
