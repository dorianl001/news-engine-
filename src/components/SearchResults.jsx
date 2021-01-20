import React from 'react';

function SearchResults({news}) {
  if (news.length <1) {
    return <h2>Loading</h2>
  }

  return (
    <div className="searchresults">
        {news.map(function(n) {
          if (n.multimedia.length > 0) {

          }
          return (
            <div key={n._id}>
              <h2>{n.headline.main}</h2>
              { n.multimedia.length > 0 && 
               <img src={"https://www.nytimes.com/" + n.multimedia[0].url} alt="images"></img>
              
              }
              <p>{n.byline.original}</p>
              <a href={n.web_url} target="_blank" rel="noreferrer">Learn more</a>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default SearchResults;
  
