import React from 'react';
import SearchBar from './SearchBar'

function Header() {
   
    
    return (
        <div className="header-container">
           <h1>Web News</h1> 
           <SearchBar/>    
        </div>
    );
}

export default Header;