import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Add } from './components/add';
import { Show } from './components/show';
import { Edit } from './components/edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//importing all the functions needed for this app
//generate navigation bar for the top of the webpage
//and routing the other pages by clicking the link
class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">


<Navbar bg="black" variant="purple">
    
    <Navbar.Brand href="#home">MyScheDule</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">HomePage</Nav.Link>
      <Nav.Link href="/show">Show Schedule</Nav.Link>
      <Nav.Link href="/add">Add Schedule</Nav.Link>
    </Nav> 
  </Navbar>

  <br />

  <Routes>
    <Route path='/' element={<Content/>} exact/>
    <Route path='/add' element={<Add/>} exact/>
    <Route path='/show' element={<Show/>} exact/>
    <Route path='/edit/:id' element={<Edit/>} exact/>
  </Routes>

  </div>
  </Router>
  );
}
}

export default App;
