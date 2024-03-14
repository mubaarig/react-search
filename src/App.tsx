import React, { useEffect } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';

function App() {

  useEffect(()=>{
    document.title="Typescript React Search"
  })
  return (
    <div className="App">
      <header className="">
      <div>
      <h1>My Search App</h1>
      <SearchContainer />
    </div>
      </header>
    </div>
  );
}

export default App;
