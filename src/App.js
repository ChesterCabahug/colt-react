import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from "./Counter"

function App() {
  return (
    <div>
      <Counter/>
      <Navbar/>
      <Greeter name="Chester" age="19" excitement={4}/>
      <Greeter name="Chri" excitement={2}/>
      <h1>Hello from App!!!!</h1>
    </div>
  );
}

export default App;
