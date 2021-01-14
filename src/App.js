import './App.css';
import React , { useState, useEffect } from 'react';
import Header from './Components/Header';
import HeadLines from './Components/HeadLines';
import SearchResults from './Components/SearchResults';



function App() {
  const [news, setNews] = useState()
  
  return (
    <div className="App">
      
    <div className="AppHeader">
      <Header setNews={setNews}/>
    </div>

    <div className="AppHeadLines">
      <HeadLines/>
    </div>

    <div className="AppSearchResults">
      <SearchResults/>
    </div>
      
    </div>
  );
}

export default App;
