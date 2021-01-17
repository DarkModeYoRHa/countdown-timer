import logo from './logo.svg';
import{useState}from "react"
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const SECOND = 1000; // each second is 1000 miliseconds
const MINUTE = SECOND * 60; // 60 seconds per minute
const HOUR = MINUTE * 60; // 60 minutes per hour
const DAY = HOUR * 24; // 24 hours per day

function App() {
  let [currentTime, setCurrentTime]=useState (new Date())
  setInterval(() => {
    setCurrentTime(new Date())
  },1000)

  let targetDay = new Date(Date.parse("03 August 2021 00:00:00 PST"))
  let diffTime = Math.abs (targetDay - currentTime)
  
  let diffDays = Math.floor (diffTime/DAY)
  let diffHours = Math.abs(Math.floor ((diffTime % DAY) / HOUR ))
  let diffMinutes = Math.abs(Math.floor ((diffTime % HOUR) / MINUTE))
  let diffSeconds = Math.abs(Math.floor ((diffTime % MINUTE) / SECOND))
  // console.log(diffTime)
  return (
    <div className="App" style={{backgroundColor: "transparent"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Countdown to John Wick
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header" style={{backgroundColor: "transparent"}}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          i can't wait to see john wick
          You are doing amazing!
        </p>
        <div>
          {diffDays.toString()}{" Days "}
          {diffHours.toString()}{" Hours "}
          {diffMinutes.toString()}{" Minutes "}
          {diffSeconds.toString()}{" Seconds "}

        </div>     
           <div>
          {currentTime.toDateString()}
          {currentTime.toTimeString()}
        </div>
        <div>

          {targetDay.toDateString()}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
