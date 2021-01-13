import React from 'react';
import SearchBar from './SearchBar'

function Header(props) {
    console.log(process.env.React_APP_NEWS_WEBSITE_KEY)
    const searchNews = {
        key: process.env.React_APP_NEWS_WEBSITE_KEY,
    }
    return (
        <div className="header-container">
           <h1>Web News</h1> 
           <SearchBar/>

           
        </div>
    );
}

export default Header;