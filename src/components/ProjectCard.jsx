import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProjectCard(props) {
  const toolListItems = []
  for (let i = 0; i < props.tools.length; i += 1) {
    toolListItems.push(<li key={i}>{props.tools[i]}</li>)
  }

  return (
    <Row id="project-card">
      <Col xs={12} md={12} lg={5}>
        <img src={props.image} alt="screenshot of projects"/>
      </Col>
      <Col xs={12} md={12} lg={7}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <ul>{toolListItems}</ul>
      </Col>
    </Row>
  )
}
