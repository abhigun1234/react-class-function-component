import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import EventBinding from './EventBinding';
import PlayerList from './PlayerList';
import Descrturing from './Descrturing';
import Person from './Person';
// import Button from 'react-bootstrap/Button';

// or less ideally
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Checkbox from '@mui/material/Checkbox';
//adding
function App() {
  return (
    <div className="App">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Checkbox defaultChecked />
      <Checkbox  />
      <Checkbox  disabled />
      <Checkbox  disabled checked />
    </div>
  );
}

export default App;
