import React from 'react'
import Container from 'react-bootstrap/Container'

import ProjectCard from './ProjectCard.jsx'
import '../styles/Projects.scss'

export default function Projects() {
  const projectCardContent = [
    { title: "Tikitaka", tools: ["Typescript", "Kubernetes", "Docker", "Istio", "OpenTelemetry", "Node", "React hooks"], image: "../../../assets/images/cats.jpg", description: "Programmed a developer tool for engineers to visualize the interaction of microservices in Kubernetes clusters of Docker containers. Errors and broken communication between microservices are denoted in red, helping developers to debug A/B tests." },
    { title: "Sortera", tools: ["Tensorflow", "React", "Redux", "Node", "Express"], image: "../../../assets/images/cats.jpg", description: "Applied machine learning to categorize user-uploaded images and renamed the files accordingly, allowing users to download a ZIP file of the renamed images."},
    { title: "Trivianetix", tools: ["SQL", "WebSockets", "Node", "D3.js", "React"], image: "../../../assets/images/cats.jpg", description: "Created a trivia game with thousands of random questions pulled from an API for users who have registered an account and answered demographic questions. After each game, users can see relational graphs of scores v.s. user demographics, including age, education level, and location. I also architected a live chat for clients to communicate with others connected to the server."},
    { title: "Mood Buddy", tools: ["Swift", "Objective C", "Core Data"], image: "../../../assets/images/cats.jpg", description: "Mood Buddy is a free iOS app I've created and published on the App Store because I care deeply about people's mental health. Want to listen to unguided meditation, log your workouts, write journals, and share your mood score with your Mood Buddy? Self care is best when it's a daily habit. Download Mood Buddy to take care of yourself in the midst of COVID19."},
    { title: "rePark", tools: ["NoSQL", "Bcrypt", "Node", "Webpack", "Mapbox", "React hooks"], image: "../../../assets/images/cats.jpg", description: "Used agile methodology and a scrum board to construct an app that solves the issue of drivers wasting time looking for parking. Parked drivers can indicate where they parked and when they're leaving, while drivers looking for a spot can reserve the spot in advance. Both the giver and the receiver will see each other's car information for an easier transfer of the parking spot."},
    { title: "Space Invader", tools: ["C++", "OOP"], image: "../../../assets/images/cats.jpg", description: "Engineered a shooting game with strong OOP concepts, class inheritance, and polymorphism. Players use the arrow keys to move and space bar to shoot different types of spaceships that fire different weapons. Health points change upon consuming a first-aid kit or hit by an enemy. All entities appear at random positions from the right side of the screen, where different spaceships move to the left at different speeds. Each level gets harder."},
    { title: "Open Sesame", tools: ["Matlab", "Neural Network", "C", "Arduino"], image: "../../../assets/images/cats.jpg", description: "Applied Fast Fourier Transformation (FFT) on audio data to train a supervised neural network with 99.98% accuracy of identifying monophthong voice inputs. Used C language to import neural net configuration, implement matrix calculation (w = ax + b), and instruct an Arduino to lock or unlock my handmade box. This product encompasses computer science, electrical engineering, and mechanical engineering skills."},
  ]
  const projectItems = []
  for (const [index, value] of projectCardContent.entries()) {
    projectItems.push(<ProjectCard
      key={index}
      title={value.title}
      tools={value.tools}
      image={value.image}
      description={value.description}
    />)
  }

  return (
    <div className="section">
      <Container>
        <h3>My Work</h3>
        {projectItems}
      </Container>
    </div>
  )
}