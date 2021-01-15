import './App.css';
import React , { useState } from 'react';
import Header from './Components/Header';
import HeadLines from './Components/HeadLines';
import SearchResults from './Components/SearchResults';



function App({ handleSubmit, handleChange, search }) {
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
      <Header setNews={setNews}/>
    </div>

    <div className="AppHeadLines">
      <HeadLines news={news}/>
    </div>

    <div className="AppSearchResults">
      <SearchResults
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         search={search}
      />
    </div>
      
    </div>
  );
}

export default App;
