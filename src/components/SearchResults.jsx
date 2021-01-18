import React from 'react';

function SearchResults({news}) {
    return (
      <div className="searchresults">
        {news && news.map(function(n) {
          return (
            <div key={n.title.id}>
              <h2>{n.title}</h2>
              <img src={n.urlToImage}></img>
              <p>{n.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default SearchResults;
  
