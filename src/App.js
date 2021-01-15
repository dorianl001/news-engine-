import './App.css';
import React , { useState } from 'react';
import Header from './components/Header';
import HeadLines from './components/HeadLines';
import SearchResults from './components/SearchResults';



function App() {
  const [news, setNews] = useState()

  const [search, setSearch] = useState();

  function handleChange(event) {
      setSearch(event.target.value);
  }

  function handleSubmit(event) {
      event.preventDefault();
  }
  
  return (
    <div className="App">
      
    <div className="AppHeader">
      <Header 
      setNews={setNews}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      search={search}
      />
    </div>

    <div className="AppHeadLines">
      <HeadLines news={news}/>
    </div>

    <div className="AppSearchResults">
      <SearchResults
         
         search={search}
      />
    </div>
      
    </div>
  );
}

export default App;
