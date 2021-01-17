import logo from './logo.svg';
import{useState, useEffect}from "react"
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'; 
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseLine from '@material-ui/core/CssBaseline';

const SECOND = 1000; // each second is 1000 miliseconds
const MINUTE = SECOND * 60; // 60 seconds per minute
const HOUR = MINUTE * 60; // 60 minutes per hour
const DAY = HOUR * 24; // 24 hours per day
const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});
function App() {
  let [currentTime, setCurrentTime]=useState (new Date())
  useEffect(()=>{
    console.log("creating interval")
    
    const interval = setInterval(() => {
      setCurrentTime(new Date())
      clearInterval(interval);
    },1000)

  });

  let targetDay = new Date(Date.parse("03 August 2021 00:00:00 PST"))
  let diffTime = Math.abs (targetDay - currentTime)
  
  let diffDays = Math.floor (diffTime/DAY)
  let diffHours = Math.abs(Math.floor ((diffTime % DAY) / HOUR ))
  let diffMinutes = Math.abs(Math.floor ((diffTime % HOUR) / MINUTE))
  let diffSeconds = Math.abs(Math.floor ((diffTime % MINUTE) / SECOND))
  // console.log(diffTime)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine/>
    <div className="App" >
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
      
      <header className="App-header" style={{backgroundImage:"url('/wick-bg.jpg')",backgroundSize:"cover",backgroundPosition: "center" }}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          makoto is the killer

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
    </ThemeProvider>
  );
}

export default App;
