import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/About.scss'

export default function About() {
  return (
    <div id="about-section" className="section">
      <Container>
        <h3>Hello World,</h3>
        <Row>
          <Col xs={12} md={12} lg={6}>
            I'm Catherine Cheng, a Software Engineer with an Electrical Engineering degree from University of California, Los Angeles (<em>UCLA</em>).
            For years, I've been actively pushing and reviewing code on <i>Github</i> open source products, including full stack web applications, 
            mobile apps, and games throughout their entire development lifecycles. I love writing clean, quality code that is scalable and maintainable.
            <br/><br/>
            Currently, I work at Southern California Edison on proprietary <a href="https://www.linkedin.com/feed/update/urn:li:activity:6678448118968803328/" target="_blank" rel="noopener noreferrer">iOS apps</a> for SCE inspectors to increase safety of millions of electrical poles and their neighborhoods, preventing wildfires, power outages, and more. 
            Every year, we're saving forests, wild animals, human lives, buildings, and millions of dollars for our consumers by keeping tabs on every single pole.
            <br/><br/>
            I live in Los Angeles with my wife, <a href="https://www.linkedin.com/in/zhijiaodaniellegoh/" target="_blank" rel="noopener noreferrer">Danielle</a>, and our two cats.
            On weekends, I love playing ping pong with my custom paddle, polishing my collection of leather dress shoes,
            or sniffing my cats (aka 吸貓).
          </Col>

          <Col id="collage" xs={12} md={12} lg={6}>
            <img id="wife" src="../../../assets/images/wife.jpg" alt="Two Asian women happily eating at a restaurant"/>
            <img id="cats" src="../../../assets/images/cats.jpg" alt="Two cats cuddling"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}