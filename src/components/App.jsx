import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import '../styles/App.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="navbar" bg="clear">
          <Navbar.Brand href="#">
            <img
              src="../../../assets/images/illusionalCoder-dark.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="illusionalCoder logo"
            />
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-li" href="#about">ABOUT</Nav.Link>
            <Nav.Link className="nav-li" href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className="nav-li" href="#contact">CONTACT</Nav.Link>
          </Navbar.Collapse>
        </Navbar>

        <Header />

        <a id="about"/>
        <About />
        <Skills />
        <a id="projects"/>
        <Projects />
        <a id="contact"/>
        <Contact />
      </div>
    )
  }
}

export default App
