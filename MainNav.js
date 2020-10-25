import React, { Component } from 'react'; 
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

class MainNav extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img 
            src="https://png2.cleanpng.com/sh/360f7dfd809f567fa32c8987f65e5624/L0KzQYm3V8A6N5N3jZH0aYP2gLBuTfRqe5R0itY2aX73dcP1hgQuapD5RdV4bYD4hLb5TgNwbqV8eeRuLYTocb76kPVic15oRdZyc3PygrW0ifNwdl5ogeRsbHWwRbO7UvRlbpU8e9MEMkaxQ4q7UMU5QGU2TaU6MUC7SIe4VcExPl91htk=/kisspng-discord-internet-bot-computer-software-teamspeak-c-discord-icon-circle-5b42ddfd7ca926.3940588415311088615106.png"
            alt="new"
            style={{ height: '5vw' }}
          />
        </IconButton>
          <Button color="inherit" href="https://devpost.com/software/waqibot">DevPost</Button>
          <Button color="inherit" href="https://github.com/HaterSnitch">Github</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default MainNav;
