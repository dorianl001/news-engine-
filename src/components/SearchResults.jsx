import React from 'react';

function SearchResults({news}) {
    return (
      <div className="searchresults">
        {news && news.map(function(n) {
          return (
            <div key={n._id}>
              <h2>{n.headline.main}</h2>
              <img src={"https://www.nytimes.com/n/res.response.docs[0].multimedia[0].url"} alt=""></img>
              <p>{n.byline.original}</p>
              <a href={n.web_url} target="_blank" rel="noreferrer">Read full article here</a>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default SearchResults;
  
  // latestNews[n].