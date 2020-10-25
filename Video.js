import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

class Video extends Component {
  render () {
    return (
      <div className='vid'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= 'https://youtu.be/lUHi4SEwCjw'
            width='80vw'
            height='50vh'
            controls = {true}
          />
        </div>
      </div>
    )
  }
}

export default Video;