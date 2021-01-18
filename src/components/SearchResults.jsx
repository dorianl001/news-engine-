import React from 'react';

function SearchResults({news}) {
    return (
      <div className="searchresults">
        {news && news.map(function(n) {
          return (
            <div>
              <p key={news.id}>{n.title}</p>
              <p>{n.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
export default SearchResults;

