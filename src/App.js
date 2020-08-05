import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart"
import './App.css';


function App() {
  return (
    <div>
      <Cart/>
      <Counter step={5}/>
      <Counter/>
      <MoodToggler/>
      <Navbar/>
      <Greeter name="Chester" age="19" excitement={4}/>
      <Greeter name="Chri" excitement={2}/>
      <h1>Hello from App!!!!</h1>
    </div>
  );
}

export default App;
