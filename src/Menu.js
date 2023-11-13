import React from 'react';

 // Import the DessertsMenu component
import Starters from './Starters';
import Dessert from './Dessert';
import Nonveg from './NonVeg';
import Veg from './Veg';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Starters/>
     
      <Veg/>
      <Nonveg/>
      <Dessert/>
    
    </div>
  );
}

export default App;