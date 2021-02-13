import React from 'react'
import Container from 'react-bootstrap/Container'

import SkillCard from './SkillCard.jsx'
import '../styles/Skills.scss'

export default function Skills() {
  const skillCardContent = [
    { title: "LANGUAGES", tools: ["JavaScript", "TypeScript", "Swift", "Python", "C++", "Matlab"] },
    { title: "FRONTEND", tools: ["React", "React Native", "Redux", "Webpack", "HTML", "CSS/ Sass/ Scss", "Bootstrap", "Material-UI"] },
    { title: "BACKEND", tools: ["Node", "Express", "SQL", "NoSQL", "Firebase", "WebSockets"] },
    { title: "OTHERS", tools: ["Tensorflow", "Docker", "Kubernetes", "Git/ Github", "Agile/ Scrum", "AWS/ GCP/ Azure", "TDD/ Jest/ Enzyme"] },
  ]
  const skillItems = []
  for (const [index, value] of skillCardContent.entries()) {
    skillItems.push(<SkillCard key={index} title={value.title} tools={value.tools} />)
  }

  return (
    <div className="section">
      <Container>
        <h2>I work with:</h2>
        <div id="skills-box">
          {skillItems}
        </div>
      </Container>
    </div>
  )
}