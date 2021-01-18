import './App.css';
import React , { useState } from 'react';
import Header from './components/Header.jsx';
import HeadLines from './components/HeadLines.jsx';
import SearchResults from './components/SearchResults.jsx';



function App() {
  const [news, setNews] = useState('')

  const [search, setSearch] = useState('');

  function handleChange(event) {
      setSearch(event.target.value);
  }

  function handleSubmit(event) {
    console.log(search)
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
         news={news}
        // search={search}
      />
    </div>
      
    </div>
  );
}

export default App;
