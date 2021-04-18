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
function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Home></Home>
      <About></About>
      <ContactUs></ContactUs> */}
      {/* <EventBinding></EventBinding> */}
       <PlayerList></PlayerList>
      {/* <Descrturing name="abhi" address="pune"></Descrturing> */} 
      {/* <Person name='abhishek' city='pune' country='india' ></Person> */}
    </div>
  );
}

export default App;
