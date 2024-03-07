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
      <h1 className="text-3xl font-bold underline">
      <SearchContainer/>
    </h1>
      </header>
    </div>
  );
}

export default App;
