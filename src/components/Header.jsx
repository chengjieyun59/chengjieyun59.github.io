import React from 'react'

import '../styles/Header.scss'

export default function Header() {
  return (
    <div id="background" style={{
      backgroundImage: "url(../../assets/images/painting.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh',
      textAlign: 'center'
    }}>
      <h1>Catherine Cheng</h1>
      <h2>Software Engineer</h2>
    </div>
  )
}