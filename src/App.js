import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
