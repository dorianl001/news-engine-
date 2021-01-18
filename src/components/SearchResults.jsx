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
              <a href={n.url} target="_blank">Read full article here</a>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default SearchResults;
  
