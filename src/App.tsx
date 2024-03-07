import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div className="App">
      <header className="">
      <h1 className="text-3xl font-bold underline">
      <SearchContainer/>
    </h1>
      </header>
    </div>
  );
}

export default App;
