import './App.css';

import React from 'react';

import { RepoList } from '../RepoList/RepoList';
import { User } from '../User/User';

function App() {
  return (
    <div className="App">
      <User userName="tristanMatthias" />
      <RepoList />
    </div>
  );
}

export default App;
