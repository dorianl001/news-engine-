import React, { useState } from 'react';


function SearchBar( {setNews, handleChange, handleSubmit, search} ) {

    function getNews() {
        let url = 'http://newsapi.org/v2/everything?' +
          `q=${search}&` +
          'from=2021-01-18&' +
          'sortBy=popularity&' +
          `apiKey=${process.env.REACT_APP_NEWS_WEBSITE_KEY}`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setNews(res.articles)
        })
        .catch(console.error) 
    
      }


    return (
        <div className="SearchBar">
            
            <form  onSubmit={handleSubmit} className="form-horizontal">
                <input 
                    placeholder="Search" 
                    type="text" 
                    name="search" 
                    required
                    onChange={handleChange}
                    value={search}
                    />
                <button onClick={getNews} type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;