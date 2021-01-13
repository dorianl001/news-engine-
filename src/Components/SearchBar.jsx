import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <form className="form-horizontal">
                <input placeholder="Search" type="text" name="searchString" required/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;