import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 
import Herosection from './Herosection';
import About from './About';
import Menu from './Menu';
import Gallery from './Gallery';
import Chef from './Chef';
import Reservation from './Reservation';
import Blog from './Blog';

import Review from './Review';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <Router>
    <div>      
      <Routes>
        <Route path="/" element={<Herosection/>} />

        <Route path="/About" element={<About/>} />
        <Route path="/Menu" element={<Menu/>} />
<Route path="/Gallery" element={<Gallery/>}/>  
<Route path="/Chef" element={<Chef/>}/>  

<Route path="/Reservation" element={<Reservation/>}/>
<Route path="/Blog" element={<Blog/>}/>

<Route path="/Login" element={<Login/>}/>
<Route path="/Review" element={<Review/>}/>
<Route path="/Signup" element={<Signup/>}/>




    </Routes>
    </div>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
