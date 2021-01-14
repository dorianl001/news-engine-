import React from 'react';
import SearchBar from './SearchBar'

function Header( {setNews} ) {
   
    
    return (
        <div className="header-container">
           <h1>Web News</h1> 
           <SearchBar setNews={setNews}/>    
        </div>
    );
}

export default Header;