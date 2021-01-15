import React from 'react';
import SearchBar from './SearchBar'

function Header( {setNews, handleChange, handleSubmit, search} ) {
   
    
    return (
        <div className="header-container">
           <h1>Web News</h1> 
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