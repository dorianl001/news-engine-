import React from 'react';

function SearchResults({news}) {
    return (
      <div className="searchresults">
        {news && news.map(function(n) {
          return (
            <div>
              <p key={n.title.id}>{n.title}</p>
              <p key={n.author.id}>{n.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
export default SearchResults;

