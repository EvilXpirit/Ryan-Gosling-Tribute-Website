import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bannerImage from './images/ryan_gosling_blade_runner_2049_hd.jpg';
import Home from './components/Home';
import Career from './components/Career';
import Quotes from './components/Quotes';
import About from './components/About';

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
      <header className="App-header">
        <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
          <Container className="banner-content">
            <h1 className="display-3">Tribute to Ryan Gosling</h1>
            <p className="lead">Ryan Gosling is a talented actor known for his roles in movies such as "La La Land," "Drive," and "Blade Runner 2049."</p>
            <p>This website is a tribute to his incredible acting career and his contributions to the film industry.</p>
            <a
              className="btn btn-primary"
              href="https://www.imdb.com/name/nm0331516/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Ryan Gosling
            </a>
          </Container>
        </div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto navbar-dark">
                <Nav.Link onClick={() => handleSectionChange('home')}>Home</Nav.Link>
                <Nav.Link onClick={() => handleSectionChange('career')}>Career</Nav.Link>
                <Nav.Link onClick={() => handleSectionChange('quotes')}>Quotes</Nav.Link>
                <Nav.Link onClick={() => handleSectionChange('about')}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

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
