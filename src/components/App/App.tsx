import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { User } from '../User/User';

function App() {
  return (
    <div className="App">
      <User userName="tristanMatthias" />
    </div>
  );
}

export default App;
