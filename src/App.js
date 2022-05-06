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
//adding
function App() {
  return (
    <div className="App">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>hi</li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>

</div>
<div class="mcard" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.u36SLBCbHDKIjqCHWPmGXQHaH3&pid=Api&P=0&w=153&h=162" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="mcard" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.u36SLBCbHDKIjqCHWPmGXQHaH3&pid=Api&P=0&w=153&h=162" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="mcard" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.u36SLBCbHDKIjqCHWPmGXQHaH3&pid=Api&P=0&w=153&h=162" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="mcard" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.u36SLBCbHDKIjqCHWPmGXQHaH3&pid=Api&P=0&w=153&h=162" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="mcard" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.u36SLBCbHDKIjqCHWPmGXQHaH3&pid=Api&P=0&w=153&h=162" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
  );
}

export default App;
