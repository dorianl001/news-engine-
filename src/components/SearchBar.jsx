import React, { useState } from 'react';


function SearchBar( {setNews, handleChange, handleSubmit, search} ) {

    function getNews() {
        let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?' +
          `q=${search}&` +
          `api-key=${process.env.REACT_APP_NEWS_WEBSITE_KEY}`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setNews(res.response.docs)
            console.log(res.response.docs)
        })
        .catch(console.error) 
    
      }

    //   https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
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