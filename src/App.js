import './App.css';
import React , { useState, useEffect } from 'react';
import Header from './Components/Header';
import HeadLines from './Components/HeadLines';
import SearchResults from './Components/SearchResults';

const newsApi= {
  key: process.env.REACT_APP_NEWS_WEBSITE_KEY,
  api: 'https://newsapi.org/v2/everything?',
  endpoint: 'q=everything?&apiKey='
};

function App() {
  const url = `${newsApi.api}${newsApi.endpoint}?api_key=${newsApi.key}&limit=${newsApi.limit}&offset=${newsApi.offset}&lang=en`;
  

  const [news, setNews] = useState()
  fetch()
    .then(res => res.json())
    .then(res => {
        setNews(res.data)
    })
    .catch(console.error) 

    useEffect(() => {
      setNews();
    }, [])

  return (
    <div className="App">
      
    <div className="AppHeader">
      <Header/>
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
