import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Research from './Components/Research/Research';
import Campus from './Components/Campus/Campus';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      
    <Router>
      <Header></Header>
      <Switch>
        
       
      <Route path="/Home">
        <Home></Home>

      </Route>

      <Route path="/Courses">
        <Courses></Courses>

      </Route>


      <Route path="/Research">
        <Research></Research>

      </Route>

      <Route path="/Campus">
        <Campus></Campus>

      </Route>

      <Route path="/About">
        <About></About>

      </Route>


        
      
      </Switch>

      <Footer></Footer>
    </Router>

  

  </div>
  );
}

export default App;
