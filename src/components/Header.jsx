import React from 'react';
import SearchBar from './SearchBar.jsx'

function Header( {setNews, handleChange, handleSubmit, search} ) {
   
    
    return (
        <div className="header-container">
           <h1>Web News|Your News</h1> 
           <p>Powered by the NY Times</p>
           <SearchBar 
           setNews={setNews}
           handleChange={handleChange}
           handleSubmit={handleSubmit}
           search={search}
           />    
        </div>
    );
}

export default Header;