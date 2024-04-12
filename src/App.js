import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Career from './components/Career';
import Quotes from './components/Quotes';
import About from './components/About';
import Header from './components/Header';

function App() {
  const [section, setSection] = useState('home');

  const handleSectionChange = (newSection) => {
    setSection(newSection);
    scrollToSection(newSection);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header handleSectionChange={handleSectionChange} />
      <Container className="content">
        <div id="home">
          <Home />
        </div>
        <div id="career" className='pb-5'>
          <Career />
        </div>
        <div id="quotes">
          <Quotes />
        </div>
        <div id="about">
          <About />
        </div>
      </Container>
      <footer>
        <p>© By Aditya Sharma</p>
      </footer>
    </div>
  );
}

export default App;
